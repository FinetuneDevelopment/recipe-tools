'use strict';

export default function clickFactory() {

  let myFactory = {};

  // Listens for clicks, then takes action (or none)
  myFactory.init = function () {
    const elBaromiter = document.getElementById('keto-barometer');
    if (elBaromiter) {
      console.log("Yes, there is a Keto Baromiter on this page.");
    }
  }

  return myFactory;
}