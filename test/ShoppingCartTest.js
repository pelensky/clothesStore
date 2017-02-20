var expect = require('chai').expect;
var ShoppingCart = require('../src/ShoppingCart.js');
var Product = require('../src/Product.js');

describe("ShoppingCart", function() {
  var shoppingCart;
  var shoe;
  var flipFlops;
  var dress;


  beforeEach(function() {
    shoppingCart = new ShoppingCart();
    shoe = new Product(1, "Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
    flipFlops = new Product(5, "Flip Flops, Blue", "Men’s Footwear", 19, 0);
    dress = new Product(12, "Bird Print Dress, Black", "Women’s Formalwear", 270, 10);

  });

  describe("The shopping cart starts with", function(){
    it("an empty array", function() {
      expect(shoppingCart.items).to.be.empty;
    });
  });

  describe("Adding to the cart", function(){
    it("items can be added if there is sufficient quantity", function(){
      shoppingCart.addItem(shoe, 1);
      expect(shoppingCart.items).to.deep.equal([[shoe, 1]]);
    });

    it("items can not be added if they are out of stock", function(){
      shoppingCart.addItem(flipFlops, 1);
      expect(shoppingCart.items).not.to.equal([[flipFlops, 1]]);
    });

    it("items will only be added up to the maximum stock", function(){
      shoppingCart.addItem(shoe, 6);
      expect(shoppingCart.items).to.deep.equal([[shoe, 5]]);
    });

    it("can add multiple items", function(){
      shoppingCart.addItem(shoe, 1);
      shoppingCart.addItem(dress, 1);
      expect(shoppingCart.items).to.deep.equal([[shoe, 1], [dress, 1]]);
    });
  });

  describe("Removing from the cart", function(){
    it("items can be removed at any time", function(){
      shoppingCart.addItem(shoe, 1);
      shoppingCart.removeItem(shoe, 1);
      expect(shoppingCart.items).to.be.empty;
    });

    it("items can be removed when there are multiples", function(){
      shoppingCart.addItem(shoe, 1);
      shoppingCart.addItem(dress, 1);
      shoppingCart.removeItem(shoe, 1);
      expect(shoppingCart.items).to.deep.equal([[dress, 1]]);
    });
  });

  describe("Display the total price of the shopping Cart when", function(){
    it("there is only one item", function(){
      shoppingCart.addItem(shoe, 1);
      expect(shoppingCart.totalPrice()).to.equal(99)
    });

    it("there is more than one of each item", function(){
      shoppingCart.addItem(shoe, 2);
      expect(shoppingCart.totalPrice()).to.equal(198);
    });
    it("there is multiple items of single quantity", function(){
      shoppingCart.addItem(shoe, 1);
      shoppingCart.addItem(dress, 1);
      expect(shoppingCart.totalPrice()).to.equal(369);
    });
  });
});
