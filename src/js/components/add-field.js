'use strict';

export default function addFieldFactory() {
  let myFactory = {};

  // This fixes the target="_blank" vunribility. Sorry for the annoying filename.
  myFactory.init = function () {
    let addFieldTrigger = document.querySelector('[data-add-field]');
    // Adds a new field into the form
    addFieldTrigger.addEventListener('click', function (e) {
      addField(e.target.getAttribute('data-add-field'));
    });

    // This function is passed the ID of an element which has one or more input elements inside it.
    // The function adds another one onto the bottom, respecting the numbering which is already in place.
    // It makes the following assumptions:
    // (1) The first input element to appear within the element is the "gestalt"
    // (2) The other input elements have already been added following the original pattern
    // This means that it is possible for this to add input elements with the same ID as one which is already on the page.
    function addField(ID){
      const container = document.getElementById(ID);
      if (container) {
        const gestalt = container.querySelector('input:first-child');
        if (gestalt) {
          console.log("Yup");
        }
      }
    }

    // Adds an input element and a select box, when the user clicks on "add field"
    /*function addField(name, datatype) {
      let newLabels = document.getElementById('new-labels');
      if (!name) name = '';
      let stringSelected = '';
      let booleanSelected = '';
      let moneySelected = '';
      let numberSelected = '';
      switch (datatype) {
        case 'string':
          stringSelected = ' selected';
          break;
        case 'money':
          moneySelected = ' selected';
          break;
        case 'boolean':
          booleanSelected = ' selected';
          break;
        case 'number':
          numberSelected = ' selected';
          break;
      }
      if (newLabels) {
        let count = document.querySelectorAll('[data-js="new-field"]').length + 1;
        let fieldMarkup = '<legend>New metafield ' + count + '</legend>' +
          '<p><label for="newmeta' + count + '">Name your new metafield</label>' +
          '<input type="text" id="newmeta' + count + '" placeholder="Name your new metafield" pattern="[A-Za-z_-]+" value="' + name + '" data-js="new-field"> ' +
          '<label for="type' + count + '">Data type</label> ' +
          '<select id="type' + count + '">' +
          '<option value="boolean"' + booleanSelected + '>Boolean</option>' +
          '<option value="string"' + stringSelected + '>String</option>' +
          '<option value="money"' + moneySelected + '>Money</option>' +
          '<option value="number"' + numberSelected + '>Number</option>' +
          '</select></p>';
        let newField = document.createElement('fieldset');
        newField.innerHTML = fieldMarkup;
        newLabels.appendChild(newField);
      }
    }*/
  }

  return myFactory;
}