function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function(item, quantity){
  this.items.push( [ item, quantity ]);
}
