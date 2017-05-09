var assert = require("assert");
var Item = require("../item.js");
var ShoppingBasket = require("../shopping_basket.js");

describe("Shopping Basket", function(){
  var shoppingBasket;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket(false);
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

  it("10% discount on total over £20", function() {
    shoppingBasket.add(new Item("xbox", 200));
    shoppingBasket.add(new Item("switch", 250));
    assert.equal(405, shoppingBasket.checkout() )
  })

  it("10% discount doesn't apply under £20", function() {
    shoppingBasket.add(new Item("big mac", 5));
    assert.equal(5, shoppingBasket.checkout() );
  })

  it("discounts 5% with loyalty card", function() {
    var shoppingBasket2 = new ShoppingBasket(true)
    shoppingBasket2.add(new Item("xbox", 200));
    shoppingBasket2.add(new Item("switch", 250));
    assert.equal(384.75, shoppingBasket2.checkout() );
  })

});