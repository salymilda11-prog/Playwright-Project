import {test}  from "@playwright/test"
test("title", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://salymilda11.atlassian.net/jira/software/projects/ME/boards/2/backlog")
}) 