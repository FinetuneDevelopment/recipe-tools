'use strict';

export default function clickFactory() {

  let myFactory = {};

  // Listens for clicks, then takes action (or none)
  myFactory.init = function () {
    const elBaromiter = document.getElementById('keto-barometer');
    const baromiterInputs = document.querySelectorAll('[data-js="barometer-value"]');
    if (elBaromiter) {
      // If we don't have enough ingredients to make a useful guess
      if (baromiterInputs.length < 3) {
        console.log("Yeah, this recipe needs work");
      } else {
        console.log("Bonk!");
      }
    }
  }

  return myFactory;
}