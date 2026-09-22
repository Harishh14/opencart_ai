import { test, expect } from '../../fixtures/pageFixtures';
import { CustomerData } from '../../pages/RegisterPage';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { executeQuery } from '../../utils/dbClient';

type CustomerRow = {
    firstname: string;
    lastname: string;
    email: string;
    status: number;
    date_added?: string | Date;
};

test('Register customer and validate UI, Admin, and MySQL @master @regression @db', async ({
    homePage,
    registerPage,
    adminCustomerPage,
}) => {
    const customer: CustomerData = {
        firstName: RandomDataUtil.getFirstName(),
        lastName: RandomDataUtil.getLastName(),
        email: `opencart-db-${Date.now()}-${RandomDataUtil.getEmail()}`,
        telephone: RandomDataUtil.getPhoneNumber(),
        password: RandomDataUtil.getPassword(12),
    };

    await test.step('1) Register the generated customer through the frontend', async () => {
        await homePage.openRegistration();
        await registerPage.register(customer);
        expect(await registerPage.isRegistrationSuccessful()).toBeTruthy();
    });

    await test.step('2) Verify the customer in the Admin Portal', async () => {
        await adminCustomerPage.open();
        await adminCustomerPage.login(
            process.env.ADMIN_USERNAME || '',
            process.env.ADMIN_PASSWORD || '',
        );
        await adminCustomerPage.openCustomerList();
        await adminCustomerPage.searchByEmail(customer.email);

        expect(await adminCustomerPage.hasCustomer(customer.email)).toBeTruthy();
        const row = adminCustomerPage.getCustomerRow(customer.email);
        await expect(row).toContainText(customer.firstName);
        await expect(row).toContainText(customer.lastName);
        await expect(row).toContainText(customer.email);
        await expect(row).toContainText('Enabled');
    });

    await test.step('3) Verify the customer in MySQL', async () => {
        const rows = await executeQuery(
            'SELECT firstname, lastname, email, status, date_added FROM oc_customer WHERE email = ?',
            [customer.email],
        ) as CustomerRow[];

        expect(rows).toHaveLength(1);
        expect(rows[0].firstname).toBe(customer.firstName);
        expect(rows[0].lastname).toBe(customer.lastName);
        expect(rows[0].email).toBe(customer.email);
        expect(rows[0].status).toBe(1);
        expect(rows[0].date_added).toBeTruthy();
    });

    console.log(`Completed UI, Admin, and MySQL validation for ${customer.email}`);
});