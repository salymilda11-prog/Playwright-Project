export class shoppingcart {
constructor (page)
{
    this.page=page
    //this.shopingcart = this.page.locator(".shopping_cart_link")
}
async shoppingcart(){
await this.page.locator(".cart_list .inventory_item_name").first().waitFor()
const productvisible = await this.page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')").isVisible()
console.log(productvisible)
}
}
