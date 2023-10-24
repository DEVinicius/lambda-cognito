const { factory } = require("../../../factory/sign-up.factory")

async function handler(event) {
    try {
        const { username, name, password } = JSON.parse(event.body)
        const response = await factory.signUp(username, name, password)

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: {
                error
            }
        }
    }
}

module.exports = {
    handler
}