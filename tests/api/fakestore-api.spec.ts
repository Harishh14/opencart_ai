import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import path from 'node:path';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
};

type User = {
    id: number;
    username: string;
    email: string;
};

type Cart = {
    id: number;
    userId: number;
    products: Array<{ productId: number; quantity: number }>;
};

const BASE_URL = Routes.BASE_URL;
const validProductId = 1;
const validUserId = 1;
const validCartId = 1;

function route(template: string, values: Record<string, string | number>): string {
    return Object.entries(values).reduce(
        (currentRoute, [key, value]) => currentRoute.replace(`{${key}}`, String(value)),
        template,
    );
}

function expectProduct(product: Product): void {
    expect(product.id, 'Product id should be a number').toEqual(expect.any(Number));
    expect(product.title, 'Product title should be a string').toEqual(expect.any(String));
    expect(product.price, 'Product price should be a number').toEqual(expect.any(Number));
    expect(product.category, 'Product category should be a string').toEqual(expect.any(String));
    expect(product.image, 'Product image should be a string').toEqual(expect.any(String));
}

function expectUser(user: User): void {
    expect(user.id, 'User id should be a number').toEqual(expect.any(Number));
    expect(user.username, 'Username should be a string').toEqual(expect.any(String));
    expect(user.email, 'Email should be a string').toEqual(expect.any(String));
}

function expectCart(cart: Cart): void {
    expect(cart.id, 'Cart id should be a number').toEqual(expect.any(Number));
    expect(cart.userId, 'Cart userId should be a number').toEqual(expect.any(Number));
    expect(cart.products, 'Cart products should be an array').toEqual(expect.any(Array));
    for (const product of cart.products) {
        expect(product.productId).toEqual(expect.any(Number));
        expect(product.quantity).toEqual(expect.any(Number));
    }
}

