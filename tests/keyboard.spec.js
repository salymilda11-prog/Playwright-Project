import test, { expect } from "@playwright/test";
test("locators", async({page})=>{
   await page.goto("https://selenium.qabible.in/") 
   await page.locator("a[href='simple-form-demo.php']").click()
   await page.locator("a[href='form-submit.php']").click()
   const fname = await page.locator("#validationCustom01")
   const lname = await page.locator("#validationCustom02")
   const uname = await page.locator("#validationCustomUsername") 
   const city = await page.locator("#validationCustom03")
   const state = await page.locator("#validationCustom04")
   const zip = await page.locator("#validationCustom05")
   await fname.click()
   await page.keyboard.type("milda")
   await lname.click()
   await page.keyboard.type("jacob")
   await lname.press("Control+A")
   await lname.press("Control+C")
   await city.click()
   await city.press("Control+V")
   await page.pause()
   const checkbox = await page.locator("#invalidCheck")
   await checkbox.dblclick()//double click
   await zip.click({button : "right"})
   await checkbox.click({clickCount : 3}) //tripple click

   //await page.pause()   
})