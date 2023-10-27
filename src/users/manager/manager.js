const { SignUpCommand, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider")

class Manager {
    constructor({
        cognito
    }) {
        this.cognito = cognito
        this.clientId = process.env.COGNITO_CLIENT_ID
    }

    async signUp(username, name, password) {
        const params = {
            ClientId: this.clientId,
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

    async confirmAccount(username, code) {
        const params = {
            ClientId: this.clientId,
            ConfirmationCode: code,
            Username: username 
        }

        const command = new ConfirmSignUpCommand(params);
        const response = await this.cognito.send(command)

        return response;
    }
}

module.exports = Manager