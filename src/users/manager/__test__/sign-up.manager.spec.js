const { cognitoClient } = require("../../../config/cognito");
const Manager = require("../manager");
const { userMock } = require("./mocks/sign-up.mock");
const { describe, beforeEach, expect, it } = require('@jest/globals')

describe('Sign Up User', () => {
    /**
     * @type import('../manager')
     */
    let manager;
    
    beforeEach(() => {
        process.env.COGNITO_CLIENT_ID = 'xxxx'
        manager = new Manager({
            cognito: cognitoClient
        });
    })
    
    it('should be able to create an user', async() => {
        const response = await manager.signUp(userMock.username, 'Vinicius Pereira de Oliveira',userMock.password)

        expect(response.userConfirmed).toBe(false)
    })
})