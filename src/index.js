// Index file - user's interaction

$(document).ready(function() {
  var store = new Store();
  var shoppingCart = new ShoppingCart();
  var checkout;
  store.stockProducts();
  store.displayItems();
  store.setUpVouchers();


  $(".addToCart").on('click', function(){
    var itemNumber = $(this).attr('id');
    var qty = $(`#quantity${itemNumber}`).val();
    var qtyNumber = parseInt(qty);
    var quantity = (qtyNumber > 1) ? qtyNumber : 1;
    shoppingCart.addItem(store.products[itemNumber], quantity);
    store.showShoppingCart(shoppingCart);
    checkout = new Checkout(shoppingCart);
    store.showSubtotal(shoppingCart);
    store.showTotalPrice(checkout);
    store.displayVouchers();
  });


  $(document).on('click', '.applyVoucher', function() {
    var voucherNumber = $(this).attr('id');
    checkout.addVoucher(store.vouchers[voucherNumber]);
    loadCart();
  });

  $(document).on('click', '.removeItem', function() {
    var shoppingCartItemNumber = $(this).attr('id');
    shoppingCart.removeItem(shoppingCart.items[shoppingCartItemNumber])
    loadCart();
  });

  function loadCart() {
    store.showShoppingCart(shoppingCart);
    store.showSubtotal(shoppingCart);
    store.showVoucherDiscount(checkout);
    store.showTotalPrice(checkout);
  }
});
