const { CognitoIdentityProviderClient } = require('@aws-sdk/client-cognito-identity-provider')

const client = new CognitoIdentityProviderClient({
    region: 'us-east-1'
})

module.exports = {
    cognitoClient: client
}