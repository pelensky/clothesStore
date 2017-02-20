var Product = require('../src/Product.js');

function Store() {
  this.allProducts = [];
}

Store.prototype.stockProducts = function(){
  var productsJson = require('../products.json');
  for (i = 0; i < productsJson.products.length; i++ ){
    this.allProducts.push((new Product(productsJson.products[i].id, productsJson.products[i].name, productsJson.products[i].category, productsJson.products[i].price, productsJson.products[i].quantity, productsJson.products[i].sale)));
  }
};

module.exports = Store;
