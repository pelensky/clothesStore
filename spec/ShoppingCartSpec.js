describe("ShoppingCart", function() {
  var shoppingCart;
  var shoe;

  beforeEach(function() {
    shoppingCart = new ShoppingCart();
    shoe = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
    flipFlops = new Product("Flip Flops, Blue", "Men’s Footwear", 19, 0)
  });

  describe("The shopping cart starts with", function(){
    it("an empty array", function() {
      expect(shoppingCart.items).toEqual( [] );
    });
  });

  describe("Adding to the cart", function(){
    it("items can be added if there is sufficient quantity", function(){
      shoppingCart.addItem(shoe, 1);
      expect(shoppingCart.items).toEqual([[shoe, 1]]);
    });

    it("items can not be added if they are out of stock", function(){
      shoppingCart.addItem(flipFlops, 1);
      expect(shoppingCart.items).not.toEqual([[flipFlops, 1]]);
    });

    it("items will only be added up to the maximum stock", function(){
      shoppingCart.addItem(shoe, 6);
      expect(shoppingCart.items).toEqual([[shoe, 5]]);
    });
  });
});
