function Store() {
  this.products = [];
}

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
    this.products.push((new Product(allProducts[i].id, allProducts[i].name, allProducts[i].category, allProducts[i].price, allProducts[i].quantity, allProducts[i].sale)));
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