test.describe('FakeStore API @master @api', () => {
    test('Successful login @sanity', async ({ request }) => {
        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: { username: 'mor_2314', password: '83r5^_' },
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.token, 'Successful login should return a token').toEqual(expect.any(String));
        expect(body.token.length).toBeGreaterThan(0);
    });

    test('Invalid login @sanity', async ({ request }) => {
        const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
            data: { username: 'invalid-user', password: 'invalid-password' },
        });

        expect(response.status()).toBe(401);
        expect((await response.text()).trim()).toBe('username or password is incorrect');
    });

    test('Get all products @sanity', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_PRODUCTS}`);
        expect(response.status()).toBe(200);
        const products = await response.json() as Product[];
        expect(products.length).toBeGreaterThan(0);
        products.forEach(expectProduct);
    });

    test('Get product by id and validate schema @regression', async ({ request }) => {
        const response = await request.get(`${BASE_URL}${route(Routes.GET_PRODUCT_BY_ID, { id: validProductId })}`);
        expect(response.status()).toBe(200);
        const product = await response.json() as Product;
        expect(product.id).toBe(validProductId);
        expectProduct(product);

        const schema = DataProvider.readJson(path.resolve('api/schemas/productSchema.json'));
        const ajv = new Ajv({ allErrors: true });
        addFormats(ajv);
        const isValid = ajv.validate(schema, product);
        expect(isValid, `Product schema errors: ${JSON.stringify(ajv.errors)}`).toBeTruthy();
    });

    test('Get products with limit and sort ascending @regression', async ({ request }) => {
        const limitedResponse = await request.get(`${BASE_URL}${route(Routes.GET_PRODUCTS_WITH_LIMIT, { limit: 3 })}`);
        expect(limitedResponse.status()).toBe(200);
        const limitedProducts = await limitedResponse.json() as Product[];
        expect(limitedProducts).toHaveLength(3);

        const sortedResponse = await request.get(`${BASE_URL}${route(Routes.GET_PRODUCTS_SORTED, { order: 'asc' })}`);
        expect(sortedResponse.status()).toBe(200);
        const ids = (await sortedResponse.json() as Product[]).map(product => product.id);
        expect(ids).toEqual([...ids].sort((left, right) => left - right));
    });

    test('Get product categories and products by category @regression', async ({ request }) => {
        const categoriesResponse = await request.get(`${BASE_URL}${Routes.GET_ALL_CATEGORIES}`);
        expect(categoriesResponse.status()).toBe(200);
        const categories = await categoriesResponse.json() as string[];
        expect(categories.length).toBeGreaterThan(0);

        const category = categories[0];
        const productsResponse = await request.get(
            `${BASE_URL}${route(Routes.GET_PRODUCTS_BY_CATEGORY, { category })}`,
        );
        expect(productsResponse.status()).toBe(200);
        const products = await productsResponse.json() as Product[];
        expect(products.length).toBeGreaterThan(0);
        products.forEach(product => expect(product.category).toBe(category));
    });

    test('Get all users and user by id @sanity', async ({ request }) => {
        const allResponse = await request.get(`${BASE_URL}${Routes.GET_ALL_USERS}`);
        expect(allResponse.status()).toBe(200);
        const users = await allResponse.json() as User[];
        expect(users.length).toBeGreaterThan(0);
        users.forEach(expectUser);

        const oneResponse = await request.get(`${BASE_URL}${route(Routes.GET_USER_BY_ID, { id: validUserId })}`);
        expect(oneResponse.status()).toBe(200);
        const user = await oneResponse.json() as User;
        expect(user.id).toBe(validUserId);
        expectUser(user);
    });

    test('Get all carts and cart by id @sanity', async ({ request }) => {
        const allResponse = await request.get(`${BASE_URL}${Routes.GET_ALL_CARTS}`);
        expect(allResponse.status()).toBe(200);
        const carts = await allResponse.json() as Cart[];
        expect(carts.length).toBeGreaterThan(0);
        carts.forEach(expectCart);

        const oneResponse = await request.get(`${BASE_URL}${route(Routes.GET_CART_BY_ID, { id: validCartId })}`);
        expect(oneResponse.status()).toBe(200);
        const cart = await oneResponse.json() as Cart;
        expect(cart.id).toBe(validCartId);
        expectCart(cart);
    });

    test('Product create update delete workflow @regression', async ({ request }) => {
        const product = { title: 'Playwright API product', price: 19.99, description: 'API test product', category: 'electronics', image: 'https://example.com/product.png' };
        const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`, { data: product });
        expect(createResponse.status()).toBe(201);
        const created = await createResponse.json() as Product;
        expect(created.id).toEqual(expect.any(Number));

        const updateResponse = await request.put(`${BASE_URL}${route(Routes.UPDATE_PRODUCT, { id: created.id })}`, {
            data: { ...product, title: 'Updated Playwright API product' },
        });
        expect(updateResponse.status()).toBe(200);
        const updated = await updateResponse.json() as Product;
        expect(updated.title).toBe('Updated Playwright API product');
        expect(updated.id).toBe(created.id);

        const deleteResponse = await request.delete(`${BASE_URL}${route(Routes.DELETE_PRODUCT, { id: created.id })}`);
        expect(deleteResponse.status()).toBe(200);
    });

    test('User create update delete workflow @regression', async ({ request }) => {
        const user = { username: 'playwright_user', email: 'playwright@example.com', password: 'password123' };
        const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, { data: user });
        expect(createResponse.status()).toBe(201);
        const created = await createResponse.json() as User;
        expect(created.id).toEqual(expect.any(Number));

        const updateResponse = await request.put(`${BASE_URL}${route(Routes.UPDATE_USER, { id: created.id })}`, {
            data: { ...user, username: 'updated_playwright_user' },
        });
        expect(updateResponse.status()).toBe(200);
        const updated = await updateResponse.json() as User;
        expect(updated.username).toBe('updated_playwright_user');

        const deleteResponse = await request.delete(`${BASE_URL}${route(Routes.DELETE_USER, { id: created.id })}`);
        expect(deleteResponse.status()).toBe(200);
    });

    test('Cart create update delete workflow @regression', async ({ request }) => {
        const cart = { userId: validUserId, products: [{ productId: validProductId, quantity: 1 }] };
        const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_CART}`, { data: cart });
        expect(createResponse.status()).toBe(201);
        const created = await createResponse.json() as Cart;
        expect(created.id).toEqual(expect.any(Number));

        const updateResponse = await request.put(`${BASE_URL}${route(Routes.UPDATE_CART, { id: created.id })}`, {
            data: { ...cart, products: [{ productId: validProductId, quantity: 2 }] },
        });
        expect(updateResponse.status()).toBe(200);
        const updated = await updateResponse.json() as Cart;
        expect(updated.products[0].quantity).toBe(2);
        expect(updated.id).toBe(created.id);

        const deleteResponse = await request.delete(`${BASE_URL}${route(Routes.DELETE_CART, { id: created.id })}`);
        expect(deleteResponse.status()).toBe(200);
    });
});