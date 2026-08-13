// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { permission } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout : 40 * 1000, 
  expect : {
    timeout : 50 * 1000,
  },
  /* Run tests in files in parallel */

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'], 
    ["allure-playwright"]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects : [{
    name: "chromeproject",
    use: {
    browserName: "chromium",
    headless: false, //run without headed
    screenshot: "only-on-failure",
    video: "retain-on-first-failure",
    trace: "retain-on-failure",
    //viewport: {width:500, height:500}
    ...devices["Desktop Chrome"],
    permissions: ["geolocation"],
    ignoreHTTPSErrors: true
  }},
  {
    name: "safariproject",
    use: {
    browserName:"webkit",
    headless: false, //run without headed
    screenshot: "only-on-failure",
    video: "retain-on-first-failure",
    trace: "retain-on-failure",
    //viewport: {width:500, height:500}
    ...devices["Galaxy A55"],
    permissions: ["geolocation"],
    ignoreHTTPSErrors: true
   } },

  ]

});

