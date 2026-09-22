import { test, expect } from '../../fixtures/pageFixtures';

const email = process.env.APP_EMAIL;
const password = process.env.APP_PASSWORD;

if (!email || !password) {
    throw new Error('APP_EMAIL and APP_PASSWORD must be configured in .env.');
}

test('Valid Login Flow @master @sanity @regression @web @login', async ({
    page,
    homePage,
    loginPage,
    accountPage,
}) => {
    await test.step('1) Open the application', async () => {
        await expect(page).toHaveTitle('Your Store');
    });

    await test.step('2) Navigate to My Account > Login', async () => {
        await homePage.openLogin();
    });

    await test.step('3) Verify the login page is displayed', async () => {
        expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
    });

    await test.step('4) Enter valid customer credentials', async () => {
        await loginPage.login(email.trim(), password.trim());
    });

    await test.step('5) Verify successful authentication and account redirect', async () => {
        await expect(page).toHaveURL(/route=account\/account/);
        expect(await accountPage.isAccountPageDisplayed()).toBeTruthy();
    });

    await test.step('6) Verify authenticated account navigation', async () => {
        expect(await accountPage.isAuthenticatedNavigationDisplayed()).toBeTruthy();
    });

    console.log('Completed valid customer login flow successfully.');
});