const { cognitoClient } = require("../../../config/cognito");
const Manager = require("../../manager/manager");

const manager = new Manager({
    cognito: cognitoClient
})

module.exports = {
    factory: manager
}