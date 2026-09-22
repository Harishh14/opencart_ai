import { Locator, Page } from '@playwright/test';

export class ProductPage {
    private readonly page: Page;

    // Locators
    private readonly searchResult: Locator;
    private readonly productHeading: Locator;
    private readonly price: Locator;
    private readonly quantityInput: Locator;
    private readonly addToCartButton: Locator;
    private readonly cartSummary: Locator;

    constructor(page: Page) {
        this.page = page;
        const productName = process.env.PRODUCT_NAME || 'MacBook';

        // Initialize locators with CSS selectors
        this.searchResult = page.getByRole('heading', { name: productName, exact: true });
        this.productHeading = page.getByRole('heading', { name: productName, exact: true, level: 1 });
        this.price = page.getByRole('heading', { level: 2 }).filter({ hasText: /\$/ });
        this.quantityInput = page.locator('#input-quantity');
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
        this.cartSummary = page.locator('#cart-total');
    }

    /** Checks whether the product details page is displayed. */
    async isProductDisplayed(): Promise<boolean> {
        return this.productHeading.isVisible();
    }

    /** Checks whether the requested product appears in search results. */
    async isSearchResultDisplayed(): Promise<boolean> {
        return this.searchResult.isVisible();
    }

    /** Opens the product details page from the search results. */
    async openProductDetails(): Promise<void> {
        const productName = process.env.PRODUCT_NAME || 'MacBook';
        await this.searchResult.getByRole('link', { name: productName, exact: true }).click();
    }

    /** Reads the displayed product price. */
    async getPrice(): Promise<string> {
        return (await this.price.first().textContent())?.trim() ?? '';
    }

    /** Adds the requested quantity to the cart. */
    async addToCart(quantity: number): Promise<void> {
        await this.quantityInput.fill(String(quantity));
        await this.addToCartButton.click();
        await this.cartSummary.filter({ hasText: /1 item/ }).waitFor();
    }
}