import {expect, test} from "@playwright/test"
test ("locators", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.locator("a[href='simple-form-demo.php']").click()
    const checkboxdemo = page.locator("//a[@href='check-box-demo.php']")
    await checkboxdemo.click()
    const checkbox = page.getByLabel("Click on this check box")
    await checkbox.check() //special locators 
    await expect(checkbox).toBeChecked()
    expect(await checkbox.isChecked()).toBeTruthy()
    await checkbox.uncheck()
    //await expect(checkbox).toBeChecked()
    console.log(await checkbox.isChecked())
    expect(await checkbox.isChecked()).toBeFalsy()
   
    })
    //taking ss
test ("screenshot", async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.screenshot({path : "home.png"}) //full home page ss
    const inputform = page.locator("a[href='simple-form-demo.php']")
    await inputform.screenshot({path : "inputform.png"}) //only locator ss
})
// ss comparison
test ("visualcomparison", async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    expect(await page.screenshot()).toMatchSnapshot("home2.png")
})
//iframe locator 
test ("Iframe", async({page})=>{
    await page.goto("https://demoqa.com/frames")
    const head = page.frameLocator("#frame1")
    const h1 = await head.locator("#sampleHeading").textContent()
    console.log(h1)

})