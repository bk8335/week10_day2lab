var ShoppingBasket = function(loyalty){
  this.trolley = [];
  this.loyalty = loyalty;

}
  ShoppingBasket.prototype = {
    add: function(item) {
      this.trolley.push(item);
    },
    
    remove: function() {
      this.trolley.pop();
    },

    checkout: function() {
      var total = 0;
      for(var item of this.trolley){
        total += item.price;
      }
      if(total > 20){
        total = total * 0.9;
      }
      if(this.loyalty === true){
        total = total * 0.95;
      }
      return total;
    }
  };


module.exports = ShoppingBasket;