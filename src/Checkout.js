function Checkout(shoppingCart) {
  this.shoppingCart = shoppingCart;
}

Checkout.prototype.showSubtotal = function() {
return this.shoppingCart.totalPrice();
}

Checkout.prototype.addVoucher = function(voucher) {
  this.voucher = voucher;
}
module.exports = Checkout;
