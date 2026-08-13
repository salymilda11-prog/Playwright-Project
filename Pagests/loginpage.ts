import { Locator, Page } from "@playwright/test"

export  class loginpage{
    page : Page
    username : Locator
    password : Locator
    loginbutton : Locator
    constructor(page : Page){
        this.page = page
this.username = page.getByPlaceholder("Username")
this.password = page.getByPlaceholder("Password")
this.loginbutton = page.getByText("Login")
    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async validateuser(un:string,pw:string){
        await this.username.fill(un)
        await this.password.fill(pw)
        await this.loginbutton.click()
    }
}