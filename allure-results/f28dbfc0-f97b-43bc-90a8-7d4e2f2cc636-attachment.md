# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end-to-end-shopping-flow.spec.ts >> End-to-end shopping flow @master @sanity @regression @end-to-end @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:6:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Login', exact: true }) resolved to 2 elements:
    1) <a href="http://localhost/opencart/upload/index.php?route=account/login">Login</a> aka locator('#top-links').getByRole('link', { name: 'Login' })
    2) <a class="list-group-item" href="http://localhost/opencart/upload/index.php?route=account/login">Login</a> aka locator('#column-right').getByRole('link', { name: 'Login' })

Call log:
  - waiting for getByRole('link', { name: 'Login', exact: true })

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [expanded] [active] [ref=f3e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Register" [ref=f3e21] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/register
            - listitem [ref=f3e22]:
              - link "Login" [ref=f3e23] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/login
        - listitem [ref=f3e24]:
          - link " Wish List (0)" [ref=f3e25] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=f3e26]: 
            - text: Wish List (0)
        - listitem [ref=f3e27]:
          - link " Shopping Cart" [ref=f3e28] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=f3e29]: 
            - text: Shopping Cart
        - listitem [ref=f3e30]:
          - link " Checkout" [ref=f3e31] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=f3e32]: 
            - text: Checkout
  - banner [ref=f3e33]:
    - generic [ref=f3e35]:
      - link [ref=f3e38] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=f3e39]
      - generic [ref=f3e41]:
        - textbox "Search" [ref=f3e42]
        - button "" [ref=f3e44] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f3e48] [cursor=pointer]:
        - generic [ref=f3e49]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f3e51]:
    - generic: 
    - list [ref=f3e53]:
      - listitem [ref=f3e54]:
        - link "Desktops" [ref=f3e55] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=f3e56]:
        - link "Laptops & Notebooks" [ref=f3e57] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=f3e58]:
        - link "Components" [ref=f3e59] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=f3e60]:
        - link "Tablets" [ref=f3e61] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=f3e62]:
        - link "Software" [ref=f3e63] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=f3e64]:
        - link "Phones & PDAs" [ref=f3e65] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=f3e66]:
        - link "Cameras" [ref=f3e67] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=f3e68]:
        - link "MP3 Players" [ref=f3e69] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=f3e70]:
    - list [ref=f3e71]:
      - listitem [ref=f3e72]:
        - link "" [ref=f3e73] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
      - listitem [ref=f3e75]:
        - link "Account" [ref=f3e76] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/account
      - listitem [ref=f3e77]:
        - link "Logout" [ref=f3e78] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/logout
    - generic [ref=f3e79]:
      - generic [ref=f3e80]:
        - heading "Account Logout" [level=1] [ref=f3e81]
        - paragraph [ref=f3e82]: You have been logged off your account. It is now safe to leave the computer.
        - paragraph [ref=f3e83]: Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
        - link "Continue" [ref=f3e85] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
      - complementary [ref=f3e86]:
        - generic [ref=f3e87]:
          - link "Login" [ref=f3e88] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/login
          - link "Register" [ref=f3e89] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/register
          - link "Forgotten Password" [ref=f3e90] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/forgotten
          - link "My Account" [ref=f3e91] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
          - link "Address Book" [ref=f3e92] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=f3e93] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=f3e94] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=f3e95] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=f3e96] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=f3e97] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=f3e98] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=f3e99] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=f3e100] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
  - contentinfo [ref=f3e101]:
    - generic [ref=f3e102]:
      - generic [ref=f3e103]:
        - generic [ref=f3e104]:
          - heading "Information" [level=5] [ref=f3e105]
          - list [ref=f3e106]:
            - listitem [ref=f3e107]:
              - link "About Us" [ref=f3e108] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=f3e109]:
              - link "Delivery Information" [ref=f3e110] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=f3e111]:
              - link "Privacy Policy" [ref=f3e112] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=f3e113]:
              - link "Terms & Conditions" [ref=f3e114] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=f3e115]:
          - heading "Customer Service" [level=5] [ref=f3e116]
          - list [ref=f3e117]:
            - listitem [ref=f3e118]:
              - link "Contact Us" [ref=f3e119] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=f3e120]:
              - link "Returns" [ref=f3e121] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=f3e122]:
              - link "Site Map" [ref=f3e123] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=f3e124]:
          - heading "Extras" [level=5] [ref=f3e125]
          - list [ref=f3e126]:
            - listitem [ref=f3e127]:
              - link "Brands" [ref=f3e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=f3e129]:
              - link "Gift Certificates" [ref=f3e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=f3e131]:
              - link "Affiliate" [ref=f3e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=f3e133]:
              - link "Specials" [ref=f3e134] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=f3e135]:
          - heading "My Account" [level=5] [ref=f3e136]
          - list [ref=f3e137]:
            - listitem [ref=f3e138]:
              - link "My Account" [ref=f3e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=f3e140]:
              - link "Order History" [ref=f3e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=f3e142]:
              - link "Wish List" [ref=f3e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=f3e144]:
              - link "Newsletter" [ref=f3e145] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=f3e146]
      - paragraph [ref=f3e147]:
        - text: Powered By
        - link "OpenCart" [ref=f3e148] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |     private readonly page: Page;
  5  | 
  6  |     // Locators
  7  |     private readonly myAccountMenu: Locator;
  8  |     private readonly registerLink: Locator;
  9  |     private readonly loginLink: Locator;
  10 |     private readonly logoutLink: Locator;
  11 |     private readonly searchInput: Locator;
  12 |     private readonly cartLink: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 | 
  17 |         // Initialize locators with CSS selectors
  18 |         this.myAccountMenu = page.locator('a[title="My Account"]');
  19 |         this.registerLink = page.getByRole('link', { name: 'Register', exact: true });
  20 |         this.loginLink = page.getByRole('link', { name: 'Login', exact: true });
  21 |         this.logoutLink = page.locator('#top-links a[href*="account/logout"]');
  22 |         this.searchInput = page.locator('input[name="search"]');
  23 |         this.cartLink = page.getByRole('link', { name: /Shopping Cart/ });
  24 |     }
  25 | 
  26 |     /** Opens the My Account menu. */
  27 |     async openMyAccountMenu(): Promise<void> {
  28 |         await this.myAccountMenu.click();
  29 |     }
  30 | 
  31 |     /** Navigates to customer registration. */
  32 |     async openRegistration(): Promise<void> {
  33 |         await this.openMyAccountMenu();
  34 |         await this.registerLink.click();
  35 |     }
  36 | 
  37 |     /** Navigates to customer login. */
  38 |     async openLogin(): Promise<void> {
  39 |         await this.openMyAccountMenu();
> 40 |         await this.loginLink.click();
     |                              ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Login', exact: true }) resolved to 2 elements:
  41 |     }
  42 | 
  43 |     /** Logs out the current customer. */
  44 |     async logout(): Promise<void> {
  45 |         await this.openMyAccountMenu();
  46 |         await this.logoutLink.click();
  47 |     }
  48 | 
  49 |     /** Searches for a product. */
  50 |     async searchFor(productName: string): Promise<void> {
  51 |         await this.searchInput.fill(productName);
  52 |         await this.searchInput.press('Enter');
  53 |     }
  54 | 
  55 |     /** Opens the shopping cart. */
  56 |     async openCart(): Promise<void> {
  57 |         await this.cartLink.click();
  58 |     }
  59 | }
```