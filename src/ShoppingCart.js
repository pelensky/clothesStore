function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function(item, quantity){
  if(item.quantity === 0){
    return false;
  } else {
    this.items.push( [ item, quantity ]);
  }
}
