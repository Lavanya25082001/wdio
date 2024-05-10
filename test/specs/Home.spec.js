const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/Login.page')
const HomePage = require('../pageobjects/Home.page')
require('dotenv').config();
const data=require("../../Data/data.json")
describe('Purchase mobile from demoblaze', () => {
    // beforeEach(async () => {
    //     await LoginPage.launchingApplication()
    //     await LoginPage.login('joe123@gmail.com', 'Joe@123')
    //   });
      
    
    
    it('Adding mobile product to cart', async () => {
        await LoginPage.login(data.Valid_credentials.username, data.Valid_credentials.password)
        await HomePage.addMobileProduct();
        await HomePage.cartActions()
        await HomePage.enterAddress('joe','india', 'vizag', '123456', '5' ,'2024')
        
        await HomePage.logout()
    })  
    // it('Adding monitor product to cart', async () => {
    //     await LoginPage.launchingApplication()
    //     await LoginPage.login('joe123@gmail.com', 'Joe@123')
    //     await HomePage.addMonitorProduct();
    //     // console.log("=========="+await browser.getAlertText()+"============")
    //     // await browser.acceptAlert()
    //     await HomePage.cartActions()
    //     await HomePage.enterAddress('joe','india', 'vizag', '123456', '5' ,'2024')
    //     await HomePage.logout()
    // })
    // it('Adding laptop product to cart', async () => {
    //     await LoginPage.launchingApplication()
    //     await LoginPage.login('joe123@gmail.com', 'Joe@123')
    //     await HomePage.addLaptopProduct();
    //     // console.log("=========="+await browser.getAlertText()+"============")
    //     // await browser.acceptAlert()
    //     await HomePage.cartActions()
    //     await HomePage.enterAddress('joe','india', 'vizag', '123456', '5' ,'2024')
    //     await HomePage.logout()
    // })
})
describe('Purchase laptop from demoblaze', () => {
    it('Adding laptop product to cart', async () => {
        await LoginPage.launchingApplication()
        await LoginPage.login(data.Valid_credentials.username, data.Valid_credentials.password)
        await HomePage.addLaptopProduct();
        // console.log("=========="+await browser.getAlertText()+"============")
        // await browser.acceptAlert()
        await HomePage.cartActions()
        await HomePage.enterAddress(data.address.name,data.address.country, data.address.city, data.address.cardnum, data.address.month,data.address.year)
        await LoginPage.logout()
    })
   
})
describe('Purchase monitor from demoblaze', () => {
    it('Adding monitor product to cart', async () => {
        await LoginPage.launchingApplication()
        await LoginPage.login(data.Valid_credentials.username, data.Valid_credentials.password)
        await HomePage.addMonitorProduct();
        // console.log("=========="+await browser.getAlertText()+"============")
        // await browser.acceptAlert()
        await HomePage.cartActions()
        await HomePage.enterAddress(data.address.name,data.address.country, data.address.city, data.address.cardnum, data.address.month,data.address.year)
        await LoginPage.logout()
    })
   
})
