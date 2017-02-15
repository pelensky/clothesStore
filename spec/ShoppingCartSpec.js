describe("ShoppingCart", function() {
  var shoppingCart;
  var shoe;

  beforeEach(function() {
    shoppingCart = new ShoppingCart;
    shoe = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
  });

  describe("The shopping cart starts with", function(){
    it("an empty array", function() {
      expect(shoppingCart.items).toEqual( [] );
    });
  });

  describe("Customers can add an item to the cart if", function(){
    it("there is sufficient quantity", function(){
      shoppingCart.addItem(shoe, 1);
      expect(shoppingCart.items).toEqual([[shoe, 1]]);
    });
  });
});
