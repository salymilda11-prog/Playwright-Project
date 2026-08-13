import {test} from "@playwright/test";
import { pagemanager } from "../Pages/pagemanager";
import data from "../utilis/data.json"
//const dataobj = JSON.parse(JSON.stringify(data))
for (let dataobj of data){


test("locators" + dataobj.productitem, async({page})=>{
    
    const pm = new pagemanager(page)
    const lp = pm.getLogin()
    const pi = pm.getProduct()
    const sc = pm.getCart()
    const ck = pm.getCheckout()
    await lp.goto()
    await lp.validateuser(dataobj.username, dataobj.password)
    await pi.productdetails(dataobj.productitem)
    await pi.gotocart()
    await sc.shoppingcart()
    await ck.gotocheckout(dataobj.firstname,dataobj.lastname,dataobj.zip)
})
}

// const productname = page.locator(".inventory_item_name")
// const listproduct = await productname.allTextContents()
// console.log(listproduct)
// const count = await productname.count()
// console.log(count)
// const product = "Sauce Labs Backpack"
// const productdesc = page.locator(".inventory_item_description")
// for (let i=0; i<count; i++)
// {
//     if(await productdesc.nth(i).locator(".inventory_item_name").textContent()===product){
//         console.log(await productdesc.nth(i).locator(".inventory_item_name").textContent())
//         const cart = page.getByText("Add to cart")
//         await cart.nth(i).click()
//         // await page.pause()
//         break
//     }
       
// }

// const shopingcart = page.locator(".shopping_cart_link")
// await shopingcart.click()
// await page.locator(".cart_list .inventory_item_name").first().waitFor()
// const productvisible = await page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')").isVisible()
// console.log(productvisible)
// const checkout = page.locator("#checkout")
// await checkout.click()
// await page.pause()
// const firstname = page.getByPlaceholder("First Name")
// const lastname = page.getByPlaceholder("Last Name")
// const zip = page.getByPlaceholder("Zip/Postal Code")
// await firstname.fill("Miya")
// await lastname.fill("jose")
// await zip.fill("686575")
// const continueb = page.locator("#continue")
// await continueb.click()
// })