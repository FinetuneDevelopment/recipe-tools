'use strict';

export default function addCheckShowFactory() {
  let myFactory = {};

  myFactory.init = function () {
    console.log("Bonk!");
  }

  return myFactory;
}