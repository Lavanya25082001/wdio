const { $ } = require('@wdio/globals')


class LoginPage{
   
    get loginOptn(){
        return $("#login2")
    }
    get inputUsername () {
        return $("//input[@id='loginusername']")
    }

    get inputPassword () {
        return $('#loginpassword')
    }
    get usernameVerification(){
        return $('#nameofuser')
    }
    get btnLogin () {
        return $('//button[text()="Log in"]')
    }
    get welcomeMsg(){
        return $('#nameofuser')
    }
    get logoutbtn(){
        return $('#logout2')
    }
//    async launchingApplication(){
//     await browser.url("https://www.demoblaze.com/")
//     driver.maximizeWindow();
//     await browser.pause(1000);
//    }
    async login(username, password) {
        await this.loginOptn.click()
        await browser.pause(1000);
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async logout(){
        (await this.logoutbtn).click();
    }
  
}

module.exports = new LoginPage();
