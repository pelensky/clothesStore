describe("Store", function() {
  beforeEach(function(){
    store = new Store();
    shoe = new Product(0, "Almond Toe Court Shoes, Patent Black", "Women's Footwear", 99, 5, "0shoes.jpeg");
    voucher1 = new Voucher(5);
  });

  describe("Stock Products", function(){
    it("has the items in the store", function(){
      store.stockProducts();
      expect(store.products[0]).toEqual(shoe);
    });
  });

  describe("Set up vouchers", function(){
    it("has the vouchers created", function(){
      store.setUpVouchers();
      expect(store.vouchers[0]).toEqual(voucher1);
    });
  });
});
