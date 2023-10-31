const { decoratorValidator } = require("../../../../../util")
const { factory } = require("../../../factory")
const SignUpValidator = require("./validator")

class SignUp {
    static async handler(event) {
        try {
            
            const { username, name, password } = event.body
    
            const response = await factory.signUp(username, name, password)
    
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        }
    }
}

module.exports = {
    handler: decoratorValidator(SignUp.handler.bind(this), SignUpValidator.validate(), 'body')
}