'use strict';

export default function clickFactory() {

  let myFactory = {};

  // Listens for clicks, then takes action (or none)
  myFactory.init = function () {
    myFactory.updateBarometer();

    // Listens for the user "improving" the recipe
    const baromiterInputs = document.querySelectorAll('[data-js="barometer-value"]');
    if (baromiterInputs.length > 2) {
      for (var i = 0; i < baromiterInputs.length; i++) {
        baromiterInputs[i].oninput = myFactory.updateBarometer;
      }
    }
  },
  // Converts measurements from old-fashioned values to modern gramms
  myFactory.convertToGramms = function (value,unit) {
    unit.toLowerCase();
    if (parseFloat(value) && unit !== '') {
      switch (unit) {

        // Tablespoons
        case 'tbsp':
        case 'tablespoon':
        case 'tablespoons':
        case 'table spoon':
        case 'table spoons':
          return value * 15;
          break;

          // Cups
        case 'cup':
        case 'cups':
          return value * 227;
          break;

          // Ounce
        case 'oz':
        case 'ozs':
        case 'ounce':
        case 'ounces':
          return value * 28.3495;
          break;

          // Pounds
        case 'lb':
        case 'lbs':
        case 'pound':
        case 'pounds':
          return value * 453.592;
          break;

        // Ah, trick question I see
        case 'g':
        case 'gramm':
        case 'gramms':
        case 'gram':
        case 'grams':
        case 'gramme':
        case 'grammes':
          return value;
      }
    }
  },
  // Finds all the relevent data on the page and in the ingredients JSON and does its best guess
  // at how keto this recipe is
  myFactory.updateBarometer = function () {
    const elBaromiter = document.getElementById('keto-barometer');
    const bar = elBaromiter.querySelector('[data-js="bar"]');
    const mask = elBaromiter.querySelector('[data-js="mask"]');
    const baromiterInputs = document.querySelectorAll('[data-js="barometer-value"]');
    const objIngredients = window.recipeTools.ingredients;
    if (elBaromiter) {
      // If we don't have enough ingredients to make a useful guess
      if (baromiterInputs.length < 3) {
        mask.innerHTML = 'Insufficient data';
      } else {

        // The combined weight of the keto vs. the non-keto ingredients of this recipe
        let goodTotal = 0;
        let badTotal = 0;

        // Loop through the inputs
        for (var i = 0; i < baromiterInputs.length; i++) {
          const input = baromiterInputs[i];
          const dad = input.parentElement;
          const name = dad.querySelector('[data-js="name"]').innerHTML;
          const unit = dad.querySelector('[data-js="unit"]').innerHTML;
          if (name && unit) {
            let ingredientData = {};
            // Does this ingredient exist in ingredientData.js?
            for (var j = 0; j < objIngredients.length; j++) {
              const ingredientObj = objIngredients[j];
              if (ingredientObj.name.toLowerCase() === name.toLowerCase()) {
                ingredientData = ingredientObj;
                break;
              }
            }

            // Is this particular ingredient keto or not?
            if (ingredientData.keto === false) {
              badTotal += parseFloat(myFactory.convertToGramms(input.value,unit));
            } else {
              goodTotal += parseFloat(myFactory.convertToGramms(input.value,unit));
            }
          }
        }

        // The results are in. Time to update the barometer.
        bar.setAttribute('style','width: ' + (goodTotal / (goodTotal + badTotal) * 100) + '%;');
      }
    }
  }

  return myFactory;
}