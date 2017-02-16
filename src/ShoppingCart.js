function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function(item, quantity){
  if(item.quantity === 0){
    return "Out of stock";
  } else if( quantity > item.quantity ){
    this.items.push( [ item, item.quantity ])
    return `Not enough in stock. ${item.quantity} added to your cart.`
  } else {
    this.items.push( [ item, quantity ]);
  }
}

ShoppingCart.prototype.removeItem = function(item, quantity){
  this.items.splice([item, quantity]);
}

ShoppingCart.prototype.totalPrice = function() {
  var total = 0;
  for (i = 0; i < this.items.length; i++) {
    total += this.items[i][0].price * this.items[i][1];
  }
  return total;
}
