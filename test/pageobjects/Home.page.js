const { $ } = require('@wdio/globals')


class HomePage{
   get Home(){
    return $("//a[text()='Home ']")
   }
    get category(){
        return $('//a[@id="cat"]')
    }
    
    get Phones(){
        return $('//a[text()="Phones"]')
    }
    get laptops () {
        return $('//a[text()="Laptops"]')
    }

    get monitors () {
        return $('//a[text()="Monitors"]')
    }
    get mobile(){
        return $('(//div[@class="card h-100"])[1]')
    }
    get mobileModel(){
        return $('(//a[@class="hrefch"])[1]')
    }
    
    get addTocart () {
        return $('//a[text()="Add to cart"]')
    }
    get Cart(){
        return $('//a[@id="cartur"]')
    }
    get Cartproduct(){
        return $("//td[text()='Samsung galaxy s6']")
    }
    get placeorderBtn(){
        return $("//button[text()='Place Order']")
    } 
    get addressName(){
        return $("//input[@id='name']")
    }  
    get addresscountry(){
        return $('#country')
    }  
    get addresscity(){
        return $('#city')
    }  
    get addresscard(){
        return $('#card')
    }  
    get addressmonth(){
        return $('#month')
    }  
    get addressyear(){
        return $('#year')
    }  
    get purchaceBtn(){
        return $('//button[@onclick="purchaseOrder()"]')
    }  
    get SuccesspopText(){
        return $('//h2[text()="Thank you for your purchase!"]')
    }  
    get laptopProduct(){
        return $('(//div[@class="card h-100"])[1]')
    }
    get orderConfirm(){
        return $("//button[text()='OK']")
    }
    get logoutBtn(){
        return $('#logout2')
    }
    get monitorProduct(){
        return $('(//div[@class="card h-100"])[1]')
    }
    async addMobileProduct() {
        expect(await this.category).toHaveText('CATEGORIES')
        await this.Phones.click();
        // const product_name=(await this.mobileModel).getText()
        await this.mobile.click();
        await this.addTocart.click();
        // return product_name;
    }
    async addLaptopProduct() {
        // expect(await this.category).toHaveText('CATEGORIES')
        await this.laptops.click();
        // const product_name=(await this.mobileModel).getText()
        await this.laptopProduct.click();
        await this.addTocart.click();
        // return product_name;
    }
    async addMonitorProduct() {
        // expect(await this.category).toHaveText('CATEGORIES')
        await this.monitors.click();
        // const product_name=(await this.mobileModel).getText()
        await this.monitorProduct.click();
        await this.addTocart.click();
        // return product_name;
    }
    async cartActions(product_name){
        await this.Cart.click();
        // const Cartproduct_name=(await this.Cartproduct).getText()
        // expect(await product_name).toEqual(Cartproduct_name)
        // await browser.pause(2000)
        await this.placeorderBtn.click()
    }
    async logout(){
        await this.logoutBtn.click();
    }
  async enterAddress(name,country,city,card,month,year){
    await browser.pause(3000);
    await this.addressName.setValue(name);
    await this.addresscountry.setValue(country);
    await this.addresscity.setValue(city);
    await this.addresscard.setValue(card);
    await this.addressmonth.setValue(month);
    await this.addressyear.setValue(year);
    await this.purchaceBtn.click()
    expect(await this.SuccesspopText).toHaveText('Thank you for your purchase!')
    await browser.pause(3000);
    await this.orderConfirm.click();
    await browser.pause(1000);
  }
}

module.exports = new HomePage();
