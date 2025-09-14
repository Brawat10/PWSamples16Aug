import { test, expect } from '@playwright/test'

test.describe('Handle Checkbox and Radiobuttons', { tag: ['@Smoke', '@Sanity'] }, () => {
    test.describe.configure({mode: 'serial'})
    // test.describe.configure({mode: 'parallel'})
    test.beforeAll(async () => {
        console.log('Before all the tests....')
    })
    test.beforeEach(async ({page}) => {
        console.log('Before each the tests....')
        await page.goto('https://testautomationpractice.blogspot.com/')
    })

    // To give retry in the file
    // test.describe.configure({retries: 2})
    test('Handle Checkbox', async ({page}) => {
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#monday').click()
    await page.getByRole('checkbox', { name: 'Monday' }).check()
    await page.getByRole('checkbox', { name: 'Tuesday' }).check()
    await page.getByRole('checkbox', { name: 'Thursday' }).check()

    const monday = page.getByRole('checkbox', { name : 'Monday'})
    expect(monday).toBeChecked()
    await monday.uncheck()
    expect(monday).toBeChecked()

    const allchkboxes = page.getByRole('checkbox')
    for (const chkBox of await allchkboxes.all()) {
        await chkBox.check()
        expect(chkBox).toBeChecked()
    }

})

    test('Handle RadioButtons', async ({page}) => {
        // test.slow()
        // test.fail()
        // test.fixme()
        // await page.goto('https://testautomationpractice.blogspot.com/')
        const radioBtn = page.getByLabel('Male', {exact: true})    
        await expect(radioBtn).not.toBeChecked()
        await radioBtn.check()

        await expect (radioBtn).toBeChecked()
        // To make it fail  for retries
        // await expect (radioBtn).not.toBeChecked()
    })    

    test.afterEach(async () => {
        console.log('After each tests....')
    })
    test.afterAll(async () => {
        console.log('After all the tests....')
    })
    
})