var assert = require("assert");
var Item = require("../item.js");

describe("Item", function() {
  var item;

  beforeEach(function() {
    item = new Item("ps4", 300, true);
  })

  it("should have price of 300", function() {
    assert.equal(300, item.price);
  })

  it("item is true", function(){
    assert.equal(true, item.bogof)
  })
});