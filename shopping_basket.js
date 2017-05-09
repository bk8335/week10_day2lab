var ShoppingBasket = function(){
  this.trolley = [];
}
  ShoppingBasket.prototype = {
    add: function(item) {
      this.trolley.push(item);
    },
    remove: function() {
      this.trolley.pop();
    }
  };


module.exports = ShoppingBasket;