import test, { expect } from '@playwright/test'

test('Sample Input Test', async ({ page }) => {
    await page.goto ('https://www.globalsqa.com/samplepagetest/')
    await expect(page).toHaveTitle(/GlobalSQA/)
})
test.only('Sample Locator Test', async ({ page }) => {
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.getByRole('link', { name: 'PlaywrightPractice' }).click()
    // await page.locator('#username').fill( 'Test User')

    await page.getByLabel('Username').fill('Test User')
    const inputTxt = await page.locator('#username').inputValue()
    expect(inputTxt). toEqual('Test User')

    // await page.getByRole('button', { name: 'START' }).click()
    
    await page.getByText( 'START').click()
    const btnTxt = await page.getByRole('button', { name : 'STOP'}).textContent()
    expect(btnTxt). toEqual('STOP')

    await page.getByRole('textbox', { name: 'Enter your full name'}).fill('My name is TestUser')
    // await page.getByPlaceholder('Enter your full name').fill('My name is TestUser')

})

test.only('Locators Using Filters', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const listItems = await page.locator('div#PageList2 ul li').all()

    // await page.locator('div#PageList2 ul li').first().click()
    // await page.locator('div#PageList2 ul li').last().click()
    await page.locator('div#PageList2 ul li').nth(2).click()

})

test.only ('Locators using filters', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const listItems =page.locator('div#PageList2 ul li')
    console.log(await listItems.count())    

// Method 1 - to get all text and select particular value
// for (let i=0; i< await listItems.count(); i++){
//     const itemTxt = await listItems.nth(i).textContent()
//     console.log("Each Item's Text :" + itemTxt);
//     if (itemTxt.includes("Blog")) {
//         console.log('Expected Text is....', itemTxt)
//         await listItems.nth(i).click()
//         expect(page).toHaveTitle(/Blog/)
//         break
//     }
// }

//  Method 2 - to get all text
const texts = await listItems.evaluateAll(list =>
    list.map(element => element.textContent))
    console.log("All Text Contents from Map:   :" + texts)

//  Method 3 - Using navigation methods to select elements
// await listItems.last().click()
// await listItems.first().click()
await listItems.nth(2).click()

//  Method 4 - Using filter to select elements
await listItems
    .filter({ hasText: 'PlaywrightPractice'})
    .click()

})

test('Key press test', async ({ page }) => {
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.getByRole('link', { name: 'PlaywrightPractice' }).click()
    const inpTxt = page.getByLabel('Username')
    // await inpTxt.fill('Test User')
    // await inpTxt.fill('Welcome', {force:true})

    await inpTxt.pressSequentially('Test User', {delay:500})
    await inpTxt.pressSequentially('Welcome')
    await inpTxt.press('PageDown')

})
