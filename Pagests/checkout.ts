import { Locator, Page } from "@playwright/test"

export class checkout{
    page : Page
    checkout : Locator
    firstname : Locator
    lastname : Locator
    zip : Locator
    continueb : Locator
constructor(page : Page){
    this.page=page
    this.checkout= page.locator("#checkout")
    this.firstname = page.getByPlaceholder("First Name")
    this.lastname = page.getByPlaceholder("Last Name")
    this.zip = page.getByPlaceholder("Zip/Postal Code")
    this.continueb = page.locator("#continue")
}

async gotocheckout(f:string,l:string,z:string){
await this.checkout.click()
await this.firstname.fill(f)
await this.lastname.fill(l)
await this.zip.fill(z)
await this.continueb.click()
}
}