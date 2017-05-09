var ShoppingBasket = function(){
  this.trolley = [];
}
  ShoppingBasket.prototype = {
    add: function(item) {
      this.trolley.push(item);
    }
  };


module.exports = ShoppingBasket;