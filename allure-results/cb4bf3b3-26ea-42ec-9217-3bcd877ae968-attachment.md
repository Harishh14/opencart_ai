# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end-to-end-shopping-flow.spec.ts >> End-to-end shopping flow @master @sanity @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.table-responsive tfoot tr:last-child td:last-child')

```

# Page snapshot

```yaml
- generic [active] [ref=f8e1]:
  - navigation [ref=f8e2]:
    - generic [ref=f8e3]:
      - button "$ Currency " [ref=f8e7] [cursor=pointer]:
        - strong [ref=f8e8]: $
        - text: Currency
        - generic [ref=f8e9]: 
      - list [ref=f8e11]:
        - listitem [ref=f8e12]:
          - link "" [ref=f8e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f8e15]:
          - link " My Account" [ref=f8e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=f8e17]: 
            - text: My Account
        - listitem [ref=f8e19]:
          - link " Wish List (0)" [ref=f8e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=f8e21]: 
            - text: Wish List (0)
        - listitem [ref=f8e22]:
          - link " Shopping Cart" [ref=f8e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=f8e24]: 
            - text: Shopping Cart
        - listitem [ref=f8e25]:
          - link " Checkout" [ref=f8e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=f8e27]: 
            - text: Checkout
  - banner [ref=f8e28]:
    - generic [ref=f8e30]:
      - link [ref=f8e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=f8e34]
      - generic [ref=f8e36]:
        - textbox "Search" [ref=f8e37]
        - button "" [ref=f8e39] [cursor=pointer]
      - generic [ref=f8e42]:
        - button " 1 item(s) - $602.00" [ref=f8e43] [cursor=pointer]:
          - generic [ref=f8e44]: 
          - text: 1 item(s) - $602.00
        - text:   
  - navigation [ref=f8e46]:
    - generic: 
    - list [ref=f8e48]:
      - listitem [ref=f8e49]:
        - link "Desktops" [ref=f8e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=f8e51]:
        - link "Laptops & Notebooks" [ref=f8e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=f8e53]:
        - link "Components" [ref=f8e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=f8e55]:
        - link "Tablets" [ref=f8e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=f8e57]:
        - link "Software" [ref=f8e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=f8e59]:
        - link "Phones & PDAs" [ref=f8e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=f8e61]:
        - link "Cameras" [ref=f8e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=f8e63]:
        - link "MP3 Players" [ref=f8e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=f8e65]:
    - list [ref=f8e66]:
      - listitem [ref=f8e67]:
        - link "" [ref=f8e68] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
      - listitem [ref=f8e70]:
        - link "Shopping Cart" [ref=f8e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
    - generic [ref=f8e73]:
      - heading "Shopping Cart (0.00kg)" [level=1] [ref=f8e74]
      - table [ref=f8e77]:
        - rowgroup [ref=f8e78]:
          - row [ref=f8e79]:
            - cell "Image" [ref=f8e80]
            - cell "Product Name" [ref=f8e81]
            - cell "Model" [ref=f8e82]
            - cell "Quantity" [ref=f8e83]
            - cell "Unit Price" [ref=f8e84]
            - cell "Total" [ref=f8e85]
        - rowgroup [ref=f8e86]:
          - row [ref=f8e87]:
            - cell [ref=f8e88]:
              - link [ref=f8e89] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
                - img "MacBook" [ref=f8e90]
            - cell [ref=f8e91]:
              - link "MacBook" [ref=f8e92] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
              - text: "Reward Points: 600"
            - cell "Product 16" [ref=f8e93]
            - cell [ref=f8e94]:
              - generic [ref=f8e95]:
                - textbox [ref=f8e96]: "1"
                - generic [ref=f8e97]:
                  - button "" [ref=f8e98] [cursor=pointer]
                  - button "" [ref=f8e100] [cursor=pointer]
            - cell "$602.00" [ref=f8e102]
            - cell "$602.00" [ref=f8e103]
      - heading "What would you like to do next?" [level=2] [ref=f8e104]
      - paragraph [ref=f8e105]: Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.
      - generic [ref=f8e106]:
        - heading [level=4] [ref=f8e109]:
          - link "Use Coupon Code " [ref=f8e110] [cursor=pointer]:
            - /url: "#collapse-coupon"
            - text: Use Coupon Code
            - generic [ref=f8e111]: 
        - heading [level=4] [ref=f8e114]:
          - link "Use Gift Certificate " [ref=f8e115] [cursor=pointer]:
            - /url: "#collapse-voucher"
            - text: Use Gift Certificate
            - generic [ref=f8e116]: 
      - table [ref=f8e119]:
        - rowgroup [ref=f8e120]:
          - row [ref=f8e121]:
            - cell [ref=f8e122]:
              - strong [ref=f8e123]: "Sub-Total:"
            - cell "$500.00" [ref=f8e124]
          - row [ref=f8e125]:
            - cell [ref=f8e126]:
              - strong [ref=f8e127]: "Eco Tax (-2.00):"
            - cell "$2.00" [ref=f8e128]
          - row [ref=f8e129]:
            - cell [ref=f8e130]:
              - strong [ref=f8e131]: "VAT (20%):"
            - cell "$100.00" [ref=f8e132]
          - row [ref=f8e133]:
            - cell [ref=f8e134]:
              - strong [ref=f8e135]: "Total:"
            - cell "$602.00" [ref=f8e136]
      - generic [ref=f8e137]:
        - link "Continue Shopping" [ref=f8e139] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
        - link "Checkout" [ref=f8e141] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
  - contentinfo [ref=f8e142]:
    - generic [ref=f8e143]:
      - generic [ref=f8e144]:
        - generic [ref=f8e145]:
          - heading "Information" [level=5] [ref=f8e146]
          - list [ref=f8e147]:
            - listitem [ref=f8e148]:
              - link "About Us" [ref=f8e149] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=f8e150]:
              - link "Delivery Information" [ref=f8e151] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=f8e152]:
              - link "Privacy Policy" [ref=f8e153] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=f8e154]:
              - link "Terms & Conditions" [ref=f8e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=f8e156]:
          - heading "Customer Service" [level=5] [ref=f8e157]
          - list [ref=f8e158]:
            - listitem [ref=f8e159]:
              - link "Contact Us" [ref=f8e160] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=f8e161]:
              - link "Returns" [ref=f8e162] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=f8e163]:
              - link "Site Map" [ref=f8e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=f8e165]:
          - heading "Extras" [level=5] [ref=f8e166]
          - list [ref=f8e167]:
            - listitem [ref=f8e168]:
              - link "Brands" [ref=f8e169] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=f8e170]:
              - link "Gift Certificates" [ref=f8e171] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=f8e172]:
              - link "Affiliate" [ref=f8e173] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=f8e174]:
              - link "Specials" [ref=f8e175] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=f8e176]:
          - heading "My Account" [level=5] [ref=f8e177]
          - list [ref=f8e178]:
            - listitem [ref=f8e179]:
              - link "My Account" [ref=f8e180] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=f8e181]:
              - link "Order History" [ref=f8e182] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=f8e183]:
              - link "Wish List" [ref=f8e184] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=f8e185]:
              - link "Newsletter" [ref=f8e186] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=f8e187]
      - paragraph [ref=f8e188]:
        - text: Powered By
        - link "OpenCart" [ref=f8e189] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |     private readonly page: Page;
  5  | 
  6  |     // Locators
  7  |     private readonly productLink: Locator;
  8  |     private readonly quantityInput: Locator;
  9  |     private readonly productPrice: Locator;
  10 |     private readonly totalValue: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 | 
  15 |         // Initialize locators with CSS selectors
  16 |         this.productLink = page.locator('.table-responsive tbody tr td:nth-child(2) a');
  17 |         this.quantityInput = page.locator('.table-responsive tbody tr input[name^="quantity"]');
  18 |         this.productPrice = page.locator('.table-responsive tbody tr td:nth-child(5)');
  19 |         this.totalValue = page.locator('.table-responsive tfoot tr:last-child td:last-child');
  20 |     }
  21 | 
  22 |     /** Reads the cart product name. */
  23 |     async getProductName(): Promise<string> {
  24 |         return (await this.productLink.first().textContent())?.trim() ?? '';
  25 |     }
  26 | 
  27 |     /** Reads the cart quantity. */
  28 |     async getQuantity(): Promise<string> {
  29 |         return (await this.quantityInput.first().inputValue()).trim();
  30 |     }
  31 | 
  32 |     /** Reads the cart product price. */
  33 |     async getProductPrice(): Promise<string> {
  34 |         return (await this.productPrice.first().textContent())?.trim() ?? '';
  35 |     }
  36 | 
  37 |     /** Reads the applicable cart total. */
  38 |     async getCartTotal(): Promise<string> {
> 39 |         return (await this.totalValue.textContent())?.trim() ?? '';
     |                                       ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  40 |     }
  41 | }
```