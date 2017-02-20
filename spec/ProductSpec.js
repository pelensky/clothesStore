describe(`Product`, function() {

  beforeEach(function() {
    shoe = new Product(1, "Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
  });

  describe("Each product should take a", function(){
    it("name", function() {
      expect(shoe.name).toEqual("Almond Toe Court Shoes, Patent Black");
    });
    it("category", function() {
      expect(shoe.category).toEqual("Women’s Footwear");
    });
    it("price", function() {
      expect(shoe.price).toEqual(99);
    });
    it("quantity", function() {
      expect(shoe.quantity).toEqual(5);
    });
  });
});
