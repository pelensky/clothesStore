// Responsible for the customer's experience in the store.

function Store() {
  this.products = [];
  this.vouchers = [];
}

var vouchers = [
  {
    "amount": 5,
  },
  {
    "amount": 10,
    "minSpend": 50
  },
  {
    "amount": 15,
    "minSpend": 75,
    "requiredItem": "Footwear"
  }
];

var allProducts = [
  {
    "id": 0,
    "name": "Almond Toe Court Shoes, Patent Black",
    "category": "Women's Footwear",
    "price": 99.00,
    "quantity": 5,
    "img": "0shoes.jpeg"
  },
  {
    "id": 1,
    "name": "Suede Shoes, Blue",
    "category": "Women's Footwear",
    "price": 42.00,
    "quantity": 4,
    "img": "1shoes.jpg"
  },
  {
    "id": 2,
    "name": "Leather Driver Saddle Loafers, Tan",
    "category": "Men's Footwear",
    "price": 34.00,
    "quantity": 12,
    "img": "2shoes.jpeg"
  },
  {
    "id": 3,
    "name": "Flip Flops, Red",
    "category": "Men's Footwear",
    "price": 19.00,
    "quantity": 6,
    "img": "3flipflops.jpg"
  },
  {
    "id": 4,
    "name": "Flip Flops, Blue",
    "category": "Men's Footwear",
    "price": 19.00,
    "quantity": 0,
    "img": "4flipflops.jpg"
  },
  {
    "id": 5,
    "name": "Gold Button Cardigan, Black",
    "category": "Women's Casualwear",
    "price": 167.00,
    "quantity": 6,
    "img": "5cardigan.jpg"
  },
  {
    "id": 6,
    "name": "Cotton Shorts, Medium Red",
    "category": "Women's Casualwear",
    "price": 30.00,
    "quantity": 5,
    "img": "6shorts.jpg"
  },
  {
    "id": 7,
    "name": "Fine Stripe Short Sleeve ￼Shirt, Grey",
    "category": "Men's Casualwear",
    "price": 49.99,
    "quantity": 9,
    "img": "7shirt.jpg"
  },
  {
    "id": 8,
    "name": "Fine Stripe Short Sleeve￼ Shirt, Green",
    "category": "Men's Casualwear",
    "price": 49.99,
    "quantity": 9,
    "img": "8shirt.jpg",
    "sale": 39.99
  },
  {
    "id": 9,
    "name": "Sharkskin Waistcoat, Charcoal",
    "category": "Mens Formalwear",
    "price": 75.00,
    "quantity": 2,
    "img": "9waistcoat.jpeg"
  },
  {
    "id": 10,
    "name": "Lightweight Patch Pocket￼ Blazer, Deer",
    "category": "Men's Formalwear",
    "price": 175.50,
    "quantity": 1,
    "img": "10blazer.jpg"
  },
  {
    "id": 11,
    "name": "Bird Print Dress, Black",
    "category": "Women's Formalwear",
    "price": 270.00,
    "quantity": 10,
    "img": "11dress.jpeg"
  },
  {
    "id": 12,
    "name": "Mid Twist Cut-Out Dress, Pink",
    "category": "Women's Formalwear",
    "price": 540.00,
    "quantity": 5,
    "img": "12dress.jpeg"
  }
];

Store.prototype.stockProducts = function(){
  for (i = 0; i < allProducts.length; i++ ){
    this.products.push(new Product(allProducts[i].id, allProducts[i].name, allProducts[i].category, allProducts[i].price, allProducts[i].quantity, allProducts[i].img, allProducts[i].sale));
  }
};

Store.prototype.displayItems = function() {
  for (i = 0; i < this.products.length; i++ ){
    if(this.products[i].sale){
      this._saleProducts();
    } else if (this.products[i].quantity < 1){
      this._outOfStockProducts();
    } else {
      this._regularPriceStockedProducts();
    }
  }
};

