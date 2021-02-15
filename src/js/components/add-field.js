'use strict';

export default function addFieldFactory() {
  let myFactory = {};

  myFactory.init = function () {
    let addFieldTriggers = document.querySelectorAll('[data-add-field]');
    // Adds a new field into the form
    for (let i = 0; i < addFieldTriggers.length; i++) {
      addFieldTriggers[i].addEventListener('click', function (e) {
        addField(e.target.getAttribute('data-add-field'));
      });
    }

    // This function is passed the ID of an element which (hopefully) has one or more elements with an data-js="replicater-child"
    // attribute. The function copies this nodeset, then increments any "for" or "id" attributes within it, then adds another
    // copy of this nodeset into the parent element at the bottom.
    // This may lead to duplicate IDs, and replication of existing markup errors, depending upon what is already in place.
    function addField(ID){
      const container = document.getElementById(ID);
      if (container) {
        const gestalt = container.querySelector('[data-js="replicater-child"]');
        if (gestalt) {
          const nodeCount = container.querySelectorAll('[data-js="replicater-child"]').length;
          let newNode = gestalt.cloneNode(true);
          // All tags with a "for" attribute
          let allLabels = newNode.querySelectorAll('[for]');
          // Add an incremented count onto the label's "for" attribute
          for (let i = 0; i < allLabels.length; i++) {
            allLabels[i].setAttribute('for',allLabels[i].getAttribute('for') + '-' + (nodeCount + 1));
          }
          // All elements with an ID
          let allInputs = newNode.querySelectorAll('[id]');
          // Add an incremented count onto the "id" attribute
          for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].setAttribute('id',allInputs[i].getAttribute('id') + '-' + (nodeCount + 1));
            allInputs[i].value = '';
          }
          container.append(newNode);
        }
      }
    }
  }

  return myFactory;
}