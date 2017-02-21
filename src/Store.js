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
]

var allProducts = [
  {
    "id": 0,
    "name": "Almond Toe Court Shoes, Patent Black",
    "category": "Women's Footwear",
    "price": 99.00,
    "quantity": 5
  },
  {
    "id": 1,
    "name": "Suede Shoes, Blue",
    "category": "Women's Footwear",
    "price": 42.00,
    "quantity": 4
  },
  {
    "id": 2,
    "name": "Leather Driver Saddle Loafers, Tan",
    "category": "Men's Footwear",
    "price": 34.00,
    "quantity": 12
  },
  {
    "id": 3,
    "name": "Flip Flops, Red",
    "category": "Men's Footwear",
    "price": 19.00,
    "quantity": 6
  },
  {
    "id": 4,
    "name": "Flip Flops, Blue",
    "category": "Men's Footwear",
    "price": 19.00,
    "quantity": 0
  },
  {
    "id": 5,
    "name": "Gold Button Cardigan, Black",
    "category": "Women's Casualwear",
    "price": 167.00,
    "quantity": 6
  },
  {
    "id": 6,
    "name": "Cotton Shorts, Medium Red",
    "category": "Women's Casualwear",
    "price": 30.00,
    "quantity": 5
  },
  {
    "id": 7,
    "name": "Fine Stripe Short Sleeve ￼Shirt, Grey",
    "category": "Men's Casualwear",
    "price": 49.99,
    "quantity": 9
  },
  {
    "id": 8,
    "name": "Fine Stripe Short Sleeve￼ Shirt, Green",
    "category": "Men's Casualwear",
    "price": 49.99,
    "quantity": 9,
    "sale": 39.99
  },
  {
    "id": 9,
    "name": "Sharkskin Waistcoat, Charcoal",
    "category": "Mens Formalwear",
    "price": 75.00,
    "quantity": 2
  },
  {
    "id": 10,
    "name": "Lightweight Patch Pocket￼ Blazer, Deer",
    "category": "Men's Formalwear",
    "price": 175.50,
    "quantity": 1
  },
  {
    "id": 11,
    "name": "Bird Print Dress, Black",
    "category": "Women's Formalwear",
    "price": 270.00,
    "quantity": 10
  },
  {
    "id": 12,
    "name": "Mid Twist Cut-Out Dress, Pink",
    "category": "Women's Formalwear",
    "price": 540.00,
    "quantity": 5
  }
];

Store.prototype.stockProducts = function(){
  for (i = 0; i < allProducts.length; i++ ){
    this.products.push(new Product(allProducts[i].id, allProducts[i].name, allProducts[i].category, allProducts[i].price, allProducts[i].quantity, allProducts[i].sale));
  }
};

Store.prototype.displayItems = function() {
  for (i = 0; i < this.products.length; i++ ){
    if(this.products[i].sale){
      document.getElementById(`td${i}`).innerHTML = `${this.products[i].name} <br> ${this.products[i].category} <br> <s>£${this.products[i].price}</s> <br> £${this.products[i].sale} <br><input type="number" class="number" id="quantity${i}" min="1" max="${this.products[i].quantity}"> <br> <input  type="button" class="addToCart" value="Add to Cart" id="${i}">`
    } else if (this.products[i].quantity < 1){
      document.getElementById(`td${i}`).innerHTML = `${this.products[i].name} <br> ${this.products[i].category} <br> £${this.products[i].price} <br> Out Of Stock`
    } else {
      document.getElementById(`td${i}`).innerHTML = `${this.products[i].name} <br> ${this.products[i].category} <br> £${this.products[i].price} <br> <input type="number" class="number" id="quantity${i}" min="1" max="${this.products[i].quantity}"> <br> <input type="button" class="addToCart" value="Add to Cart" id="${i}">`
    }
  }
};

Store.prototype.showShoppingCart = function(shoppingCart) {
  console.log(shoppingCart.items.length);
  for (i = 0; i < shoppingCart.items.length; i++ ){
    if(shoppingCart.items.length=== 0){
      document.getElementByID('shoppingCartDiv').innerHTML = "";
    } else {
      document.getElementById(`item${i}`).innerHTML = `Item: ${shoppingCart.items[i][0].name}, Quantity: ${shoppingCart.items[i][1]} Cost (each):  £${shoppingCart.items[i][0].price} <input type="button" class="removeItem" value="Remove" id="${i}"><br>`;
      document.getElementById(`item${i+1}`).innerHTML = "";
    }
  }
};

Store.prototype.showSubtotal = function(shoppingCart) {
  document.getElementById(`subtotal`).innerHTML = "Subtotal: £" + shoppingCart.totalPrice();
};

Store.prototype.setUpVouchers = function() {
  for (i = 0; i < vouchers.length; i++ ){
    this.vouchers.push(new Voucher(vouchers[i].amount, vouchers[i].minSpend, vouchers[i].requiredItem));
  }
}

Store.prototype.displayVouchers = function() {
  for (i = 0; i < this.vouchers.length; i++ ){
    if(this.vouchers[i].minSpend === 0){
      document.getElementById(`voucher${i}`).innerHTML = `${this.vouchers[i].amount} <br> <input  type="button" class="applyVoucher" value="Apply Voucher" id="${i}">`;
    } else if(!this.vouchers[i].requiredItem){
      document.getElementById(`voucher${i}`).innerHTML = `${this.vouchers[i].amount} <br> ${this.vouchers[i].minSpend} <br> <input  type="button" class="applyVoucher" value="Apply Voucher" id="${i}">`;
    } else {
      document.getElementById(`voucher${i}`).innerHTML = `${this.vouchers[i].amount} <br> ${this.vouchers[i].minSpend} <br> ${this.vouchers[i].requiredItem} <br> <input  type="button" class="applyVoucher" value="Apply Voucher" id="${i}">`;
    }
  }
};

Store.prototype.showVoucherDiscount = function(checkout) {
  document.getElementById("discount").innerHTML = "Discount: £" + checkout.voucher.amount;
};

Store.prototype.showTotalPrice = function(checkout) {
  document.getElementById(`total`).innerHTML = "Total: £" + checkout.totalPrice();
};

Store.prototype.removeDeletedItems = function(i) {
  document.getElementById(`i`).innerHTML = "DAN IS COOL";
};
