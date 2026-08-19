# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.js >> visualcomparison
- Location: tests\radio.spec.js:25:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  5966 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: home2.png

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link "logo" [ref=e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=e9]
    - navigation [ref=e14]:
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e19]:
          - link "Input Form" [ref=e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e21]:
          - link "Date Pickers" [ref=e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e23]:
          - link "Table" [ref=e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=e25]:
          - link "Progress Bars" [ref=e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=e27]:
          - link "Alerts and Modals" [ref=e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e29]:
          - link "List Box" [ref=e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=e31]:
          - link "Others" [ref=e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=e37]:
    - list [ref=e38]:
      - listitem [ref=e39] [cursor=pointer]
      - listitem [ref=e40] [cursor=pointer]
      - listitem [ref=e41] [cursor=pointer]
      - listitem [ref=e42] [cursor=pointer]
    - generic [ref=e44]:
      - img "Bootstrap 4 slider with text animation" [ref=e45]
      - generic [ref=e46]:
        - heading "Free Download" [level=3] [ref=e47]
        - heading "Bootstrap 4 slider with text animation" [level=3] [ref=e48]
    - button "Previous" [ref=e49] [cursor=pointer]:
      - generic [ref=e51]: Previous
    - button "Next" [ref=e52] [cursor=pointer]:
      - generic [ref=e54]: Next
  - contentinfo [ref=e55]:
    - paragraph [ref=e58]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import {expect, test} from "@playwright/test"
  2  | test ("locators", async ({page})=>{
  3  |     await page.goto("https://selenium.qabible.in/")
  4  |     await page.locator("a[href='simple-form-demo.php']").click()
  5  |     const checkboxdemo = page.locator("//a[@href='check-box-demo.php']")
  6  |     await checkboxdemo.click()
  7  |     const checkbox = page.getByLabel("Click on this check box")
  8  |     await checkbox.check() //special locators 
  9  |     await expect(checkbox).toBeChecked()
  10 |     expect(await checkbox.isChecked()).toBeTruthy()
  11 |     await checkbox.uncheck()
  12 |     //await expect(checkbox).toBeChecked()
  13 |     console.log(await checkbox.isChecked())
  14 |     expect(await checkbox.isChecked()).toBeFalsy()
  15 |    
  16 |     })
  17 |     //taking ss
  18 | test ("screenshot", async({page})=>{
  19 |     await page.goto("https://selenium.qabible.in/")
  20 |     await page.screenshot({path : "home.png"}) //full home page ss
  21 |     const inputform = page.locator("a[href='simple-form-demo.php']")
  22 |     await inputform.screenshot({path : "inputform.png"}) //only locator ss
  23 | })
  24 | // ss comparison
  25 | test ("visualcomparison", async({page})=>{
  26 |     await page.goto("https://selenium.qabible.in/")
> 27 |     expect(await page.screenshot()).toMatchSnapshot("home2.png")
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  28 | })
  29 | //iframe locator 
  30 | test ("Iframe", async({page})=>{
  31 |     await page.goto("https://demoqa.com/frames")
  32 |     const head = page.frameLocator("#frame1")
  33 |     const h1 = await head.locator("#sampleHeading").textContent()
  34 |     console.log(h1)
  35 | 
  36 | })
```