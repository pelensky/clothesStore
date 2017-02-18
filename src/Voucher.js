function Voucher(amount, minSpend = 0, requiredItem = null) {
  this.amount = amount;
  this.minSpend = minSpend;
  this.requiredItem = requiredItem;
}

module.exports = Voucher;
