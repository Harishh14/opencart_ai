# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\end-to-end-shopping-flow.spec.ts >> End-to-end shopping flow @master @sanity @regression @e2e @web
- Location: tests\web\end-to-end-shopping-flow.spec.ts:6:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=f52e1]:
  - navigation [ref=f52e2]:
    - generic [ref=f52e3]:
      - button "$ Currency " [ref=f52e7] [cursor=pointer]:
        - strong [ref=f52e8]: $
        - text: Currency
        - generic [ref=f52e9]: 
      - list [ref=f52e11]:
        - listitem [ref=f52e12]:
          - link "" [ref=f52e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f52e15]:
          - link " My Account" [ref=f52e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f52e17]: 
            - text: My Account
        - listitem [ref=f52e19]:
          - link " Wish List (0)" [ref=f52e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f52e21]: 
            - text: Wish List (0)
        - listitem [ref=f52e22]:
          - link " Shopping Cart" [ref=f52e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f52e24]: 
            - text: Shopping Cart
        - listitem [ref=f52e25]:
          - link " Checkout" [ref=f52e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f52e27]: 
            - text: Checkout
  - banner [ref=f52e28]:
    - generic [ref=f52e30]:
      - link [ref=f52e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f52e34]
      - generic [ref=f52e36]:
        - textbox "Search" [ref=f52e37]: MacBook
        - button "" [ref=f52e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f52e43] [cursor=pointer]:
        - generic [ref=f52e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f52e46]:
    - generic: 
    - list [ref=f52e48]:
      - listitem [ref=f52e49]:
        - link "Desktops" [ref=f52e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f52e51]:
        - link "Laptops & Notebooks" [ref=f52e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f52e53]:
        - link "Components" [ref=f52e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f52e55]:
        - link "Tablets" [ref=f52e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f52e57]:
        - link "Software" [ref=f52e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f52e59]:
        - link "Phones & PDAs" [ref=f52e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f52e61]:
        - link "Cameras" [ref=f52e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f52e63]:
        - link "MP3 Players" [ref=f52e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f52e65]:
    - list [ref=f52e66]:
      - listitem [ref=f52e67]:
        - link "" [ref=f52e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f52e70]:
        - link "Search" [ref=f52e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/search&search=MacBook
      - listitem [ref=f52e72]:
        - link "MacBook" [ref=f52e73] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/product&search=MacBook&product_id=43
    - generic [ref=f52e76]:
      - generic [ref=f52e77]:
        - list [ref=f52e78]:
          - listitem [ref=f52e79]:
            - link [ref=f52e80] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_1-500x500.jpg
              - img "MacBook" [ref=f52e81]
          - listitem [ref=f52e82]:
            - link [ref=f52e83] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_3-500x500.jpg
              - img "MacBook" [ref=f52e84]
          - listitem [ref=f52e85]:
            - link [ref=f52e86] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_2-500x500.jpg
              - img "MacBook" [ref=f52e87]
          - listitem [ref=f52e88]:
            - link [ref=f52e89] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_4-500x500.jpg
              - img "MacBook" [ref=f52e90]
          - listitem [ref=f52e91]:
            - link [ref=f52e92] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/image/cache/catalog/demo/macbook_5-500x500.jpg
              - img "MacBook" [ref=f52e93]
        - list [ref=f52e94]:
          - listitem [ref=f52e95]:
            - link "Description" [ref=f52e96]:
              - /url: "#tab-description"
          - listitem [ref=f52e97]:
            - link "Specification" [ref=f52e98] [cursor=pointer]:
              - /url: "#tab-specification"
          - listitem [ref=f52e99]:
            - link "Reviews (0)" [ref=f52e100] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=f52e101]:
          - generic [ref=f52e103]:
            - paragraph [ref=f52e104]: Intel Core 2 Duo processor
            - paragraph [ref=f52e105]: Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
            - paragraph [ref=f52e106]: 1GB memory, larger hard drives
            - paragraph [ref=f52e107]: The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
            - paragraph [ref=f52e108]: Sleek, 1.08-inch-thin design
            - paragraph [ref=f52e109]: MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
            - paragraph [ref=f52e110]: Built-in iSight camera
            - paragraph [ref=f52e111]: Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
          - text: "* * *"
      - generic [ref=f52e112]:
        - generic [ref=f52e113]:
          - button "" [ref=f52e114] [cursor=pointer]
          - button "" [ref=f52e116] [cursor=pointer]
        - heading "MacBook" [level=1] [ref=f52e118]
        - list [ref=f52e119]:
          - listitem [ref=f52e120]:
            - text: "Brand:"
            - link "Apple" [ref=f52e121] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=f52e122]: "Product Code: Product 16"
          - listitem [ref=f52e123]: "Reward Points: 600"
          - listitem [ref=f52e124]: "Availability: Out Of Stock"
        - list [ref=f52e125]:
          - listitem [ref=f52e126]:
            - heading "$602.00" [level=2] [ref=f52e127]
          - listitem [ref=f52e128]: "Ex Tax: $500.00"
        - generic [ref=f52e130]:
          - generic [ref=f52e131]: Qty
          - textbox "Qty" [ref=f52e132]: "1"
          - button "Add to Cart" [ref=f52e133] [cursor=pointer]
        - paragraph [ref=f52e135]:
          - generic [ref=f52e136]: 
          - generic [ref=f52e138]: 
          - generic [ref=f52e140]: 
          - generic [ref=f52e142]: 
          - generic [ref=f52e144]: 
          - link "0 reviews" [ref=f52e146] [cursor=pointer]:
            - /url: ""
          - text: /
          - link "Write a review" [ref=f52e147] [cursor=pointer]:
            - /url: ""
  - contentinfo [ref=f52e148]:
    - generic [ref=f52e149]:
      - generic [ref=f52e150]:
        - generic [ref=f52e151]:
          - heading "Information" [level=5] [ref=f52e152]
          - list [ref=f52e153]:
            - listitem [ref=f52e154]:
              - link "About Us" [ref=f52e155] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f52e156]:
              - link "Delivery Information" [ref=f52e157] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f52e158]:
              - link "Privacy Policy" [ref=f52e159] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f52e160]:
              - link "Terms & Conditions" [ref=f52e161] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f52e162]:
          - heading "Customer Service" [level=5] [ref=f52e163]
          - list [ref=f52e164]:
            - listitem [ref=f52e165]:
              - link "Contact Us" [ref=f52e166] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f52e167]:
              - link "Returns" [ref=f52e168] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f52e169]:
              - link "Site Map" [ref=f52e170] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f52e171]:
          - heading "Extras" [level=5] [ref=f52e172]
          - list [ref=f52e173]:
            - listitem [ref=f52e174]:
              - link "Brands" [ref=f52e175] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f52e176]:
              - link "Gift Certificates" [ref=f52e177] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f52e178]:
              - link "Affiliate" [ref=f52e179] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f52e180]:
              - link "Specials" [ref=f52e181] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f52e182]:
          - heading "My Account" [level=5] [ref=f52e183]
          - list [ref=f52e184]:
            - listitem [ref=f52e185]:
              - link "My Account" [ref=f52e186] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f52e187]:
              - link "Order History" [ref=f52e188] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f52e189]:
              - link "Wish List" [ref=f52e190] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f52e191]:
              - link "Newsletter" [ref=f52e192] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f52e193]
      - paragraph [ref=f52e194]:
        - text: Powered By
        - link "OpenCart" [ref=f52e195] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pageFixtures';
  2  | import { CustomerData } from '../../pages/RegisterPage';
  3  | import { RandomDataUtil } from '../../utils/dataGenerator';
  4  | import { Helper } from '../../utils/helper';
  5  | 
  6  | test('End-to-end shopping flow @master @sanity @regression @e2e @web', async ({
  7  |     homePage,
  8  |     registerPage,
  9  |     loginPage,
  10 |     accountPage,
  11 |     productPage,
  12 |     cartPage,
  13 | }) => {
  14 |     const product = Helper.getProductDetails();
  15 |     const customer: CustomerData = {
  16 |         firstName: RandomDataUtil.getFirstName(),
  17 |         lastName: RandomDataUtil.getLastName(),
  18 |         email: `opencart-${Date.now()}-${RandomDataUtil.getEmail()}`,
  19 |         telephone: RandomDataUtil.getPhoneNumber(),
  20 |         password: RandomDataUtil.getPassword(12),
  21 |     };
  22 | 
  23 |     await test.step('1) Register a unique customer', async () => {
  24 |         await homePage.openRegistration();
  25 |         await registerPage.register(customer);
  26 |         expect(await registerPage.isRegistrationSuccessful()).toBeTruthy();
  27 |     });
  28 | 
  29 |     await test.step('2) Log out and authenticate again', async () => {
  30 |         await homePage.logout();
  31 |         await homePage.openLogin();
  32 |         await loginPage.login(customer.email, customer.password);
  33 |         expect(await accountPage.isAccountPageDisplayed()).toBeTruthy();
  34 |     });
  35 | 
  36 |     await test.step('3) Search for the known product and open details', async () => {
  37 |         await homePage.searchFor(product.productName);
  38 |         expect(await productPage.isSearchResultDisplayed()).toBeTruthy();
  39 |         await productPage.openProductDetails();
> 40 |         expect(await productPage.isProductDisplayed()).toBeTruthy();
     |                                                        ^ Error: expect(received).toBeTruthy()
  41 |     });
  42 | 
  43 |     let productPrice = '';
  44 |     await test.step('4) Add the product to the cart', async () => {
  45 |         productPrice = await productPage.getPrice();
  46 |         await productPage.addToCart(Number(product.productQuantity));
  47 |         await homePage.openCart();
  48 |     });
  49 | 
  50 |     await test.step('5) Validate cart product, quantity, price, and total', async () => {
  51 |         expect(await cartPage.getProductName()).toContain(product.productName);
  52 |         expect(await cartPage.getQuantity()).toBe(product.productQuantity);
  53 |         expect(await cartPage.getProductPrice()).toContain(productPrice.replace(' ', ''));
  54 |         expect(await cartPage.getCartTotal()).toContain(productPrice.replace(' ', ''));
  55 |     });
  56 | 
  57 |     console.log('Completed end-to-end shopping flow successfully.');
  58 | });
```