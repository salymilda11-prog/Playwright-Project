//Playwright hooks
import { test } from "allure-playwright"
test.beforeEach("BeforeEach", async({page})=>{
    console.log("run before every test")
    
})
test ("Test1", async({page})=>{
    console.log("test1 executed")
})
test ("Test2", async({page})=>{
    console.log("test2 executed")
})
test.afterEach("AfterEach", async({page})=>{
    console.log("run after every test")
    
})
test.beforeAll("BeforeAll", async({browser})=>{ //will not take page as fixture can use browser as fixture
    console.log("Welcome to my prgm")
    
})
test.afterAll("afterall", async({browser})=>{ //will not take page as fixture can use browser as fixture
    console.log("Tnq")
    
})

test.describe("loginscenarios", ()=>{
test ("login", async({page})=>{
    console.log("login successfull")
})
test ("invalidlogin", async({page})=>{
    console.log("invalid login")
})


})
