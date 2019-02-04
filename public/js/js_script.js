// (function(){
  'use strict';

  // (String, Int, Bool) ->
  function MenuItem(name, img, kCal, gluten) {
    this.name = name;
    this.img = img;
    this.kCal = kCal;
    this.gluten = gluten;
    this.getInfo = function() {
      return this.name + ' ' + this.kCal;
    }
  }

  let beenBurger         = new MenuItem("Black Been burger", './img/blackbeenBurger.jpg', 350, false);
  let fakeHalloumiBurger = new MenuItem("Fake-Halloumi Burger", './img/halloumiBurger.jpg', 400, true);
  let pumBurger          = new MenuItem("Pumpkin Burger", './img/pumpkinBurger.jpg', 200, false);

  var wrapper = document.getElementById('wrapper');

  var burgers    = [beenBurger, fakeHalloumiBurger, pumBurger];
  var boxLetters = ['a', 'b', 'c'];

  var submitButton = document.getElementById('submitButton');
  submitButton.onclick = function () {
      console.log("Button clicked!");
      var fullname = document.getElementById('fullname').value;
      var email = document.getElementById('email').value;
      var street = document.getElementById('street').value;
      var house = document.getElementById('house').value;
      var payment = document.getElementById('Payment').value;

      var genderButtonsArray = document.getElementsByName('rb');
      var gender;
      for (i = 0; i < genderButtonsArray.length; i++) {
        if (genderButtonsArray[i].checked == true) {
          gender = genderButtonsArray[i].value;
        }
      }
      var formArray = [fullname, email, street, house, payment, gender];
      console.log(formArray);
  }




  var index = 0;
  var i;
  for (i = 0; i < burgers.length; i++) {
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.classList.add(boxLetters[index]);
    wrapper.appendChild(box);

    var h = document.createElement('h4');
    var headline = document.createTextNode(burgers[i].name);
    h.appendChild(headline);
    box.appendChild(h);

    var image = document.createElement('img');
    image.setAttribute('class', 'burger');
    image.setAttribute('src', burgers[i].img);
    image.setAttribute('alt', burgers[i].name);
    image.setAttribute('title', burgers[i].name);
    image.setAttribute('width', 200);
    image.setAttribute('height', 200);
    box.appendChild(image);

    var listDiv = document.createElement('div');
    listDiv.setAttribute('class', 'ingredients');
    box.appendChild(listDiv);

    var ul = document.createElement('ul');
    listDiv.appendChild(ul);
    var li1 = document.createElement('li');
    var li1Txt = document.createTextNode(burgers[i].kCal + ' kCal');
    li1.appendChild(li1Txt);
    ul.appendChild(li1);
    if (burgers[i].gluten == true) {
      var li2 = document.createElement('li');
      li2.innerHTML = 'Contains <span class="allergy">Gluten</span>';
      ul.appendChild(li2);
    }
    index += 1;
  }


// }());
