import {test, expect } from '@playwright/test'

test.use({ viewport : {width: 1400, height: 900} })
test('Sample Input Test', async ({ page }) => {
    await page.goto ('https://example.com/')
    //await expect(page).toHaveScreenshot()
    expect(await page.textContent('h1')).toMatchSnapshot ('/example.txt')
})
