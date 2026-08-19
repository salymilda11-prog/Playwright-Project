# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> locators
- Location: tests\demo.spec.js:2:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('a[href=\'radio-button-demo.php\']')

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
      - img "Bootstrap 4 slider" [ref=e45]
      - heading "Bootstrap 4 Responsive Slider with Text Animation" [level=3] [ref=e47]
    - button "Previous" [ref=e48] [cursor=pointer]:
      - generic [ref=e50]: Previous
    - button "Next" [ref=e51] [cursor=pointer]:
      - generic [ref=e53]: Next
  - contentinfo [ref=e54]:
    - paragraph [ref=e57]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import {expect, test} from "@playwright/test"
  2  | test ("locators",async ({page})=>{
  3  |     await page.goto("https://selenium.qabible.in/")
  4  |     // await page.locator("a[href='simple-form-demo.php']").click()
  5  |     // await page.locator()
  6  |     // await page.locator("#single-input-field").fill("Have a Nice Day")
  7  |     // await page.locator(".btn.btn-primary").first().click()
  8  |     // await page.locator("//a[href='check-box-demo.php']").click()
  9  |     // await page.getByLabel("Click on this checkbox").check()
  10 |     // await page.locator("a[href='radio-button-demo.php']").click()
  11 |     // await page.getByRole("radio", {name : "Female"}).nth(0).click()
  12 |     // await page.pause()
  13 |     //await page.screenshot({path : "home1.png"})
  14 |     //expect (await page.screenshot()).toMatchSnapshot("home1.png")
> 15 |     await page.locator("a[href='radio-button-demo.php']").click()
     |                                                           ^ Error: locator.click: Test timeout of 40000ms exceeded.
  16 |     await page.screenshot({path : "demo2.png"})
  17 |     //expect (await page.screenshot()).toMatchSnapshot("demo1.png")
  18 | } )
```