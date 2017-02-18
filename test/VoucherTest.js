var expect = require('chai').expect;
var Voucher = require('../src/Voucher.js');

describe("Voucher", function() {
  var fiveOff;
  var tenOffWithFiftySpend;
  var fifteenOffWithFootwearandSeventyFiveSpend;

  beforeEach(function() {
    fiveOff = new Voucher(5);
    tenOffWithFiftySpend = new Voucher(10, 50);
    fifteenOffWithFootwearandSeventyFiveSpend = new Voucher(15,75, "Footwear");
  });

  describe("Vouchers should accept an argument for ", function(){
    it("the amount off", function(){
      expect(fiveOff.amount).to.equal(5)
    });

    it("the minimum spend", function(){
      expect(tenOffWithFiftySpend.minSpend).to.equal(50);
    });

    it("the minimum spend", function(){
      expect(fifteenOffWithFootwearandSeventyFiveSpend.requiredItem).to.equal("Footwear");
    });
  });


});
