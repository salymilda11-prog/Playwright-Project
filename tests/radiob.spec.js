import {test, expect} from "@playwright/test";

test("locators", async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.locator('a[href="simple-form-demo.php"]').click()
    await page.locator("a[href='radio-button-demo.php']").click()
    //get by role
    await page.getByRole("radio",{name : "Male"}).first().click()
    await expect(page.getByRole("radio",{name : "Male"}).first()).toBeChecked()
    console.log(await page.getByRole("radio",{name : "Male"}).first().isChecked())
    await page.locator('a[href="select-input.php"]').click()

    //variable assign
    const selectinbox = page.locator("#single-input-field")
    await selectinbox.selectOption("Red")
    const selectcolr = page.locator("#message-one")
    await selectcolr.click()
    await expect(selectcolr).toContainText("Red") // assertion
    await page.pause()
})
