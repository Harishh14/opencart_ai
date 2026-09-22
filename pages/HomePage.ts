import { Locator, Page } from '@playwright/test';

export class HomePage {
    private readonly page: Page;

    // Locators
    private readonly myAccountMenu: Locator;
    private readonly registerLink: Locator;
    private readonly loginLink: Locator;
    private readonly logoutLink: Locator;
    private readonly searchInput: Locator;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.myAccountMenu = page.locator('a[title="My Account"]');
        this.registerLink = page.getByRole('link', { name: 'Register', exact: true });
        this.loginLink = page.locator('#top-links a[href*="account/login"]');
        this.logoutLink = page.locator('#top-links a[href*="account/logout"]');
        this.searchInput = page.locator('input[name="search"]');
        this.cartLink = page.getByRole('link', { name: /Shopping Cart/ });
    }

    /** Opens the My Account menu. */
    async openMyAccountMenu(): Promise<void> {
        await this.myAccountMenu.click();
    }

    /** Navigates to customer registration. */
    async openRegistration(): Promise<void> {
        await this.openMyAccountMenu();
        await this.registerLink.click();
    }

    /** Navigates to customer login. */
    async openLogin(): Promise<void> {
        await this.openMyAccountMenu();
        await this.loginLink.click();
    }

    /** Logs out the current customer. */
    async logout(): Promise<void> {
        await this.openMyAccountMenu();
        await this.logoutLink.click();
    }

    /** Searches for a product. */
    async searchFor(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    }

    /** Opens the shopping cart. */
    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}