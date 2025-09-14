import {test, expect } from '@playwright/test'

test('Alert Test', async ({ page }) => {
    await page.goto ('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async(alertBox) => {
        const txt = alertBox.message()
        console.log("Display Confirmation alert Text", txt)
        // await alertBox.accept()
        await alertBox.dismiss()    
    }) 
    await page.getByRole('button', {name: 'Confirmation Alert'}).click()
})

test('Prompt Alerts Test', async ({ page }) => {
    await page.goto ('https://testautomationpractice.blogspot.com/')
    
    //Promt alert get Text, input and accept
    page.on('dialog', async(promptAlert) => {
        const txt = promptAlert.message()
        console.log("Display prompt alert Text", txt)
        await promptAlert.accept("Hello Welcome")    
    }) 
    await page.getByRole('button', {name: 'Prompt Alert'}).click()
    const txtMsg = await page.locator('p#demo').textContent()
    expect(txtMsg).toContain('Hello Welcome')
})


