function Checkout(shoppingCart) {
  this.shoppingCart = shoppingCart;
}

Checkout.prototype.showSubtotal = function() {
  return this.shoppingCart.totalPrice();
}

Checkout.prototype.addVoucher = function(voucher) {
  if (!voucher.requiredItem){
    if(this.shoppingCart.totalPrice() >= voucher.minSpend){
      this.voucher = voucher;
    }
  } else {
    for (i = 0; i < this.shoppingCart.items.length; i++) {
      if (this.shoppingCart.items[i][0].category === voucher.requiredItem) {
        if (this.shoppingCart.totalPrice() >= voucher.minSpend) {
          this.voucher = voucher;
        }
      }
    }
  }
}

Checkout.prototype.totalPrice = function() {
  return this.showSubtotal() - this.voucher.amount; 
}
module.exports = Checkout;
