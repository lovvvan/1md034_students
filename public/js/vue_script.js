



//var submitButton = document.getElementById('submitButton');

function getOrder() {
    var fullname = document.getElementById('fullname').value;
    var email    = document.getElementById('email').value;
    var street   = document.getElementById('street').value;
    var house    = document.getElementById('house').value;
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

    var formArray = [fullname, email, street, house, payment, gender, chosenBurgersArray];

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
    showorder: false,
    fullname: "",
    email: "",
    street: "",
    house: "",
    payment: "",
    gender: "",
    burgers: "",
  },
  methods: {
      sendOrder: function() {
      var formArray = getOrder();
      console.log(formArray),
      this.fullname = formArray[0],
      this.email = formArray[1],
      this.street = formArray[2],
      this.house = formArray[3],
      this.payment = formArray[4],
      this.gender = formArray[5],
      this.burgers = formArray[6].join(', '),
      this.showorder = true
    }
  }
})
