import {test} from "@playwright/test";
test("locators", async({page})=>{
await page.goto("https://www.saucedemo.com/")
const username = page.getByPlaceholder("Username")
const password = page.getByPlaceholder("Password")
const loginbutton = page.getByText("Login")
await username.fill("standard_user")
await password.fill("secret_sauce")
await loginbutton.click()
const productname = page.locator(".inventory_item_name")
const listproduct = await productname.allTextContents()
console.log(listproduct)
const count = await productname.count()
console.log(count)
const product = "Sauce Labs Backpack"
const productdesc = page.locator(".inventory_item_description")
for (let i=0; i<count; i++)
{
    if(await productdesc.nth(i).locator(".inventory_item_name").textContent()===product){
        console.log(await productdesc.nth(i).locator(".inventory_item_name").textContent())
        const cart = page.getByText("Add to cart")
        await cart.nth(i).click()
        // await page.pause()
        break
    }
       
}
const shopingcart = page.locator(".shopping_cart_link")
await shopingcart.click()
await page.locator(".cart_list .inventory_item_name").first().waitFor()
const productvisible = await page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')").isVisible()
console.log(productvisible)
const checkout = page.locator("#checkout")
await checkout.click()
await page.pause()
const firstname = page.getByPlaceholder("First Name")
const lastname = page.getByPlaceholder("Last Name")
const zip = page.getByPlaceholder("Zip/Postal Code")
await firstname.fill("Miya")
await lastname.fill("jose")
await zip.fill("686575")
const continueb = page.locator("#continue")
await continueb.click()
})