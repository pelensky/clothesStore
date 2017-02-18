function Checkout(shoppingCart) {
  this.shoppingCart = shoppingCart;
}

Checkout.prototype.showSubtotal = function() {
  console.log(this.shoppingCart);
return this.shoppingCart.totalPrice();
}

module.exports = Checkout;
