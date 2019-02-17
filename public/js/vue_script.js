
var socket = io();


//var submitButton = document.getElementById('submitButton');

function getOrder() {
    var fullname = document.getElementById('fullname').value;
    var email    = document.getElementById('email').value;
    var payment  = document.getElementById('Payment').value;

    var genderButtonsArray = document.getElementsByName('rb');
    var gender;
    for (i = 0; i < genderButtonsArray.length; i++) {
      if (genderButtonsArray[i].checked == true) {
        gender = genderButtonsArray[i].value;
      }
    }

    var burgerButtonsArray = document.getElementsByName('bc');
    var chosenBurgersArray = [];
    for (i = 0; i < burgerButtonsArray.length; i++) {
      if (burgerButtonsArray[i].checked == true) {
        chosenBurgersArray.push(burgerButtonsArray[i].value);
      }
    }

    var formArray = [fullname, email, payment, gender, chosenBurgersArray];

    return formArray;
}


var vm = new Vue({
    el: '#wrapper',
    data: {
      burgers: food,
      box: 'box',
    }
})

var vmButton = new Vue ({
  el: '#orderDiv',
  data: {
    errors: [],
    showorder: false,
    fullname: "",
    email: "",
    payment: "",
    gender: "",
    burgers: "",
    orders: { show:false },
    orderNr: 0
  },

  methods: {
      sendOrder: function() {
        var formArray = getOrder();
        console.log(formArray),
        this.fullname = formArray[0],
        this.email    = formArray[1],
        this.payment  = formArray[2],
        this.gender   = formArray[3],
        this.burgers  = formArray[4],
        this.errors   = [];
        if(!this.fullname) {this.errors.push("Name")};
        if(!this.email) {this.errors.push("Email")};
        if(!this.burgers) {this.errors.push("Please choose a burger")};
        if(this.errors.length == 0) {this.showorder = true}
      },

      displayOrder: function(event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                      y: event.currentTarget.getBoundingClientRect().top};
        this.orders = { show: true,
                        details: { x: event.clientX - 10 - offset.x,
                                   y: event.clientY - 10 - offset.y },
                        orderItems: [],
                      };
      },

      /*getNext: function () {
        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
          return Math.max(last, next);
        }, 0);
        return lastOrder + 1;
      },*/

      getNext: function() {
        this.orderNr = this.orderNr + 1;
        return this.orderNr;
      },


      addOrder: function (event) {
        this.sendOrder();
        socket.emit("addOrder", { orderId: this.getNext(),
                                  details: this.orders.details,
                                  orderItems: this.burgers,
                                  orderInfo: [this.fullname, this.email],
                                });

      }
    },
})
