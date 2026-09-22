import { Locator, Page } from '@playwright/test';

export class AccountPage {
    private readonly page: Page;

    // Locators
    private readonly heading: Locator;
    private readonly accountNavigation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('#content').getByRole('heading', { name: 'My Account' });
        this.accountNavigation = page.locator('#column-right').getByRole('link', { name: 'Edit Account', exact: true });
    }

    /** Checks whether the authenticated account page is displayed. */
    async isAccountPageDisplayed(): Promise<boolean> {
        return this.heading.isVisible();
    }

    /** Checks whether authenticated account navigation is displayed. */
    async isAuthenticatedNavigationDisplayed(): Promise<boolean> {
        return this.accountNavigation.isVisible();
    }
}