var expect = require('chai').expect;
var ShoppingCart = require('../src/ShoppingCart.js');
var Product = require('../src/Product.js');
var Checkout = require('../src/Checkout.js');
var Voucher = require('../src/Voucher.js');

describe("Checkout", function() {

  beforeEach(function() {
    shoe = new Product("Almond Toe Court Shoes, Patent Black", "Women's Footwear", 99, 5 );
    dress = new Product("Bird Print Dress, Black", "Women’s Formalwear", 270, 10);
    shorts = new Product("Cotton Shorts, Medium Red", "Women's Casualwear", 30, 5);
    shoppingCart1 = new ShoppingCart();
    shoppingCart1.addItem( shoe, 2 );
    shoppingCart1.addItem( dress, 1 );
    checkout1 = new Checkout(shoppingCart1);
    shoppingCart2 = new ShoppingCart();
    shoppingCart2.addItem( shorts, 1);
    checkout2 = new Checkout(shoppingCart2);
    shoppingCart3 = new ShoppingCart();
    shoppingCart3.addItem( dress, 1);
    checkout3 = new Checkout(shoppingCart3);
    voucher1 = new Voucher(5);
    voucher2 = new Voucher(10, 50);
    voucher3 = new Voucher(15, 75, "Women's Footwear");
  });


  describe("A shopping Cart must be passed in", function(){
    it("stores the shopping cart", function() {
      expect(checkout1.shoppingCart).to.equal(shoppingCart1);
    });
  });

  describe("Subtotal", function(){
    it("shows the price before discount", function() {
      expect(checkout1.showSubtotal()).to.equal(468);
    });
  });
  describe("Discount", function(){
    it ("accepts the voucher if it is valid", function() {
      checkout1.addVoucher(voucher1);
     expect(checkout1.voucher.amount).to.equal(5);
    });
    it ("rejects the voucher if the spend is not high enough", function() {
      checkout2.addVoucher(voucher2);
      expect(checkout2.voucher).not.to.equal(voucher2);
    });
    it("accepts the voucher if the spend is high enough", function(){
      checkout1.addVoucher(voucher2);
      expect(checkout1.voucher.amount).to.equal(10);
    });
    it("rejects the voucher if it doesn't meet all the conditions", function(){
      checkout3.addVoucher(voucher3);
      expect(checkout3.voucher).not.to.equal(voucher3);
    });
    it("accepts the voucher if it meets all the conditions", function(){
      checkout1.addVoucher(voucher3);
      expect(checkout1.voucher.amount).to.equal(15);
    });
  });

  describe("Total", function(){
    it("displays the total price including the discount", function(){
      checkout1.addVoucher(voucher3);
      expect(checkout1.totalPrice()).to.equal(453);
      checkout2.addVoucher(voucher1);
      expect(checkout2.totalPrice()).to.equal(25);
      checkout3.addVoucher(voucher2);
      expect(checkout3.totalPrice()).to.equal(260);
    }); 
  });
});
