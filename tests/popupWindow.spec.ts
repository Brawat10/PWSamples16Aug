import {test, expect } from '@playwright/test'

test('Alert Test', async ({ page }) => {
    await page.goto ('https://testautomationpractice.blogspot.com/')
   
// Method 1 
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('button', {name : 'New Tab'}).click()
    ])
    await newWindow.waitForLoadState()
    expect(newWindow.url()).toContain('pavantestingtool')
    newWindow.close()

//Method 2
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('button', {name : 'New Tab'}).click()
    const popup = await popupPromise
    //await popup.waitForLoadState()
    await popup.waitForTimeout(3000)
    expect(popup.url()).toContain('pavantestingtools')


}) 