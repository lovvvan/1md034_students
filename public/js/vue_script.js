

function MenuItem(box, name, img, kCal, gluten) {
  this.box = box;
  this.name = name;
  this.img = img;
  this.kCal = kCal;
  this.gluten = gluten;
  this.getInfo = function() {
    return this.name + ' ' + this.kCal;
  }
}

let beenBurger         = new MenuItem("a", "Black Been burger", './img/blackbeenBurger.jpg', 350, false);
let fakeHalloumiBurger = new MenuItem("b", "Fake-Halloumi Burger", './img/halloumiBurger.jpg', 400, true);
let pumBurger          = new MenuItem("c", "Pumpkin Burger", './img/pumpkinBurger.jpg', 200, false);

var burgersArray    = [beenBurger, fakeHalloumiBurger, pumBurger];

var vm = new Vue({
    el: '#wrapper',
    data: {
    burgers: burgersArray,
    box: 'box'
  }
})
