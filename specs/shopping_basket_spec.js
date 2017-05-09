var assert = require("assert");
var Item = require("../item.js");
var ShoppingBasket = require("../shopping_basket.js");

describe("Shopping Basket", function(){
  var shoppingBasket;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket();
  });

  it("trolley should be empty", function(){
    assert.equal(0, shoppingBasket.trolley.length);
  });

  it("shopping basket can have multiple items", function() {
    shoppingBasket.add(new Item("xbox", 200));
    shoppingBasket.add(new Item("switch", 250));
    assert.equal(2, shoppingBasket.trolley.length);
  })

  it("can remove item from shopping basket", function() {
    shoppingBasket.add(new Item("xbox", 200));
    shoppingBasket.add(new Item("switch", 250));
    shoppingBasket.remove();
    assert.equal(1, shoppingBasket.trolley.length);
  })

});