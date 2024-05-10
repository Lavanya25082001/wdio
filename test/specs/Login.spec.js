const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/Login.page')
const data=require("../../Data/data.json")
require('dotenv').config();

describe('Login to the demobalze application', () => {
    // beforeEach(async () => {
    //     await LoginPage.launchingApplication()
    //   });
      afterEach(async () => {
        await LoginPage.logout()
      });
    it('should login with valid credentials', async () => {
        await LoginPage.login(data.Valid_credentials.username, data.Valid_credentials.password)
        await expect(LoginPage.welcomeMsg).toHaveText(data.Text_validation.welcome_text)  
    })

    it('Login with invalid credentials', async() =>{
        await LoginPage.login(data.invalid_credentials.username, data.invalid_credentials.password)
        await browser.pause(process.env.mediumWait)
        console.log("=========="+await browser.getAlertText()+"============")
        await browser.acceptAlert()
    })
    it('login without credentials',async() =>{
        await LoginPage.login('', '')
        await browser.pause(process.env.mediumWait)
        console.log("=========="+await browser.getAlertText()+"============")
        await browser.acceptAlert()
    })
})

