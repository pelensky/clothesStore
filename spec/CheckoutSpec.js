describe("Checkout", function() {

  beforeEach(function() {
    shoe = new Product(1, "Almond Toe Court Shoes, Patent Black", "Women's Footwear", 99, 5 );
    dress = new Product(12, "Bird Print Dress, Black", "Women’s Formalwear", 270, 10);
    shorts = new Product(7, "Cotton Shorts, Medium Red", "Women's Casualwear", 30, 5);
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
    voucher3 = new Voucher(15, 75, "Footwear");
  });

  describe("When a shopping cart is passed in it", function(){
    it("stores the shopping cart", function() {
      expect(checkout1.shoppingCart).toEqual(shoppingCart1);
    });
  });

  describe("The subtotal is", function(){
    it("the price before discount", function() {
      expect(checkout1.showSubtotal()).toEqual(468);
    });
  });
  describe("For discounts, the voucher is accepted if ", function(){
    it ("it is valid", function() {
      checkout1.addVoucher(voucher1);
     expect(checkout1.voucher.amount).toEqual(5);
    });
    it("the spend is high enough", function(){
      checkout1.addVoucher(voucher2);
      expect(checkout1.voucher.amount).toEqual(10);
    });
    it("it meets all the conditions", function(){
      checkout1.addVoucher(voucher3);
      expect(checkout1.voucher.amount).toEqual(15);
    });
  });

  describe("The total", function(){
    it("displays the total price including the discount", function(){
      checkout1.addVoucher(voucher3);
      expect(checkout1.totalPrice()).toEqual(453);
      checkout2.addVoucher(voucher1);
      expect(checkout2.totalPrice()).toEqual(25);
      checkout3.addVoucher(voucher2);
      expect(checkout3.totalPrice()).toEqual(260);
    });

    it("only reduces the price for a single voucher", function(){
      checkout1.addVoucher(voucher1);
      checkout1.addVoucher(voucher3);
      expect(checkout1.totalPrice()).toEqual(453);
    });
  });
});
