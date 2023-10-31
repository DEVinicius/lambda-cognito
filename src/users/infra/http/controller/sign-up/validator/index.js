const Joi = require('joi')

class SignUpValidator {
    static validate() {
        return Joi.object({
            username: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(3).max(40).required(),
            name: Joi.string().min(3).max(30).required()
        })
    }
}

module.exports = SignUpValidator