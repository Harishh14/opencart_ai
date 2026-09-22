export class Helper {

    static convertPriceToNumber(price: string): number {
        const cleanedPrice = price.replace(/[^0-9.]/g, '');
        return Number(cleanedPrice);
    }

    static getProductDetails() {
        return {
            productName: process.env.PRODUCT_NAME || "MacBook",
            productQuantity: process.env.PRODUCT_QUANTITY || "1",
            totalPrice: process.env.TOTAL_PRICE || "$602.00"
        };
    }

    static getLoginDetails() {
        return {
            email: "pavanol@xyz.com",
            password: "test@123"
        };
    }
}
