// Responsible for moving products in and out of the shopping cart

function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function(item, quantity){
  if( quantity > item.quantity ){
    this.items.push( [ item, item.quantity ])
  } else {
    this.items.push( [ item, quantity ]);
  }
}

ShoppingCart.prototype.removeItem = function(item){
  var index;
  for (i = 0; i < this.items.length; i++) {
    if (this.items[i][0] === item){
      index = i;
    }
    this.items.splice(index, 1);
    return this.items;
  }
}

ShoppingCart.prototype.totalPrice = function() {
  var total = 0;
  for (i = 0; i < this.items.length; i++) {
    total += this.items[i][0].price * this.items[i][1];
  }
  return total;
};
