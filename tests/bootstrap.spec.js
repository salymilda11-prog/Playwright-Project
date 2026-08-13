import test, { expect } from "@playwright/test";
test("locators", async({page})=>{
   await page.goto("https://selenium.qabible.in/") 
   await page.locator("a[href='bootstrap-alert.php']").click()
   await page.locator("a[href='bootstrap-modal.php']").click()
   const modal = await page.locator(".btn.btn-primary").first()
   await modal.click()
   await expect(modal).toBeVisible()
   const bootstrapmodal = await page.locator("#exampleModalCenter")
   await expect(bootstrapmodal).toBeVisible()
   await bootstrapmodal.getByRole("button" , {name : "Save changes"}).click()
   await page.pause()
})
test("@web popup", async({page})=>{
    await page.goto("https://selenium.qabible.in/") 
    await page.locator("a[href='bootstrap-alert.php']").click()
    await page.locator("a[href='javascript-alert.php']").click()
    const clickme = await page.locator(".btn.btn-warning")
    
    //handling dialog box
    page.once("dialog" , async dialog=>{
        
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        await dialog.accept()
    // //page.on("dialog" , async dialog=>{
    //     await new Promise((resolve) => {
    //         setTimeout(resolve, 3000)
    //     })
    //     await dialog.dismiss()})
    await clickme.click()
    await page.pause()
    })
})