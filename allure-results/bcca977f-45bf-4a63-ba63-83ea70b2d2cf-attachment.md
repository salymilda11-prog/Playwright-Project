# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.js >> locators
- Location: tests\keyboard.spec.js:2:5

# Error details

```
Error: locator.press: Unknown key: "control"
Call log:
  - waiting for locator('#validationCustom02')
    - locator resolved to <input value="" type="text" required="" class="form-control" id="validationCustom02" placeholder="Last name"/>
  - elementHandle.press("control+A")

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e35]:
    - generic [ref=e38]:
      - generic [ref=e39]: Menu
      - list [ref=e40]:
        - listitem [ref=e41]:
          - link "Simple Form Demo" [ref=e42] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e43]:
          - link "Checkbox Demo" [ref=e44] [cursor=pointer]:
            - /url: check-box-demo.php
        - listitem [ref=e45]:
          - link "Radio Buttons Demo" [ref=e46] [cursor=pointer]:
            - /url: radio-button-demo.php
        - listitem [ref=e47]:
          - link "Select Input" [ref=e48] [cursor=pointer]:
            - /url: select-input.php
        - listitem [ref=e49]:
          - link "Form Submit" [ref=e50] [cursor=pointer]:
            - /url: form-submit.php
        - listitem [ref=e51]:
          - link "Ajax Form Submit" [ref=e52] [cursor=pointer]:
            - /url: ajax-form-submit.php
        - listitem [ref=e53]:
          - link "Jquery Select2" [ref=e54] [cursor=pointer]:
            - /url: jquery-select.php
    - generic [ref=e57]:
      - generic [ref=e58]: Form with validations
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: First name
            - textbox "First name" [ref=e64]: milda
          - generic [ref=e65]:
            - generic [ref=e66]: Last name
            - textbox "Last name" [active] [ref=e67]: jacob
          - generic [ref=e68]:
            - generic [ref=e69]: Username
            - generic [ref=e70]:
              - generic [ref=e72]: "@"
              - textbox "Username" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: City
            - textbox "City" [ref=e77]
          - generic [ref=e78]:
            - generic [ref=e79]: State
            - textbox "State" [ref=e80]
          - generic [ref=e81]:
            - generic [ref=e82]: Zip
            - textbox "Zip" [ref=e83]
        - generic [ref=e85]:
          - checkbox "Agree to terms and conditions" [ref=e86]
          - generic [ref=e87]: Agree to terms and conditions
        - button "Submit form" [ref=e88] [cursor=pointer]
  - contentinfo [ref=e89]:
    - paragraph [ref=e92]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | test("locators", async({page})=>{
  3  |    await page.goto("https://selenium.qabible.in/") 
  4  |    await page.locator("a[href='simple-form-demo.php']").click()
  5  |    await page.locator("a[href='form-submit.php']").click()
  6  |    const fname = await page.locator("#validationCustom01")
  7  |    const lname = await page.locator("#validationCustom02")
  8  |    const uname = await page.locator("#validationCustomUsername") 
  9  |    const city = await page.locator("#validationCustom03")
  10 |    const state = await page.locator("#validationCustom04")
  11 |    const zip = await page.locator("#validationCustom05")
  12 |    await fname.click()
  13 |    await page.keyboard.type("milda")
  14 |    await lname.click()
  15 |    await page.keyboard.type("jacob")
> 16 |    await lname.press("control+A")
     |                ^ Error: locator.press: Unknown key: "control"
  17 |    await lname.press("control+C")
  18 |    await city.click()
  19 |    await city.press("control+V")
  20 |    
  21 |    await page.pause()   
  22 | })
```