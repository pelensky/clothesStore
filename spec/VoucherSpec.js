describe("Voucher", function() {

  beforeEach(function() {
    fiveOff = new Voucher(5);
    tenOffWithFiftySpend = new Voucher(10, 50);
    fifteenOffWithFootwearandSeventyFiveSpend = new Voucher(15,75, "Footwear");
  });

  describe("Accept an argument for ", function(){
    it("the amount off", function(){
      expect(fiveOff.amount).toEqual(5)
    });

    it("the minimum spend", function(){
      expect(tenOffWithFiftySpend.minSpend).toEqual(50);
    });

    it("the minimum spend", function(){
      expect(fifteenOffWithFootwearandSeventyFiveSpend.requiredItem).toEqual("Footwear");
    });
  });

});
