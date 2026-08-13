export  class loginpage{
    constructor(page){
        this.page = page
this.username = page.getByPlaceholder("Username")
this.password = page.getByPlaceholder("Password")
this.loginbutton = page.getByText("Login")
    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async validateuser(un,pw){
        await this.username.fill(un)
        await this.password.fill(pw)
        await this.loginbutton.click()
    }
}