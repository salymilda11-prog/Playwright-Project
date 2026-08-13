import { Locator, Page } from "@playwright/test"

 export class producticon{
    page : Page
    productname : Locator
    productdesc : Locator
    shopingcart : Locator
   // listproduct : string[]
   // count : Number
    constructor(page : Page){
        this.page=page
        this.productname = page.locator(".inventory_item_name")
        this.productdesc = page.locator(".inventory_item_description")
        this.shopingcart = this.page.locator(".shopping_cart_link")
    }
       
    
async productdetails(product : string){
 
    const listproduct = await this.productname.allTextContents()
    const count = await this.productname.count()
    console.log(count)
    console.log(listproduct)
    for (let i=0; i<count; i++)
    {
    if(await this.productdesc.nth(i).locator(".inventory_item_name").textContent()===product){
        console.log(await this.productdesc.nth(i).locator(".inventory_item_name").textContent())
        const cart = this.page.getByText("Add to cart")
        await cart.nth(i).click()
        await this.page.pause()
        break
        }
    }
}
async gotocart(){
await this.shopingcart.click()
}
 }


