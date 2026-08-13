import {test} from "@playwright/test";
test("locators", async({page})=>{
await page.goto("https://www.saucedemo.com/")
const username = page.getByPlaceholder("Username")
const password = page.getByPlaceholder("Password")
const loginbutton = page.getByText("Login")
await username.fill("standard_user")
await password.fill("secret_sauce")
await loginbutton.click()
const error = await page.locator(".error-message-container.error")
const errormsg = await error.textContent()
console.log(errormsg)

//username null
const u_null = await page.locator(".svg-inline--fa.fa-xmark")
const nulluser = await u_null.textContent()
console.log(nulluser)
await page.pause()
//password null
const p_null = await page.locator(".svg-inline--fa.fa-xmark")
const nullpass = await p_null.textContent()
console.log(nullpass)
await page.pause()

})