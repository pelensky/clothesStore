function Checkout(shoppingCart) {
  this.shoppingCart = shoppingCart;
}

Checkout.prototype.showSubtotal = function() {
return this.shoppingCart.totalPrice();
}

module.exports = Checkout;
