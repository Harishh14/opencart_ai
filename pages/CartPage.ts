import { Locator, Page } from '@playwright/test';

export class CartPage {
    private readonly page: Page;

    // Locators
    private readonly productLink: Locator;
    private readonly quantityInput: Locator;
    private readonly productPrice: Locator;
    private readonly totalValue: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.productLink = page.locator('.table-responsive tbody tr td:nth-child(2) a');
        this.quantityInput = page.locator('.table-responsive tbody tr input[name^="quantity"]');
        this.productPrice = page.locator('.table-responsive tbody tr td:nth-child(5)');
        this.totalValue = page.getByRole('table').last().getByRole('row').filter({ hasText: 'Total:' }).getByRole('cell').last();
    }

    /** Reads the cart product name. */
    async getProductName(): Promise<string> {
        return (await this.productLink.first().textContent())?.trim() ?? '';
    }

    /** Reads the cart quantity. */
    async getQuantity(): Promise<string> {
        return (await this.quantityInput.first().inputValue()).trim();
    }

    /** Reads the cart product price. */
    async getProductPrice(): Promise<string> {
        return (await this.productPrice.first().textContent())?.trim() ?? '';
    }

    /** Reads the applicable cart total. */
    async getCartTotal(): Promise<string> {
        return (await this.totalValue.textContent())?.trim() ?? '';
    }
}