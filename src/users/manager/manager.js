const { SignUpCommand } = require("@aws-sdk/client-cognito-identity-provider")

class Manager {
    constructor({
        cognito
    }) {
        this.cognito = cognito
    }

    async signUp(username, name, password) {
        const params = {
            ClientId: process.env.COGNITO_CLIENT_ID,
            Password: password,
            Username: username,
            UserAttributes: [
                {
                    Name: 'name',
                    Value: name
                }
            ]
        }

        const command = new SignUpCommand(params)

        const client = await this.cognito.send(command)

        return {
            userConfirmed: client.UserConfirmed,
            userSubscribe: client.UserSub
        }
    }
}

module.exports = Manager