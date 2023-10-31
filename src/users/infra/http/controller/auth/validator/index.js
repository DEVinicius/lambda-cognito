const Joi = require('joi')

class AuthValidator {
    static validate() {
        return Joi.object({
            username: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(3).max(40).required()
        })
    }
}

module.exports = {
    AuthValidator
}