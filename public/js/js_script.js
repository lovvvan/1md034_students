// (function(){
  'use strict';

  // (String, Int, Bool) ->
  function MenuItem(name, kCal, allergens) {
    this.name = name;
    this.kCal = kCal;
    this.allergens = allergens;
    this.getInfo = function() {
      return this.name + ' ' + this.kCal;
    }
  }

  let burger = new MenuItem("Pumpkin Burger", 230, true);
  console.log(burger);
  console.log(burger.name);
  console.log(burger.getInfo());

  let beenBurger = new MenuItem("Been burger", 400, true);
  console.log(burger);
  console.log(burger.name);
  console.log(burger.getInfo());

// }());
