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
  // Finds all the relevent data on the page and in the ingredients JSON and does its best guess
  // at how keto this recipe is
  myFactory.updateBarometer = function () {
    const elBaromiter = document.getElementById('keto-barometer');
    if (elBaromiter) {
      const bar  = elBaromiter.querySelector('[data-js="bar"]');
      const mask = elBaromiter.querySelector('[data-js="mask"]');
      const baromiterInputs = document.querySelectorAll('[data-js="barometer-value"]');
      const objIngredients = window.recipeTools.ingredients;
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

          const elName = dad.querySelector('[data-js="name"]');
          let name = '';
          if (elName) name = elName.innerHTML;

          const elUnit = dad.querySelector('[data-js="unit"]');
          let unit = '';
          if (elUnit) unit = elUnit.innerHTML;

          if (name !== '') {
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
              badTotal  += parseFloat(myFactory.convertToGramms(input.value,unit,name));
            } else {
              goodTotal += parseFloat(myFactory.convertToGramms(input.value,unit,name));
            }
          }
        }

        // The results are in. Time to update the barometer.
        // console.log("goodTotal: " + goodTotal + " | badTotal: " + badTotal);
        bar.setAttribute('style','width: ' + (goodTotal / (goodTotal + badTotal) * 100) + '%;');
      }
    }
  },
  // Converts measurements from old-fashioned values to modern gramms
  myFactory.convertToGramms = function (value,unit,name) {
    // An Array of ingredient names which I can have a stab at converting to grams
    const discreteUnits = ['onion','onions','garlic head','garlic','garlic clove','garlic cloves','cloves garlic','egg','eggs'];
    unit = unit.toLowerCase();
    name = name.toLowerCase();
    // If this ingredient is one of the discreet units (for example "egg")
    if (discreteUnits.indexOf(name) !== -1 && !isNaN(value)) {
      switch (name) {

        case 'onion':
        case 'onions':
          if      (unit === 'small') return value * 115;
          else if (unit === 'large') return value * 285;
          // Assumed to be a medium onion
          else                       return value * 170;

        case 'garlic':
        case 'garlic head':
          return value * 47.6;

        case 'garlic clove':
        case 'garlic cloves':
        case 'cloves garlic':
          return value * 2.8;

        case 'egg':
        case 'eggs':
          if      (unit === 'small') return value * 42.5;
          else if (unit === 'large') return value * 56.7;
          // Assumed to be a medium egg
          else                       return value * 49.6;

        default:
          return 0;

      }
    }
    else if (parseFloat(value) && unit !== '' && !isNaN(value)) {
      switch (unit) {

        // Tablespoons
        case 'tbsp':
        case 'tablespoon':
        case 'tablespoons':
        case 'table spoon':
        case 'table spoons':
          return value * 15;

        // Cups
        case 'cup':
        case 'cups':
          return value * 227;

        // Ounce
        case 'oz':
        case 'ozs':
        case 'ounce':
        case 'ounces':
          return value * 28.3495;

        // Pounds
        case 'lb':
        case 'lbs':
        case 'pound':
        case 'pounds':
          return value * 453.592;

        // Ah, trick question I see
        case 'g':
        case 'gramm':
        case 'gramms':
        case 'gram':
        case 'grams':
        case 'gramme':
        case 'grammes':
          return value;

        default:
          return 0;
      }
    } else {
      return 0;
    }
  }

  return myFactory;
}