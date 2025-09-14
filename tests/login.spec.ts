import {expect} from '@playwright/test'
import {test} from './paramTest'

const usernames = ['standard_user', 'visual_user']
for(const username of usernames) {
    
test(`Valid Login with ${username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    // await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="username"]').fill(username)
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    await expect(page.locator('[data-test="title"]')).toContainText('Products')
})
}

test.only('Parameterize project - Valid Login', async ({ page, username }) => {
    await page.goto('https://www.saucedemo.com/')
    // await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="username"]').fill(username)
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    await expect(page.locator('[data-test="title"]')).toContainText('Products')
})
// test.only('Using Env variable - Valid Login', async ({ page}) => {
//     await page.goto('https://www.saucedemo.com/')
//     // await page.locator('[data-test="username"]').fill('standard_user')
//     await page.locator('[data-test="username"]').fill(process.env.USERNAME)
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
//     await expect(page.locator('[data-test="title"]')).toContainText('Products')
// })

