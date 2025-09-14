
import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Testing', () => {
    test('Detect Accessibility issues...', async ({ page }) => {
        await page.goto('https://broken-workshop.dequelabs.com/')
        const scanResutls = await new AxeBuilder({ page }).analyze()
        //Console log the violations
        let violation = scanResutls.violations;
        violation.forEach(function (entry) {
            console.log(
                "Print the Violations:",
                entry.impact + " " + entry.description
            );
        });
        let count = violation.length;
        //Expect violations to be empty
        console.log("List of Violations:", violation);
        expect(count).toEqual(2);

    })
})