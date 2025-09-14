import {chromium, test} from '@playwright/test'

test('Open multiple contexts', async () => {
    const browser = await chromium.launch({
        headless: false
    })

    const contextOne = await browser.newContext()
    const pageOne = await contextOne.newPage()
    pageOne.setViewportSize({width:1200, height:800})
    await pageOne.goto('https://www.demoblaze.com/')
    await pageOne.waitForTimeout(4000)
    contextOne.close()

    const contextTwo = await browser.newContext()
    const pageTwo = await contextOne.newPage()
    pageTwo.setViewportSize({width:1000, height:600})
    await pageTwo.goto('https://www.playwright.dev/')
    await pageTwo.waitForTimeout(4000)
    contextTwo.close()

})