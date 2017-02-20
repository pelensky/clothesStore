var expect = require('chai').expect;
var Product = require('../src/Product.js');

describe(`Product`, function() {

  beforeEach(function() {
    shoe = new Product(1, "Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
  });

  describe("Each product should take a", function(){
    it("name", function() {
      expect(shoe.name).to.equal("Almond Toe Court Shoes, Patent Black");
    });
    it("category", function() {
      expect(shoe.category).to.equal("Women’s Footwear");
    });
    it("price", function() {
      expect(shoe.price).to.equal(99);
    });
    it("quantity", function() {
      expect(shoe.quantity).to.equal(5);
    });
  });
});
