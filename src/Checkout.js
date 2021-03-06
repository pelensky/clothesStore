// Responsible for the subtotal, discount and total cost of the transaction

function Checkout(shoppingCart) {
  this.shoppingCart = shoppingCart;
}

Checkout.prototype.showSubtotal = function() {
  return this.shoppingCart.totalPrice();
}

Checkout.prototype.addVoucher = function(voucher) {
  if (!voucher.requiredItem){
    this._applyVoucherIfMinimumSpendReached(voucher);
  } else {
    for (i = 0; i < this.shoppingCart.items.length; i++) {
      if(this.shoppingCart.items[i][0].category.includes(voucher.requiredItem)) {
        this._applyVoucherIfMinimumSpendReached(voucher);
      } else {
        swal({
          title: "Sorry",
          text: "Not eligible for this voucher",
          type: "error",
          confirmButtonText: "Got it"
        });
      }
    }
  }
}

Checkout.prototype.totalPrice = function() {
  if (this.voucher) {
    return this.showSubtotal() - this.voucher.amount;
  } else {
    return this.showSubtotal();
  }
}

Checkout.prototype._applyVoucherIfMinimumSpendReached = function(voucher) {
  if(this.shoppingCart.totalPrice() >= voucher.minSpend){
    this.voucher = voucher;
  } else {
    swal({
      title: "Sorry",
      text: "Not eligible for this voucher",
      type: "error",
      confirmButtonText: "Got it"
    });
  }
}
