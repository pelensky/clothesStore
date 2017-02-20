var expect = require('chai').expect;
var Store = require('../src/Store.js');
var Product = require('../src/Product.js');
var ShoppingCart = require('../src/ShoppingCart.js');
var Checkout = require('../src/Checkout.js');

describe("Store", function() {
  beforeEach(function(){
    store = new Store();
    shoe = new Product(1, "Almond Toe Court Shoes, Patent Black", "Women's Footwear", 99, 5);
  });

  describe("Startup", function(){
    it("has the items in the store", function(){
      store.stockProducts();
      expect(store.allProducts).to.include(shoe);
    })
  });
});
