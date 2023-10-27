const { factory } = require("../../../factory/sign-up.factory")

async function handler(event) {
    try {
        const { username, code } = JSON.parse(event.body)

        const response = await factory.confirmAccount(username, code)

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    } catch (error) {
        console.log({error})
        return {
            statusCode: 400,
            body: JSON.stringify(error)
        }
    }
}

module.exports = {
    handler
}