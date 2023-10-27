const { factory } = require("../../../factory")

async function handler(event) {
    try {
        const { username, password } = JSON.parse(event.body)

        const response = await factory.authenticate(username, password)

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