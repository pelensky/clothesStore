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