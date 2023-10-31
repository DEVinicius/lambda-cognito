const decoratorValidator = require("../../../../../util/decoratorValidator")
const { factory } = require("../../../factory")
const { AuthValidator } = require("./validator")

class Auth {
    static async handler(event) {
        try {
            const { username, password } = event.body
    
            const response = await factory.authenticate(username, password)
    
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
    handler: decoratorValidator(Auth.handler.bind(this), AuthValidator.validate(), 'body')
}