import path from 'node:path';
import { test, expect } from '../../fixtures/pageFixtures';
import { DataProvider } from '../../utils/DataReader';

type LoginDataRow = {
    testName?: string;
    TestName?: string;
    email: string;
    password: string;
    expected: 'success' | 'failure';
};

const loginDataPath = path.resolve('testdata/opencart_logindata.json');
const loginData = DataProvider.readJson(loginDataPath) as LoginDataRow[];

for (const row of loginData) {
    const testName = row.testName ?? row.TestName ?? 'Unnamed login scenario';
    const email = row.email.trim();
    const password = row.password.trim();

    test(`${testName} @master @sanity @regression @datadriven @web`, async ({
        homePage,
        loginPage,
        accountPage,
    }) => {
        await test.step('1) Open the OpenCart login page', async () => {
            await homePage.openLogin();
        });

        await test.step('2) Submit the external test data', async () => {
            await loginPage.login(email, password);
        });

        await test.step('3) Validate the login result', async () => {
            const isAccountPageDisplayed = await accountPage.isAccountPageDisplayed();

            if (row.expected === 'success') {
                expect(isAccountPageDisplayed).toBeTruthy();
                return;
            }

            expect(isAccountPageDisplayed).toBeFalsy();

            const hasWarning = await loginPage.isLoginWarningDisplayed();
            const hasNativeValidation = await loginPage.isLoginFormInvalid();
            expect(hasWarning || hasNativeValidation).toBeTruthy();

            if (hasWarning) {
                expect(await loginPage.getLoginWarning()).toMatch(/^Warning:\s*.+/);
            }
        });

        console.log(`Completed data-driven login scenario: ${testName}`);
    });
}
