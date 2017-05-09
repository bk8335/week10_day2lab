var ShoppingBasket = function(){
  this.trolley = [];
}
  ShoppingBasket.prototype = {
    add: function(item) {
      this.trolley.push(item);
    },
    
    remove: function() {
      this.trolley.pop();
    },

    checkout: function() {
      total = 0;
      for(var item of this.trolley){
        total += item.price;
      }
      if(total > 20){
        total = total * 0.9;
      }
      return total;
    }
  };


module.exports = ShoppingBasket;