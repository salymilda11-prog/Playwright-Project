import test from "@playwright/test";
test("@web locators", async({page})=>{
   await page.goto("https://selenium.qabible.in/") 
   await page.locator('a[href="date-picker.php"]').click()
   await page.locator(".form-control.datepicker").click()
   await page.locator(".datepicker-days th.datepicker-switch").click()
   await page.locator(".datepicker-months th.datepicker-switch").click()
   const month = 10
   const date = 15
   const targetyear = 2021
   while(true){
   const year = await page.locator(".datepicker-years th.datepicker-switch").textContent()
   console.log(year)
   const startyear =  parseInt(year.split("-")[0]) //converting string to num
   const endyear =  parseInt(year.split("-")[1]) 
   console.log(startyear)
   console.log(endyear)
   if(targetyear >= startyear && targetyear <= endyear)
    break
   if(targetyear < startyear){
   await page.locator(".datepicker-years th.prev").click()
   }
   else{
   await page.locator(".datepicker-years th.next").click()
   console.log(await page.locator(".datepicker-years th.next").isVisible())
   }}
   await page.getByText(targetyear.toString(),{exact : true}).first().click()
   await page.locator(".month").nth(month-1).click()
   await page.getByText(date.toString(),{exact : true}).first().click()
   await page.pause() 
})