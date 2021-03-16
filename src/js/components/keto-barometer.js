'use strict';

export default function clickFactory() {

  let myFactory = {};

  // Listens for clicks, then takes action (or none)
  myFactory.init = function () {
    const elBaromiter = document.getElementById('keto-barometer');
    const baromiterInputs = document.querySelectorAll('[data-js="barometer-value"]');
    if (elBaromiter) {
      console.log(baromiterInputs.length);
    }
  }

  return myFactory;
}