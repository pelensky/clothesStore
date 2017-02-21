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
    var itemToAdd = store.products[itemNumber];
    shoppingCart.addItem(itemToAdd, quantity);
    store.showShoppingCart(shoppingCart);
    checkout = new Checkout(shoppingCart);
    store.showSubtotal(shoppingCart);
    store.showTotalPrice(checkout);
    store.displayVouchers();
  });


    $(document).on('click', '.applyVoucher', function() {
    var voucherNumber = $(this).attr('id');
    console.log(voucherNumber);
    console.log(store.vouchers[voucherNumber])
    console.log(checkout);
    var voucherToAdd = store.vouchers[voucherNumber];
    checkout.addVoucher(voucherToAdd);
    store.showVoucherDiscount(checkout);
    console.log(checkout);
    store.showTotalPrice(checkout);
  });

  $(document).on('click', '.removeItem', function() {
    var shoppingCartItemNumber = $(this).attr('id');
    shoppingCart.removeItem(shoppingCart.items[shoppingCartItemNumber])
    store.showSubtotal(shoppingCart);
    store.showShoppingCart(shoppingCart);
    store.showTotalPrice(checkout);
  });

});