Store.prototype.showShoppingCart = function(shoppingCart) {
  if(shoppingCart.items.length > 0){
    for (i = 0; i < shoppingCart.items.length; i++ ){
      document.getElementById(`item${i}`).innerHTML = `Item: ${shoppingCart.items[i][0].name} <br> Quantity: ${shoppingCart.items[i][1]} <br> Cost (each):  £${shoppingCart.items[i][0].price} <br> <button type="button" class="removeItem btn btn-sm btn-outline-secondary" id="${i}"> Remove </button> <br>`;
      document.getElementById(`item${i+1}`).innerHTML = "";
    }
  } else {
    document.getElementById(`item0`).innerHTML = "";
  }
};

Store.prototype.showSubtotal = function(shoppingCart) {
  document.getElementById(`subtotal`).innerHTML = "Subtotal: £" + shoppingCart.totalPrice().toFixed(2);
};

Store.prototype.setUpVouchers = function() {
  for (i = 0; i < vouchers.length; i++ ){
    this.vouchers.push(new Voucher(vouchers[i].amount, vouchers[i].minSpend, vouchers[i].requiredItem));
  }
}

Store.prototype.displayVouchers = function() {
  for (i = 0; i < this.vouchers.length; i++ ){
    if(this.vouchers[i].minSpend === 0){
      this._voucherWithNoMinimumSpend();
    } else if(!this.vouchers[i].requiredItem){
      this._voucherWithRequiredItem();
    } else {
      this._normalVoucher();
    }
  }
};

Store.prototype.showVoucherDiscount = function(checkout) {
  if(checkout.voucher){
    document.getElementById("discount").innerHTML = "<br> Discount: £" + checkout.voucher.amount.toFixed(2);
  }
};

Store.prototype.showTotalPrice = function(checkout) {
  if(checkout.totalPrice() < 0) {
    document.getElementById(`total`).innerHTML = "<br> Total: £0.00"
  } else {
    document.getElementById(`total`).innerHTML = "<br> Total: £" + checkout.totalPrice().toFixed(2);
  }
};

Store.prototype._saleProducts = function(){
  document.getElementById(`td${i}`).innerHTML = `<img src="./img/${this.products[i].img}" class="img-responsive"> <br> ${this.products[i].name} <br> ${this.products[i].category} <br> <s>£${this.products[i].price.toFixed(2)}</s> <br> <span id="sale"> £${this.products[i].sale.toFixed(2)} </span> <br><input type="number" class="number" id="quantity${i}" min="1" max="${this.products[i].quantity}"> <br> <input  type="button" class="addToCart btn btn-outline-primary" value="Add to Cart" id="${i}">`;
};

Store.prototype._outOfStockProducts = function(){
  document.getElementById(`td${i}`).innerHTML = `<img src="./img/${this.products[i].img}" class="img-responsive"> <br> ${this.products[i].name} <br> ${this.products[i].category} <br> £${this.products[i].price.toFixed(2)} <br> Out Of Stock`;
}

Store.prototype._regularPriceStockedProducts = function(){
  document.getElementById(`td${i}`).innerHTML = `<img src="./img/${this.products[i].img}" class="img-responsive"> <br> ${this.products[i].name} <br> ${this.products[i].category} <br> £${this.products[i].price.toFixed(2)} <br> <input type="number" class="number" id="quantity${i}" min="1" max="${this.products[i].quantity}"> <br> <button type="button" class="addToCart btn btn-outline-primary" id="${i}">Add to Cart</button>`;
}

Store.prototype._voucherWithNoMinimumSpend = function(){
  document.getElementById(`voucher${i}`).innerHTML = `£${this.vouchers[i].amount} off<br> No minimum spend <br> <button type="button" class="applyVoucher btn btn-outline-primary" id="${i}"> Apply Voucher </button>`;
}

Store.prototype._voucherWithRequiredItem = function(){
  document.getElementById(`voucher${i}`).innerHTML = `£${this.vouchers[i].amount} off <br> £${this.vouchers[i].minSpend} minimum spend <br> <button type="button" class="applyVoucher btn btn-outline-primary" id="${i}"> Apply Voucher </button>`;
}

Store.prototype._normalVoucher = function(){
  document.getElementById(`voucher${i}`).innerHTML = `£${this.vouchers[i].amount} off <br> £${this.vouchers[i].minSpend} minimum spend <br> ${this.vouchers[i].requiredItem} item required <br> <button type="button" class="applyVoucher btn btn-outline-primary" id="${i}"> Apply Voucher </button>`;
}
