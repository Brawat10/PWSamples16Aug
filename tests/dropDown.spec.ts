import { test, expect } from '@playwright/test'

test('Handle Dropdown',{tag: ['@Smoke']}, async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Using Callback and checking deep quality from string []
    await page.selectOption('#country', {
        index: 5
    }) .then ((dropdownValue) => {
        expect(dropdownValue).toEqual(['australia'])
    })
          

    // console.log(await page.locator('#country').innerText())
    // expect((await page.locator('#country').innerText()).includes('United States'))

    await page.locator('#animals').scrollIntoViewIfNeeded()
    await page.selectOption('#animals',
        [
            { label: 'Cat' },
            { value: 'elephant'},
            { index: 8 }
        ])

//Position the mouse at an element and further scrolling using mouse wheel
    await page.getByRole('button', {name: 'Point Me'}).hover()        
    await page.mouse.wheel(0,200)
    await page.waitForTimeout(4000)

//Using javascript scroll to an element
    // await page.getByRole('button', {name: 'START'}).click()
    // await page.getByRole('button', {name: 'STOP'}).evaluate(e => e.scrollTop +=900) 
    // await page.waitForTimeout(4000)
       


})