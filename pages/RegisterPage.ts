import { Locator, Page } from '@playwright/test';

export interface CustomerData {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
}

export class RegisterPage {
    private readonly page: Page;

    // Locators
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly telephoneInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly privacyCheckbox: Locator;
    private readonly continueButton: Locator;
    private readonly confirmationHeading: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.firstNameInput = page.locator('#input-firstname');
        this.lastNameInput = page.locator('#input-lastname');
        this.emailInput = page.locator('#input-email');
        this.telephoneInput = page.locator('#input-telephone');
        this.passwordInput = page.locator('#input-password');
        this.confirmPasswordInput = page.locator('#input-confirm');
        this.privacyCheckbox = page.locator('input[name="agree"]');
        this.continueButton = page.locator('input[value="Continue"], button:has-text("Continue")');
        this.confirmationHeading = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
    }

    /** Completes and submits the customer registration form. */
    async register(customer: CustomerData): Promise<void> {
        await this.firstNameInput.fill(customer.firstName);
        await this.lastNameInput.fill(customer.lastName);
        await this.emailInput.fill(customer.email);
        await this.telephoneInput.fill(customer.telephone);
        await this.passwordInput.fill(customer.password);
        await this.confirmPasswordInput.fill(customer.password);
        await this.privacyCheckbox.check();
        await this.continueButton.click();
    }

    /** Checks whether registration completed successfully. */
    async isRegistrationSuccessful(): Promise<boolean> {
        return this.confirmationHeading.isVisible();
    }
}