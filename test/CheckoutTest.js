var expect = require('chai').expect;
var ShoppingCart = require('../src/ShoppingCart.js');
var Product = require('../src/Product.js');
var Checkout = require('../src/Checkout.js');
var Voucher = require('../src/Voucher.js');

describe("Checkout", function() {
  var checkout;
  var shoppingCart;
  var shoe;
  var dress;
  var voucher1;

  beforeEach(function() {
    shoe = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
    dress = new Product("Bird Print Dress, Black", "Women’s Formalwear", 270, 10);
    shoppingCart = new ShoppingCart();
    shoppingCart.addItem( shoe, 2 );
    shoppingCart.addItem( dress, 1 );
    checkout = new Checkout(shoppingCart);
    voucher1 = new Voucher(5);
  });


  describe("A shopping Cart must be passed in", function(){
    it("stores the shopping cart", function() {
      expect(checkout.shoppingCart).to.equal(shoppingCart);
    });
  });

  describe("Price", function(){
    it("shows the price before discount", function() {
      expect(checkout.showSubtotal()).to.equal(468);
    });
  });
  describe("Discount", function(){
    it ("shows the amount of the discount", function() {
      checkout.addVoucher(voucher1);
     expect(checkout.voucher.amount).to.equal(5); 
    });
  });
});
