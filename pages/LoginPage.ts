import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    // Locators
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly continueButton: Locator;
    private readonly warningMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.continueButton = page.locator('input[value="Login"]');
        this.warningMessage = page.locator('.alert-danger');
    }

    /** Checks whether the customer login form is displayed. */
    async isLoginPageDisplayed(): Promise<boolean> {
        return this.emailInput.isVisible() && this.passwordInput.isVisible() && this.continueButton.isVisible();
    }

    /** Logs in with the supplied customer credentials. */
    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.continueButton.click();
    }

    /** Checks whether the login warning is displayed. */
    async isLoginWarningDisplayed(): Promise<boolean> {
        return this.warningMessage.isVisible();
    }

    /** Returns the visible login warning text. */
    async getLoginWarning(): Promise<string> {
        return (await this.warningMessage.innerText()).trim();
    }

    /** Checks whether the browser rejected a blank required login field. */
    async isLoginFormInvalid(): Promise<boolean> {
        return (await this.page.locator('#input-email:invalid, #input-password:invalid').count()) > 0;
    }
}