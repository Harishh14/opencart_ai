import { test, expect } from '../../fixtures/pageFixtures';
import { CustomerData } from '../../pages/RegisterPage';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { Helper } from '../../utils/helper';

test('End-to-end shopping flow @master @sanity @regression @e2e @web', async ({
    homePage,
    registerPage,
    loginPage,
    accountPage,
    productPage,
    cartPage,
}) => {
    const product = Helper.getProductDetails();
    const customer: CustomerData = {
        firstName: RandomDataUtil.getFirstName(),
        lastName: RandomDataUtil.getLastName(),
        email: `opencart-${Date.now()}-${RandomDataUtil.getEmail()}`,
        telephone: RandomDataUtil.getPhoneNumber(),
        password: RandomDataUtil.getPassword(12),
    };

    await test.step('1) Register a unique customer', async () => {
        await homePage.openRegistration();
        await registerPage.register(customer);
        expect(await registerPage.isRegistrationSuccessful()).toBeTruthy();
    });

    await test.step('2) Log out and authenticate again', async () => {
        await homePage.logout();
        await homePage.openLogin();
        await loginPage.login(customer.email, customer.password);
        expect(await accountPage.isAccountPageDisplayed()).toBeTruthy();
    });

    await test.step('3) Search for the known product and open details', async () => {
        await homePage.searchFor(product.productName);
        expect(await productPage.isSearchResultDisplayed()).toBeTruthy();
        await productPage.openProductDetails();
        expect(await productPage.isProductDisplayed()).toBeTruthy();
    });

    let productPrice = '';
    await test.step('4) Add the product to the cart', async () => {
        productPrice = await productPage.getPrice();
        await productPage.addToCart(Number(product.productQuantity));
        await homePage.openCart();
    });

    await test.step('5) Validate cart product, quantity, price, and total', async () => {
        expect(await cartPage.getProductName()).toContain(product.productName);
        expect(await cartPage.getQuantity()).toBe(product.productQuantity);
        expect(await cartPage.getProductPrice()).toContain(productPrice.replace(' ', ''));
        expect(await cartPage.getCartTotal()).toContain(productPrice.replace(' ', ''));
    });

    console.log('Completed end-to-end shopping flow successfully.');
});