$(document).ready(function() {
  var store = new Store();
  var shoppingCart = new ShoppingCart();
  store.stockProducts();
  store.displayItems();

  $(".addToCart").on('click', function(){
    var itemNumber = $(this).attr('id');
    var qty = $(`#quantity${itemNumber}`).val();
    var qtyNumber = parseInt(qty);
    var quantity = (qtyNumber > 1) ? qtyNumber : 1;
    var itemToAdd = store.products[itemNumber];
    shoppingCart.addItem(itemToAdd, quantity);
    console.log(shoppingCart);
  })

});
