const { decoratorValidator } = require("../../../../../util")
const { factory } = require("../../../factory")
const { ConfirmSignUpValidator } = require("./validator")

class ConfirmSignUp {
    static async handler(event) {
        try {
            const { username, code } = event.body
    
            const response = await factory.confirmAccount(username, code)
    
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
    handler: decoratorValidator(ConfirmSignUp.handler.bind(this), ConfirmSignUpValidator.validate(), 'body')
}