import {test} from "@playwright/test"
test ("locators", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    //await page.locator(".nav-link").click() //locating class - class is a attribute
    await page.locator("a[href='simple-form-demo.php']").click() // locating attributes -
                            //  use single quotes or dbl quote simultensly- 
                            //  not use on same 
    await page.locator("#single-input-field").fill("Hello")
    //label locating
    await page.pause()
   // await page.locator(".btn.btn-primary").first().click()
    //class name has 2 name separate by space we have to use. instead of space 
    await page.locator(".btn.btn-primary").nth(0).click()//by using index method
    //xpath loctor-checkbox click
    await page.locator("//a[@href='check-box-demo.php']").click()


})
