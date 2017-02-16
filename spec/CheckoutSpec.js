describe("Checkout", function() {
  var checkout;
  var shoppingCart;
  var shoe;
  var dress;

  beforeEach(function() {
    shoe = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99, 5 );
    dress = new Product("Bird Print Dress, Black", "Women’s Formalwear", 270, 10);
    shoppingCart = new ShoppingCart();
    shoppingCart.addItem([shoe, 2]);
    shoppingCart.addItem([dress, 1]);
    checkout = new Checkout(shoppingCart);

  });


  describe("A shopping Cart must be passed in", function(){
    it("stores the shopping cart", function() {
      expect(checkout.shoppingCart).toEqual(shoppingCart);
    });
  });
});
