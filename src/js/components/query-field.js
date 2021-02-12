'use strict';

export default function queryFieldFactory() {
  let myFactory = {};

  // Markup:
  // <input type="text" data-querystring="example">
  // URL:
  // ...com?example=This is example text
  // On page load, "This is example text" will automatically become the value of the data-querystring element
  myFactory.init = function () {
    // All matching inputs
    const queryFields = document.querySelectorAll('[data-querystring]');
    for (let i = 0; i < queryFields.length; i++) {
      const thisInput = queryFields[i];
      const queryTarget = thisInput.getAttribute('data-querystring');
      const queryValue = getParameterByName(queryTarget);
      // Do we have a matching querystring?
      if(queryValue !== null) thisInput.value = decodeURIComponent(queryValue);
    }

    // Grabbing querystring parameters
    function getParameterByName(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
  }

  return myFactory;
}
