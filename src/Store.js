function Store() {
  this.allProducts = [];
}

Store.prototype.stockProducts = function(){
  var productsJson = JSON.parse('../products.json');
  for (i = 0; i < productsJson.products.length; i++ ){
    this.allProducts.push((new Product(productsJson.products[i].id, productsJson.products[i].name, productsJson.products[i].category, productsJson.products[i].price, productsJson.products[i].quantity, productsJson.products[i].sale)));
  }
};

Store.prototype.displayItems = function() {
  var table = document.getElementById("productsTable");

};
