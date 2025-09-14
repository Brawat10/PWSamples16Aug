import { test, expect } from '@playwright/test'

test.describe(' Mouse Actions....', () => {
    test('Double click', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByRole('button', { name: 'Copy Text' }).dblclick()
        const copiedTxt = await page.locator('#field2').inputValue()
        expect(copiedTxt).toEqual('Hello World!')

    })
    test('Mouse Hover', async( {page} ) => {
       await page.goto('https://testautomationpractice.blogspot.com/')
       await page.getByRole('button', { name: 'Point Me' }).hover() 
       await page.getByRole('link', { name: 'Laptops' }).click() 
    })
})