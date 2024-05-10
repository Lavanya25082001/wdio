const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/Login.page')
const RegisterPage = require('../pageobjects/Register.page')
require('dotenv').config();
const data=require("../../Data/data.json")
describe('signup to the demobalze application', () => {
    // beforeEach(async () => {
    //     await LoginPage.launchingApplication()
    //   });
      afterEach(async () => {
        await LoginPage.logout()
      });
    it('signup with existing user credentials', async () => {
        await RegisterPage.signup(data.Valid_credentials.username, data.Valid_credentials.password)
        await browser.pause(process.env.mediumWait)
        console.log("=========="+await browser.getAlertText()+"============")
        await browser.acceptAlert()
    })

    it('Signup with invalid credentials', async() =>{
        await RegisterPage.signup(data.invalid_credentials.username, data.invalid_credentials.password)
        await browser.pause(process.env.mediumWait)
        console.log("=========="+await browser.getAlertText()+"============")
        await browser.acceptAlert()
    })

    it('Signup without credentials',async() =>{
        await RegisterPage.signup('', '')
        await browser.pause(process.env.mediumWait)
        console.log("=========="+await browser.getAlertText()+"============")
        await browser.acceptAlert()
    })

   
})

