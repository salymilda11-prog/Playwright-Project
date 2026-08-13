export class checkout{
constructor(page){
    this.page=page
    this.checkout= page.locator("#checkout")
    this.firstname = page.getByPlaceholder("First Name")
    this.lastname = page.getByPlaceholder("Last Name")
    this.zip = page.getByPlaceholder("Zip/Postal Code")
    this.continueb = page.locator("#continue")
}

async gotocheckout(f,l,z){
await this.checkout.click()
await this.firstname.fill(f)
await this.lastname.fill(l)
await this.zip.fill(z)
await this.continueb.click()
}
}