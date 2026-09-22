import { Locator, Page } from '@playwright/test';

export class AdminCustomerPage {
    private readonly page: Page;

    // Locators
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly emailFilter: Locator;
    private readonly filterButton: Locator;
    private readonly customerRows: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with verified accessible labels
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: /Login/ });
        this.emailFilter = page.getByRole('textbox', { name: 'E-Mail' });
        this.filterButton = page.getByRole('button', { name: /Filter/ });
        this.customerRows = page.locator('table tbody tr');
    }

    /** Opens the Admin Portal login page. */
    async open(): Promise<void> {
        const adminUrl = process.env.ADMIN_URL || 'http://localhost/opencart/upload/admin/index.php';
        await this.page.goto(adminUrl);
    }

    /** Authenticates in the Admin Portal. */
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    /** Opens the customer list from the Admin Portal navigation. */
    async openCustomerList(): Promise<void> {
        const currentUrl = new URL(this.page.url());
        const userToken = currentUrl.searchParams.get('user_token');
        if (!userToken) {
            throw new Error('Admin user token was not found after login.');
        }

        await this.page.goto(
            `${currentUrl.origin}${currentUrl.pathname}?route=customer/customer&user_token=${userToken}`,
        );
    }

    /** Filters the customer list by email. */
    async searchByEmail(email: string): Promise<void> {
        await this.emailFilter.fill(email);
        await this.filterButton.click();
    }

    /** Checks whether a customer row containing the email exists. */
    async hasCustomer(email: string): Promise<boolean> {
        return this.customerRows.filter({ hasText: email }).count().then(count => count === 1);
    }

    /** Returns the customer row matching the supplied email. */
    getCustomerRow(email: string): Locator {
        return this.customerRows.filter({ hasText: email });
    }
}