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
