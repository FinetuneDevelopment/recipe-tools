'use strict';

export default function recipeFactory() {
  let myFactory = {};

  myFactory.init = function () {
    const arList         = window.recipeTools.recipes;
    const objIngredients = window.recipeTools.ingredients;
    /* A sort of lookup for the index of a recipe. Usage:
       arLookup.indexOf('recipe-id-here');
       Returns an index which will be the same for arList and arLookup. */
    let arLookup = [];
    for (var i = 0; i < arList.length; i++) arLookup[i] = arList[i].id;

    // A bunch of SVG icon strings
    const icons = {
      'dairy': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains dairy"><path d="M 16,8 C 15,8 14,9 13,9 11,9 12,7 10,8 9,9 8.6,7.8 8,8 m 8,0 c -0.2,3.1 0,14 0,14 0,1 0,1 -1,1 H 9 C 8,23 8,23 8,22 V 8 C 8,7 10,4 10,4 9,4 9,4 9,3 V 2 C 9,1 9,1 10,1 h 4 c 1,0 1,0 1,1 v 1 c 0,1 0,1 -1,1 0.3,0.5 2,3 2,4 z M 14,4 h -4" fill="none" stroke="currentColor"/></svg>',
      'meat': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains meat"><path d="m 11,13 c 2,0 5,0 8,0 -1,2 -2,3 -2,5 M 9,14 c 1,-1 1,-1 2,-1 0,1 1,4 1,5 M 3,10 v 4 l 1,1 c 1,0 2,-1 2,-2 h 2 l 1,1 v 4 M 20,6 c 0,3 0,4 -1,6 1,2 1,3 1,6 m 3,-5 V 8 C 23,7 22,6 20,6 H 9 C 8,6 6,8 5,9 L 3,10 H 1" fill="none" stroke="currentColor"/></svg>',
      'alcohol': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains alcohol"><path d="m 14,23 h 3 v -6 c -1,0 -3,-1 -3,-3 V 8 h 6 v 6 c 0,2 -2,3 -3,3 v 6 h 3 M 7,1 h 2 c 0,2 0,5 1,6 1,1 2,2 2,4 V 23 H 4 V 11 C 4,9 5,8 6,7 7,6 7,3 7,1 Z" fill="none" stroke="currentColor"/></svg>',
      'caffeine': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains caffeine"><path d="m 4,8 c -5,-1 -3,8 1,4 m 9,4 c 4,0 6,-4 6,-9 H 4 c 0,5 3,9 6,9 m -9,0 h 22 c -2,1 -5,2 -10,2 H 11 C 6,18 3,17 1,16 Z" fill="none" stroke="currentColor"/></svg>',
      'eggs': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains eggs"><path d="m 15,13 c 1,-6 5,-6 6,0 M 9,13 c 1,-6 5,-6 6,0 M 3,13 C 4,7 8,7 9,13 M 1,13 H 23 M 2,13 c 0,2 1,4 2,5 h 4 l 1,-2 1,2 h 4 l 1,-2 1,2 h 4 c 1,-1 2,-3 2,-5" fill="none" stroke="currentColor"/></svg>',
      'fish': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains fish"><path d="m 18,13 c -3,1 -5,1 -5,-1 m 7,-1.5 A 0.5,0.5 0 0 1 19.5,11 0.5,0.5 0 0 1 19,10.5 0.5,0.5 0 0 1 19.5,10 0.5,0.5 0 0 1 20,10.5 Z M 9,10 c 1,-1 3,-2 3,-4 3,0 3,1 4,2 m 7,4 C 22,20 9,16 5,12 4.5,11 4,10 2,10 c 2,1.5 1,2 -1,3 2,1 3,1 4,-1 9,-5 15,-6 18,0 z" fill="none" stroke="currentColor"/></svg>',
      'gluten': '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Gluten free" stroke="currentColor" fill="none" viewBox="0 0 24 24" width="24" height="24"><path d="M 8,5 C 7,4 4,2 2,2 2,3 4,7 5,8 M 22,22 8,8"/><path d="m 19,19 c 1,-2 0,-7 -1,-9 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 7,2 9,1 m -2,-6 c 0,-1 -1,-4 -2,-6 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 5,2 6,2 m 1,-7 c 0,-1 -1,-4 -2,-6 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 5,2 6,2 M 11,7 C 11,6 10,3 9,1 8,3 7,6 8,8 6,7 3,8 1,9 c 2,1 5,2 6,2"/></svg>',
      'lactose': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains lactose"><path d="m 12,15 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 z m 6,-3 a 2.5,2.5 0 0 1 -2.5,2.5 2.5,2.5 0 0 1 -2.5,-2.5 2.5,2.5 0 0 1 2.5,-2.5 2.5,2.5 0 0 1 2.5,2.5 M 8,11.5 A 2.5,2.5 0 0 1 5.5,14 2.5,2.5 0 0 1 3,11.5 2.5,2.5 0 0 1 5.5,9 2.5,2.5 0 0 1 8,11.5 Z M 22,8 H 3 m 19,9 v 2 H 6 C -1,19 -1,5 9,5 l 13,3 v 2 c -4,0 -4,7 0,7 z" fill="none" stroke="currentColor"/></svg>',
      'lamb': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains lamb"><path d="M 7,7.5 A 0.5,0.5 0 0 1 6.5,8 0.5,0.5 0 0 1 6,7.5 0.5,0.5 0 0 1 6.5,7 0.5,0.5 0 0 1 7,7.5 Z M 11,11 C 10,12 9.3080284,10.098628 9.5,8.5 9.6919716,6.9013718 9,6 8,6 m 5,12 -5,-1 m 12,0 c -3,-3 -4,-3 -6,0 l -3,4 m 0,-10 c 1.671949,-1.4205852 4.015423,-2.0756926 7,-2 5,0 5,8 3,11 -1,1 -4,-1 -5,-1 0,1 0,2 -2,2 H 6 C 3,21 2,17 5,15 L 6,11 C 4,14 0,13 2,9 8,-2 14,6 11,11 Z" fill="none" stroke="currentColor"/></svg>',
      'nuts': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains nuts"><path d="M 6,3 C 8,3 21,18 12,22 0,22 4,3 6,3 Z m 7,8 c 3,-3 6,-7 7,-7 0,1 -0.8,2.8 -3,7 m 2,-0.6 -1.5,4 m 2.1,1.1 1.4,0.5 c 0,1 -1,6 -7,5 M 12,9 c 3,-4 6,-6 8,-5 2,1 1,8 -0.4,11.5 L 14,13 M 7,16 C 5.6,9.7 5.6,4.9 6,3 l 3,10 m 2,-1 C 7.8,4.9 6.6,3 6,3" fill="none" stroke="currentColor"/></svg>',
      'shellfish': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains shellfish"><path d="M 10,7.5 A 0.5,0.5 0 0 1 9.5,8 0.5,0.5 0 0 1 9,7.5 0.5,0.5 0 0 1 9.5,7 0.5,0.5 0 0 1 10,7.5 Z M 10,20 8,19 5,20 7,22 9.5,21 M 10,19 8,17 5,18 6,19.6 m 10.6,-1 2.4,2.4 m -2,-8 4,-4 m -3,6 h 4.5 M 13,19 v 3 M 15,12 V 6 m -4,6 c -2,0 -2,2 0,2 M 5,8 C 0,10 0,1 5,1 H 7 M 5,8 C 1,10 1,3 5,3 H 7 M 5,6 h 10 c 10,0 10,16 0,16 h -4 c -2,0 -2,-3 0,-3 h 4 c 4,0 4,-7 0,-7 H 10 C 7,12 6,8 5,6 Z" fill="none" stroke="currentColor"/></svg>',
      'soy': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains soy"><path d="m 12,11 -2,1 v 2 l 2,1 2,-1 V 12 Z M 10,5 h 4 M 8,2 c 3,-1 5,-1 8,0 l -1,3 h -1 c 2,3 7,14 4,18 H 6 C 3,19 8,8 10,5 H 9 Z" fill="none" stroke="currentColor"/></svg>'
    }

    // Builds an array of keys from the object passed, sorted by popularity
    // "key" is the key of the Array within the object which contains the strings to count
    // e.g. objectChart(objRecipe,'shopping');
    function objectChart(obj,key) {
      // This will be a list of all the shopping items in all the recipes above, with the value being how many times they appear
      // in the recipes.
      let objPopularItems = {};
      // Loop through every recipe
      for (let i = 0; i < obj.length; i++) {
        let shoppingList = obj[i][key];
        // Loop through every shopping list
        for (let j = 0; j < shoppingList.length; j++) {
          let newItem = shoppingList[j];
          let arItems = Object.keys(objPopularItems);
          let newItemIndex = arItems.indexOf(newItem);
          // Does this ingredient exist within the Array of all ingredients?
          objPopularItems[newItem] = (newItemIndex > -1) ? objPopularItems[newItem] + 1 : 1;
        }
      }
      return objPopularItems;
    }

    // Sorts objects by the value, then returns an Array of the Keys in the order of the values, from largest to smallest
    function sortObjectEntries(obj){
      return Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
    }

    // Builds the markup for a list of all ingredients used in the recipes, sorted by popularity
    // obj - object, containing all recipes
    // criteria - a string, representing the key associated with the Array which contains a list
    // (in this example) of the ingredients required for a recipe.
    function popularIngredients(obj,criteria) {
      let sortedTags = sortObjectEntries(objectChart(obj,criteria));
      let markup = '<section aria-label="Pick three things"><h2 class="instruction-overlay">Pick three things</h2> <div data-js="ingredient-dad" class="box-grid">';
      // Built up a list of the 20 most popular criteria
      for (let i = 0; i < 20; i++) {
        const name = sortedTags[i];
        const id = name.toLowerCase().replace(/\s+/g,'-'); // "Hello There, Man" becomes "hello-there,-man"
        markup += '<p><input type="checkbox" id="' + id + '" value="' + name + '" data-js="ingredient"><label for="' + id + '"><img src="/img/ingredients/' + id + '.jpg" alt=""><span class="name">' + name + '</span></label></p>';
      }
      markup += '</div></section>';
      let tagTarget = document.querySelector('[data-js="ptt"]');
      if (tagTarget) tagTarget.innerHTML = markup;
    }

    popularIngredients(arList,'shopping');

    // Counts to see if the user has picked three ingredients, then if they have, spawns three matching recipes.
    function pttCheck() {
      let allChecks = document.querySelectorAll('[data-js="ingredient-dad"] [data-js="ingredient"]');
      let allSelected = document.querySelectorAll('[data-js="ingredient-dad"] [data-js="ingredient"]:checked');
      // User has had quite enough choices today
      if (allSelected.length >= 3) {
        // Loop through the checkboxes disabling them.
        for (let i = 0; i < allChecks.length; i++) {
          let thisCheckbox = allChecks[i];
          if (!thisCheckbox.checked) thisCheckbox.disabled = true;
        }
        let ingredientArray = [];
        for (let j = 0; j < allSelected.length; j++) {
          ingredientArray.push(allSelected[j].value);
        }
        // Build the markup out of that these list
        const recipeChart = returnChart(arList, ingredientArray, 'shopping');
        let resultMarkup = '<p class="close"><button type="button" title="Close" data-js="close" class="close">&times;</button></p>';
        // Building up the string of recipe markup
        for (let k = 0; k < 3; k++) {
          const recipeIndex = arLookup.indexOf(recipeChart[k]);
          const recipeMarkup = arList[recipeIndex];
          resultMarkup += recipeSummary(recipeMarkup);
        }
        let tagTarget = document.querySelector('[data-js="ptt-results"]');
        // Output the recipes to the page
        if (tagTarget) {
          tagTarget.innerHTML = resultMarkup;
          tagTarget.removeAttribute('hidden');
          document.querySelector('[data-js="overlay"]').removeAttribute('hidden');
        }
      } else { // Free up the checkboxes
        for (let i = 0; i < allChecks.length; i++) {
          allChecks[i].disabled = false;
        }
      }
    }

    // Just the star rating module for a given recipe ID
    function buildRating(id) {
      if (id !== null && arLookup.indexOf(id) > -1) {
        let markup = '<fieldset class="star-rating gutter-base"><legend class="sr-only">Rate this recipe</legend><strong>Rate this recipe</strong>';
        // Building out the rating 1-5
        for(let i = 5; i > 0; i--) {
          markup += '<input type="radio" name="' + id + '-ratingpop" id="' + id + '-pop-' + i + '" value="' + i + '" class="sr-only">' +
          '<label for="' + id + '-pop-' + i + '" aria-label="' + i + ' stars">&#9733;</label>'
        }
        markup += '</fieldset><p>';
        return markup;
      }
    }

    // Building the ingredient querystring, for the "edit recipe" feature
    function ingredientQuerystring(ingredients) {
      let ingedientsQuery = '';
      for (let i = 0; i < ingredients.length; i++) {
        const group = ingredients[i];
        if (i === 0) {
          if (group.name)   ingedientsQuery += '&amp;ingredient-name='   + encodeURIComponent(group.name);
          if (group.amount) ingedientsQuery += '&amp;ingredient-amount=' + encodeURIComponent(group.amount);
          if (group.unit)   ingedientsQuery += '&amp;ingredient-unit='   + encodeURIComponent(group.unit);
        } else {
          if (group.name)   ingedientsQuery += '&amp;ingredient-name-'   + (i + 1) + '=' + encodeURIComponent(group.name);
          if (group.amount) ingedientsQuery += '&amp;ingredient-amount-' + (i + 1) + '=' + encodeURIComponent(group.amount);
          if (group.unit)   ingedientsQuery += '&amp;ingredient-unit-'   + (i + 1) + '=' + encodeURIComponent(group.unit);
        }
      }
      return ingedientsQuery;
    }

    // Building out the steps querystring, for the "edit recipe" feature
    function stepsQueryString(steps) {
      let string = '';
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (i === 0) string += '&amp;step=' + encodeURIComponent(step.description);
        else string += '&amp;step-' + (i + 1) + '=' + encodeURIComponent(step.description);
      }
      return string;
    }

    // Builds out a list of ingredients, with links to other recipes featuring the same
    function buildIngredientList(shopping) {
      let markup = '';
      for (let i = 0; i < shopping.length; i++) {
        const thisItem = shopping[i];
        markup += '<a href="/recipes-featuring/?ingredient=' + thisItem + '" class="btn btn-tag">' + thisItem + '</a> ';
      }
      if (markup !== '') {
        markup = '<p><strong>See more recipes featuring:</strong><br><a href="/recipes-featuring/" class="btn btn-tag">Everything</a> ' + markup + '</p>';
      }
      return markup;
    }

    // Builds a list of all the ingredients used and returns it in JSON format
    // Used to generate the ingredients object, but then never again.
    function ingredientsJSON() {
      let arIngredients = [];
      let objIngredients = [];
      // Loop through all recipes
      for (let i = 0; i < arList.length; i++) {
        const thisRecipe = arList[i];
        // Add the ingredients from this recipe into the mast list
        let tempArray = thisRecipe.shopping.concat(arIngredients);
        // Filter out the duplicates
        tempArray = tempArray.filter(onlyUnique);
        arIngredients = tempArray;
      }
      arIngredients.sort();

      for (let i = 0; i < arIngredients.length; i++) {
        const obj = {
          'name':      arIngredients[i],
          'id':        arIngredients[i].toLowerCase().replace(/\s+/g,'-'),
          'keto':      true,
          'dairy':     false,
          'meat':      false,
          'alcohol':   false,
          'caffeine':  false,
          'eggs':      false,
          'fish':      false,
          'gluten':    false,
          'lactose':   false,
          'lamb':      false,
          'nuts':      false,
          'shellfish': false,
          'soy':       false
        };
        objIngredients.push(obj);
      }
      console.log(objIngredients);
    }

    // I needed a list of the potential units and values of ingredients, to see
    // what I was up against.
    function ingredientUnit() {
      let arIngredients = [];
      let arValues = [];
      // Loop through all recipes
      for (let i = 0; i < arList.length; i++) {
        const thisRecipe = arList[i];
        const ingredientList = thisRecipe.ingredient;
        for (let j = 0; j < ingredientList.length; j++) {
          const thisIngredient = ingredientList[j];
          const thisUnit = thisIngredient.unit;
          if (thisUnit) {
            arIngredients.push(thisUnit);
          }
          const thisAmmount = ingredientList[j].amount;
          if (thisAmmount) {
            arValues.push(thisAmmount);
          }
        }
      }
      arIngredients = arIngredients.filter(onlyUnique);
      arIngredients.sort();
      console.log(arIngredients);
      arValues = arValues.filter(onlyUnique);
      arValues.sort();
      console.log(arValues);
    }

    // Builds a list of tags for recipe themes, plus links
    function buildTagList(tags) {
      let markup = '';
      for (let i = 0; i < tags.length; i++) {
        const thisItem = tags[i];
        markup += '<a href="/recipes-featuring/?tag=' + thisItem + '" class="btn btn-tag">' + thisItem + '</a> ';
      }
      if (markup !== '') markup = '<p><strong>See more recipes tagged with:</strong><br><a href="/recipes-featuring/" class="btn btn-tag">Everything</a> ' + markup + '</p>';
      return markup;
    }

    // Builds the markup for the ingredients panel
    function ingredientsMarkup(obj,objGroup) {
      let markup = '';
      if (obj.length > 0) {
        markup += '<ul>';
        for (let i = 0; i < obj.length; i++) {
          markup += ingredientLine(obj[i]);
        }
        markup +=  '</ul>';
      }
      // Sometimes, the ingredients are split into groups
      if (typeof objGroup !== 'undefined') {
        for (let i = 0; i < objGroup.length; i++) {
          const thisGroup = objGroup[i];
          if (typeof thisGroup.name !== 'undefined') {
            markup += '<h4>' + thisGroup.name + '</h4>';
          }
          markup += '<ul>';
          for (let j = 0; j < thisGroup.ingredient.length; j++) {
            markup += ingredientLine(thisGroup.ingredient[j]);
          }
          markup += '</ul>';
        }
      }
      return markup;
    }

    // Used above, to build up a single ingredient line for the recipes
    function ingredientLine(thisIngredient) {
      let markup = '';
      const name     = thisIngredient.name;
      const formName = name.toLowerCase().replace(/\s+/g,'-');
      const unit     = thisIngredient.unit;
      const amount   = thisIngredient.amount;
      const prep     = thisIngredient.preparation;
      let knownName  = false;
      let itemIcons  = '';

      // Loop through the ingredients JSON, looking for a match for the name
      for (let j = 0; j < objIngredients.length; j ++) {
        const thisThing = objIngredients[j];
        if(thisThing.name.toLowerCase() === name.toLowerCase()) {
          knownName = true;

          // Trying to find a matching icon
          //if (!thisThing.keto) itemIcons += '';
          if (thisThing.dairy)     itemIcons += icons.dairy;
          if (thisThing.meat)      itemIcons += icons.meat;
          if (thisThing.alcohol)   itemIcons += icons.alcohol;
          if (thisThing.caffeine)  itemIcons += icons.caffeine;
          if (thisThing.eggs)      itemIcons += icons.eggs;
          if (thisThing.fish)      itemIcons += icons.fish;
          if (thisThing.gluten)    itemIcons += icons.gluten;
          if (thisThing.lactose)   itemIcons += icons.lactose;
          if (thisThing.lamb)      itemIcons += icons.lamb;
          if (thisThing.nuts)      itemIcons += icons.nuts;
          if (thisThing.shellfish) itemIcons += icons.shellfish;
          if (thisThing.soy)       itemIcons += icons.soy;
        }
      }

      // Most of the ingredient string
      let endString = '';
      if (typeof unit !== 'undefined') endString += unit + ' ';
      if (typeof name !== 'undefined') endString += name + ' ';
      if (typeof prep !== 'undefined') endString += prep + ' ';
      if (endString !== '') endString += '<span class="icon-small">' + itemIcons + '</span>';

      markup += '<li>';
      // (1) Do we have any amount for this ingredient
      // (2) Is the ingredient amount a sensible number?
      // (3) Does the name of this ingredient have a match in the ingredients JSON? (see above loop)
      // (4) Is the unit of measurement something I can convert to gramms and use in the calculation?
      if (
        typeof amount !== 'undefined' &&
        parseFloat(amount) !== NaN &&
        knownName &&
        (unit === 'cups' || unit === 'cup' || unit === 'g' || unit === 'lb' || unit === 'lbs' || unit === 'ml' || unit === 'oz' || unit === 'pound' || unit === 'pounds')
      ) {
        markup += '<input type="number" value="' + amount + '" id="ingredient-' + formName + '" name="ingredient-' + formName + '" data-js="barometer-value" class="input-short text-right"> ' +
        '<label for="ingredient-' + formName + '"> ' + endString + '</label>';
      }
      // We cannot adjust this ingredient amount
      else {
        if (typeof amount !== 'undefined') markup += amount + ' ';
        markup += endString;
      }
      markup +=  '</li>';
      return markup;
    }

    // Builds the markup for the steps panel
    function stepsMarkup(obj) {
      let markup = '';
      for (let i = 0; i < obj.length; i++) {
        const step = obj[i];
        markup += '<li>';
        if (typeof step.description !== 'undefined') markup += step.description.replace('\\n','<br>') + ' ';
        markup += '</li>';
      }
      return markup
    }

    // Builds the markup for social share links
    function shareLinks(title,url) {
      let markup = '';
      if (title && url) {
        markup += '<a href="https://twitter.com/intent/tweet?' +
          'url=' + encodeURIComponent(url) +
          '&amp;text=' + encodeURIComponent(title) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Share this recipe on Twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>' +
          '<a href="https://www.facebook.com/sharer/sharer.php' +
          'u=' + encodeURIComponent(url) +
          '&amp;title=' + encodeURIComponent(title) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Share this recipe on Facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>' +
          '<a href="https://www.linkedin.com/sharing/share-offsite/' +
          '?url=' + encodeURIComponent(url) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" aria-label="Share this recipe on LinkedIn" fill="currentColor" viewBox="0 0 24 24"><rect ry="0" y="9" x="1" height="14" width="5"/><circle r="2.5" cy="4.5" cx="3.5"/><path d="M 8,23 V 9 h 5 v 2 c 0,-2 9,-5 10,4 v 8 h -5 v -8 c 0,-4 -5,-3 -5,0 v 8 z"/></svg></a>';
      }
      return markup;
    }

    // Builds the markup for a single recipe
    function recipeMarkup(object) {
      let recipeTools = buildRating(object.id);

      // Building out the recipe tags for the querystring
      let tagsQuery = '';
      for (let i = 0; i < object.tags.length; i++) {
        tagsQuery +=  encodeURIComponent(object.tags[i]);
        if (i < (object.tags.length - 1)) tagsQuery += ', ';
      }

      const ingedientsQuery = ingredientQuerystring(object.ingredient);
      const stepsQuery      = stepsQueryString(object.step);

      // Checks for recipe notes
      let notesQuery = '';
      if (object.notes !== undefined) notesQuery = '&amp;recipe-notes=' + encodeURIComponent(object.notes);

      recipeTools += '<a href="/account/" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg> Add to favourites</a>' +
        '<a href="/account/edit-recipe/?' +
        'recipe-name=' + encodeURIComponent(object.name) +
        '&amp;recipe-description=' + encodeURIComponent(object.description) +
        '&amp;recipe-tags=' + tagsQuery +
        stepsQuery +
        ingedientsQuery +
        notesQuery +
        '" class="btn btn-secondary icon-small">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Edit"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit recipe</a>' +
        '<a href="/report-recipe/?recipe-name=' + encodeURIComponent(object.name) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Warning"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Report recipe</a>' +
        '<a href="/detail/?recipeID=' + encodeURIComponent(object.id) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="text file"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> View recipe on new page</a></p>';

      const shoppingList = buildIngredientList(object.shopping);
      const tags         = buildTagList(object.tags);
      const ingredients  = ingredientsMarkup(object.ingredient,object.ingredientGroup);
      const steps        = stepsMarkup(object.step);

      let notes = '';
      if (typeof object.notes !== 'undefined') notes = '<p>' + object.notes + '</p>';
      let forked = '';
      if (typeof object.forked !== 'undefined') forked = '<p>' + object.forked + '</p>';

      const markup = '<section class="row" aria-label="' + object.name + '">' +
        '<header class="col-md">' +
        '<h2>' + object.name + '</h2>' +
        '<p>' + object.description + '</p>' +
        '<p><img src="' + object.image + '" alt=""></p>' +
        shoppingList + tags + recipeTools +
        '</header><div class="col-md">' +
        '<section aria-label="Ingredients"><h3>Ingredients</h3>' +
        ingredients +
        '</section>' +
        '<section aria-label="Method"><h3>Method</h3><ol>' +
        steps + '</ol></section>' +
        '<footer>' + notes + forked + '</footer></div></section>';
      return markup;
    }

    // Builds the markup for a single recipe, but on a stand-alone page, rather than a modal
    function recipeDetail(object) {
      // A list of tools for the user to interact with the recipe
      let recipeTools = '';

      // Building out the recipe tags for the querystring
      let tagsQuery = '';
      for (let i = 0; i < object.tags.length; i++) {
        tagsQuery +=  encodeURIComponent(object.tags[i]);
        if (i < (object.tags.length - 1)) tagsQuery += ', ';
      }

      const ingedientsQuery = ingredientQuerystring(object.ingredient);
      const stepsQuery = stepsQueryString(object.step);

      // Checks for recipe notes
      let notesQuery = '';
      if (object.notes !== undefined) notesQuery = '&amp;recipe-notes=' + encodeURIComponent(object.notes);

      recipeTools += '<p><strong>Keto barometer</strong></p><p id="keto-barometer" class="meter"><span style="width: 30%;"></span><span></span></p>' +
      '<p><a href="/account/" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg> Add to favourites</a>' +
        '<a href="/account/edit-recipe/?' +
        'recipe-name=' + encodeURIComponent(object.name) +
        '&amp;recipe-description=' + encodeURIComponent(object.description) +
        '&amp;recipe-tags=' + tagsQuery +
        stepsQuery +
        ingedientsQuery +
        notesQuery +
        '" class="btn btn-secondary icon-small">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Edit"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit recipe</a>' +
        '<a href="/report-recipe/?recipe-name=' + encodeURIComponent(object.name) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Warning"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Report recipe</a>' +
        '<button type="button" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Email"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email me this recipe</button>' +
        '</p>' +
        '<p>' + shareLinks(object.name,document.location) + ' <strong>Share this recipe:</strong></p>' +
        buildRating(object.id);

      const shoppingList = buildIngredientList(object.shopping);
      const tags         = buildTagList(object.tags);
      const ingredients  = ingredientsMarkup(object.ingredient,object.ingredientGroup);
      const steps        = stepsMarkup(object.step);

      let notes = '';
      if (typeof object.notes !== 'undefined') notes = '<p>' + object.notes + '</p>';
      let forked = '';
      if (typeof object.forked !== 'undefined') forked = '<p>' + object.forked + '</p>';

      const markup = '<section class="container" aria-label="' + object.name + '">' +
        '<header class="row gutter-base">' +
        '<p class="col-md-8 pos-rel"><img src="' + object.image + '" class="img-fit-md" alt=""></p>' +
        '<div class="col-md-4 pad-vert-large">' +
        '<h2>' + object.name + '</h2>' +
        '<p>' + object.description + '</p>' +
        '</div>' +
        '</header>' +
        '<div class="row">' +
        '<div class="col-md-8">' +
        '<section aria-label="Ingredients"><h3>Ingredients</h3>' +
        ingredients +
        '</section>' +
        '<section aria-label="Method"><h3>Method</h3><ol>' +
        steps + '</ol></section>' +
        '<footer>' + notes + forked + '</footer>' +
        '</div>' +
        '<aside class="col-md-4">' + recipeTools + shoppingList + tags +  '</aside>' +
        '</div>' + relatedCTA(object,8) + '</section>';
      return markup;
    }

    // Builds the markup for a single recipe summary
    function recipeSummary(object) {
      // Builds the list of shopping items
      let shoppingList = '';
      if (object.shopping.length > 0) {
        for (let i = 0; i < object.shopping.length; i++) {
          let thisItem = object.shopping[i];
          shoppingList += thisItem;
          if (i !== object.shopping.length - 1) shoppingList += ', ';
          else shoppingList += '.';
        }
      }
      if (shoppingList !== '') shoppingList = '<p><strong>Requires:</strong><br>' + shoppingList + '</p>';

      let markup = '<section class="row" aria-label="' + object.name + '">' +
          '<p class="col-md"><img src="' + object.image + '" alt=""></p>' +
          '<div class="col">' +
          '<h2>' + object.name + '</h2>' +
          '<p class="lead">' + object.description + '</p>' +
          shoppingList +
          '<p><a href="/detail/?recipeID=' + object.id + '" class="btn btn-primary" title="View ' + object.name + ' recipe">View <span class="sr-only">' + object.name + '</span> recipe</a></p>' +
          '</div></section>';
      return markup;
    }

    // Compares two different Arrays and returns a score for how many items they have in common
    function arrayCompare(arr1, arr2) {
      arr1 = arr1.filter(onlyUnique);
      arr2 = arr2.filter(onlyUnique);
      let itemsInCommon = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1) itemsInCommon += 1;
      }
      return itemsInCommon;
    }

    // Used as a filter to remove duplicate values from Arrays
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // obj - A JSON object which might contain multiple Arrays within it
    // ar  - An Array, e.g. ["these","are","words"]
    // criteria - a string representing a key within an object, e.g. "test".
    // In the example above, all values associated with the key "test" would be selected from the obj and compared with the Array.
    // The function would return an Array featuring all of the strings from obj[i].test and ar in one Array, filtered to
    // remove duplication. This Array would be sorted, according to how many times these strings appeared in both objects.
    function returnChart(obj, ar, criteria) {
      let shoppingInCommon = {};
      for (let i = 0; i < obj.length; i++) {
        shoppingInCommon[obj[i].id] = arrayCompare(ar, obj[i][criteria]);
      }
      return sortObjectEntries(shoppingInCommon);
    }

    // Builds a list of the three most similar recipes to the current recipe
    function showRelated(obj,direction) {
      // An object, representing the most similar to the least similar recipes
      let chart = returnChart(arList, obj.shopping, 'shopping');
      let start = 1;
      let end = 4;
      if (direction === 'reverse') {
        chart.reverse();
        start = 0;
        end = 3;
      }
      let markup = '<p>';
      for (let i = start; i < end; i++) {
        // The index of the related recipe, in the original object
        let relatedIndex = arLookup.indexOf(chart[i]);
        markup += '<button type="button" data-show="' + chart[i] + '" class="btn btn-tag">' + arList[relatedIndex].name + '</button> ';
      }
      markup += '</p>';
      return markup;
    }

    // Returns similar recipes, the number of which is defined by a parameter.
    // These have images, rather than just links, like showRelated().
    function relatedCTA(obj,count) {
      // An object, representing the most similar to the least similar recipes
      let chart = returnChart(arList, obj.shopping, 'shopping');
      let markup = '<aside aria-label="Similar recipes" class="box-grid gutter-large"><h2>Similar recipes</h2>';
      // We count this way because the recipe which is most similar to the current recipe will always be... the current recipe.
      for (let i = 1; i < (count + 1); i++) {
        const thisRecipe = chart[i];
        // The index of the related recipe, in the original object
        const currentIndex = arLookup.indexOf(thisRecipe);
        const currentObj = arList[currentIndex];
        markup += '<p><a href="/detail/?recipeID=' + currentObj.id + '">' +
        '<img src="' + currentObj.image + '" alt="">' +
        '<span class="name">' + currentObj.name + '</span>' +
        '</a></p>';
      }
      markup += '</aside>';
      return markup;
    }

    // Showing a random recipe
    let randRecipeInt = (Math.round((arList.length - 1) * Math.random()));
    //let randObj = arList(randRecipeInt);
    showRecipe(arList[randRecipeInt].id);

    // Shows a recipe, plus related links
    function showRecipe(id) {
      var recipeObj = arList[arLookup.indexOf(id)];
      const randRecipeCard = recipeSummary(recipeObj);
      const welcomeMessage = '<h1>Recipe of the day</h1>';
      const choice = '<footer class="row"><section class="col" aria-label="Different"><h3>Different</h3>' + showRelated(recipeObj,'reverse') + '</section><section class="col" aria-label="Similar"><h3>Similar</h3>' + showRelated(recipeObj) + '</section></footer>';
      let tagTarget = document.querySelector('[data-js="app"]');
      if (tagTarget) tagTarget.innerHTML = welcomeMessage + randRecipeCard + choice;
    }

    // User is on the Recipes Featuring page
    let objRecipesFeaturing = document.querySelector('[data-js="recipes-featuring"]');
    if (objRecipesFeaturing) {
      const ingredientParam = getParameterByName('ingredient');
      const tagParam = getParameterByName('tag');
      let objResults;
      if (ingredientParam) {
        objResults = filterRecipy('shopping',ingredientParam);
      } else if (tagParam) {
        objResults = filterRecipy('tags',tagParam);
      } else {
        objResults = filterRecipy();
      }
      objRecipesFeaturing.innerHTML = recipyThumbs(objResults);
    }

    // User is on the Recipes themes page
    let objRecipeThemes = document.querySelector('[data-js="recipes-themes"]');
    if (objRecipeThemes) {
       objRecipeThemes.innerHTML = popularThemes(arList,'tags');
    }

    // User is on the recipe detail page
    let objRecipeDetail = document.querySelector('[data-js="recipes-detail"]');
    if (objRecipeDetail) {
      const id = getParameterByName('recipeID');
      // Do we have an ID? Is it valid?
      if (id !== null && arLookup.indexOf(id) > -1) {
        const objRecipe = arList[arLookup.indexOf(id)];
        objRecipeDetail.innerHTML = recipeDetail(objRecipe);
      }
      // No valid ID passed in the querystring: show thumbnails instead
      else {
        const objResults = filterRecipy();
        objRecipeDetail.innerHTML = recipyThumbs(objResults);
      }
    }

    // Builds the markup for a list of all the recipe themes, sorted by popularity
    // obj - object, containing all recipes
    // criteria - a string, representing the key associated with the Array which contains a list
    function popularThemes(obj,criteria) {
      const sortedTags = sortObjectEntries(objectChart(obj,criteria));
      let markup = '<section aria-label="Pick a theme"><h2 class="instruction-overlay">Pick a theme</h2> <div data-js="theme-dad" class="box-grid">';
      const length = sortedTags.length;
      // Sometimes, we don't have enough themes
      const limit = (length > 20) ? 20 : length;
      // Built up a list of the 20 most popular criteria
      for (let i = 0; i < limit; i++) {
        const name = sortedTags[i];
        let id = name.toLowerCase().replace(/\s+/g,'-'); // "Hello There, Man" becomes "hello-there,-man"
        markup += '<p><a href="/recipes-featuring/?tag=' + name + '" ><img src="/img/themes/' + id + '.jpg" alt=""><span class="name">' + name + '</span></a></p>';
      }
      markup += '</div></section>';
      return markup;
    }

    // Returns names and images of recipes which match an ingredient filter, or if no
    // filter is passed, returns all recipes.
    function filterRecipy(paramName,value) {
      let objResults = [];
      let tagValue = '';
      let ingredientValue = '';
      if (paramName === 'tags') tagValue = value;
      if (paramName === 'shopping') ingredientValue = value;
      // Show all recipes
      if (!paramName) {
        objResults.push({ "tag": tagValue, "ingredients": ingredientValue });
        for (let i = 0; i < arList.length; i++) {
          let thisRecipe = arList[i];
          // Building up objResults with content
          let thumb = {
            "name": thisRecipe.name,
            "image": thisRecipe.image,
            "id": thisRecipe.id
          };
          objResults.push(thumb);
        }
      } else { // Show recipes matching criteria
        objResults.push({ "tag": tagValue, "ingredients": ingredientValue });
        // Loop through all recipes, looking for a match.
        for (let i = 0; i < arList.length; i++) {
          let thisRecipe = arList[i];
          let currentArray = thisRecipe[paramName];
          // Building up objResults with content
          if (currentArray.indexOf(value) > -1) {
            let thumb = {
              "name": thisRecipe.name,
              "image": thisRecipe.image,
              "id": thisRecipe.id
            };
            objResults.push(thumb);
          }
        }
      }
      return objResults;
    }

    // Builds a list of thumbnails of recipes
    function recipyThumbs(obj) {
      let ingredientTerm = obj[0].ingredients;
      let tagTerm = obj[0].tag;
      let heading;
      // User lands with no or meaningless querystring
      if (ingredientTerm === '' && tagTerm === '') {
        heading = 'Pick a recipe';
      }
      // User has picked an ingredient with no results
      else if (obj.length < 2 && ingredientTerm !== '') {
        heading = 'No recipes feature ' + ingredientTerm + ' :(';
      }
      // Ingredient term with results
      else if (ingredientTerm !== '') {
        heading = 'Recipes featuring ' + ingredientTerm;
      }
      // User has picked a tag with no results
      else if (obj.length < 2 && tagTerm !== '') {
        heading = 'No ' + tagTerm + ' recipes';
      }
      // Tag term with results
      else {
        heading = tagTerm + ' recipes';
      }
      let markup = '<h2 class="instruction-overlay">' + heading + '</h2><div class="box-grid">';
      // Position 0 has the search terms
      for (let i = 1; i < obj.length; i++) {
        markup += '<p><button type="button" class="btn" data-view="' + obj[i].id + '"><img src="' + obj[i].image + '" alt="' + obj[i].name + '" data-view="' + obj[i].id + '"><span class="name" data-view="' + obj[i].id + '">' + obj[i].name + '</span></button></p>';
      }
      markup += '</div>';
      return markup;
    }

    // Grabbing querystring parameters
    function getParameterByName(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    // Listens for clicks on the related recipes buttons
    document.addEventListener('click', function (event) {
      const target = event.target;
      // On the shop by product page, the user has clicked on one of the related products
      if (target.getAttribute('data-show')) {
        const id = target.getAttribute('data-show');
        // Is the value of the attribute valid?
        if (arLookup.indexOf(id) > -1) {
          showRecipe(id);
        }
      }
      // The user has asked for the recipe to appear in a modal
      if (target.getAttribute('data-view')) {
        const id = target.getAttribute('data-view');
        // Is the value of the attribute valid?
        if (arLookup.indexOf(id) > -1) {
          const objRecipe = arList[arLookup.indexOf(id)];
          const target = document.querySelector('[data-js="ptt-results"]');
          if (target) {
            target.innerHTML = '<p class="close"><button type="button" title="Close" data-js="close" class="close">×</button></p>' + recipeMarkup(objRecipe);
            target.removeAttribute('hidden');
            document.querySelector('[data-js="overlay"]').removeAttribute('hidden');
          }
        }
      }
      // Close the modal
      if (
          target.getAttribute('data-js') === 'close' && document.querySelector('.modal')
          ||
          target.getAttribute('data-js') === 'overlay'
        ) {
        document.querySelector('.modal').setAttribute('hidden','true');
        document.querySelector('[data-js="overlay"]').setAttribute('hidden','true');
      }

    }, false);

    // Listens for the user influencing form elements
    document.addEventListener('change', function (event) {
      const target = event.target;
      if (target.getAttribute('data-js') === 'ingredient') pttCheck();
    }, false);
  }

  return myFactory;
}
