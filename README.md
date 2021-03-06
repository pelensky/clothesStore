## Clothes store
### HTML, CSS, JavaScript

I was set the task of building a responsive website for a clothing retailer. I looked into building this using a framework, but decided that I would prefer to see if I could build this as a single page app using JavaScript and jQuery.

I really enjoyed building this - I have never done a single page app in JavaScript that has so many moving parts.

This app was mainly built using vanilla Javascript. I also used [jQuery](https://jquery.com/), [Bootstrap](http://getbootstrap.com/), and [SweetAlert](http://t4t5.github.io/sweetalert/).

## Instructions:
* Clone this repository
* See that all tests pass by opening `SpecRunner.html`
* Open `index.html`
* Add items to your cart (you can only add as many as are in stock)
* Add a voucher
* You will see the total for your purchase

## Blog:
* I wrote a [blog post](https://medium.com/@pelensky/clothes-store-single-page-web-app-65210405fb20#.hx93i7639) about my experience building this.

## Video Demo:
* [Mobile](https://vimeo.com/205090178)
* [Desktop](https://vimeo.com/205090148)

## Further plans:
* Change the images to something with a transparent background so that I don't need to have a white background.
* Make the vouchers look more exciting
* Style and animate the shopping cart
* Automated feature testing
* Further refactoring of code.

#### The Brief

You’ve been asked to develop a responsive website for a clothing retailer.
The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

The products available are:

| Product Name | Category | Price | Quantity in Stock |
|----------|----------|----------|----------|
| Almond Toe Court Shoes, Patent Black | Women’s Footwear | £99.00 | 5 |
| Suede Shoes, Blue | Women’s Footwear | £42.00 |4 |
| Leather Driver Saddle Loafers, Tan | Men’s Footwear | £34.00 | 12 |
| Flip Flops, Red | Men’s Footwear | £19.00 | 6 |
| Flip Flops, Blue | Men’s Footwear | £19.00 | 0 |
| Gold Button Cardigan, Black | Women’s Casualwear | £167.00 | 6 |
| Cotton Shorts, Medium Red | Women’s Casualwear | £30.00 | 5 |
| Fine Stripe Short Sleeve Shirt, Grey | Men’s Casualwear | £49.99 | 9 |
| Fine Stripe Short Sleeve Shirt, Green | Men’s Casualwear | <s> £49.99 </s> £39.99 | 3 |
| Sharkskin Waistcoat, Charcoal | Men’s Formalwear | £75.00 | 2 |
| Lightweight Patch Pocket  Blazer, | Men’s Formalwear | £175.50 | 1 |
|  Bird Print Dress, Black | Women’s Formalwear | £270.00 | 10 |
|  Mid Twist Cut-Out Dress, Pink | Women’s Formalwear |  £540.00 | 5|

There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:

* £5.00 off your order
* £10.00 off when you spend over £50.00
* £15.00 off when you have bought at least one footwear item and spent over £75.00

The prioritised list of user stories is as follows:
1. As a User I can view the products and their category, price and availability information.

2. As a User I can add a product to my shopping cart.

3. As a User I can remove a product from my shopping cart.

4. As a User I can view the total price for the products in my shopping cart.

5. As a User I can apply a voucher to my shopping cart.

6. As a User I can view the total price for the products in my shopping cart with discounts applied.

7. As a User I am alerted when I apply an invalid voucher to my shopping cart.

8. As a User I am unable to add Out of Stock products to the shopping cart.
