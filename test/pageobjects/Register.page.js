const { $ } = require('@wdio/globals')


class RegisterPage{
   
    get signupOptn(){
        return $("#signin2")
    }
    get inputUsername () {
        return $("#sign-username")
    }
    
    get inputPassword () {
        return $('#sign-password')
    }
   
    get btnSignup () {
        return $('//button[text()="Sign up"]')
    }
    get welcomeMsg(){
        return $('#nameofuser')
    }
    get logoutbtn(){
        return $('#logout2')
    }
    
 
    async signup(username, password) {
        driver.maximizeWindow();
        await this.signupOptn.click()
        await browser.pause(1000);
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSignup.click();
    }

    async logout(){
        (await this.logoutbtn).click();
    }
  
}

module.exports = new RegisterPage();
