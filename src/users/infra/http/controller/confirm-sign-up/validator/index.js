const Joi = require('joi')

class ConfirmSignUpValidator {
    static validate() {
        return Joi.object({
            username: Joi.string().min(3).max(30).required(),
            code: Joi.string().min(3).max(40).required()
        })
    }
}

module.exports = {
    ConfirmSignUpValidator
}