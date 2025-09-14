import { test, expect } from '@playwright/test'

test('Handle iFrame and tooltip', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/')

    const frame1 = page.frameLocator('.demo-frame')
    const inputAge = frame1.locator('#age')
    await inputAge.hover()
    const toolTxt = await frame1.getByRole('tooltip').textContent()
    expect(toolTxt).toEqual('We ask for your age only for statistical purposes.')

}) 