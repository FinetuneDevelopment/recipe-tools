'use strict';

export default function populateFieldsFactory() {

  let myFactory = {};

  // Extracts the querystring into an object, then uses that to pre-populate any
  // pre-existing matching input elements on the page already
  myFactory.init = function () {

    // The object representing the querystring name / value pairs
    const importConfig = {};
    location.search.substr(1).split('&').forEach(
      function (item) {
        importConfig[item.split('=')[0]] = decodeURIComponent(item.split("=")[1]);
      }
    );
    const keys = Object.keys(importConfig);
    const vals = Object.values(importConfig);
    const paramSize = keys.length;

    // Is this a page where fields can be replicated by the user?
    const replicateTrigger = document.querySelectorAll('[data-add-field]');
    const triggerLength = replicateTrigger.length;

    // Do we need to replicate parts of the page in anticipation of poulating additional fields?
    if (triggerLength) {
      for (let i = 0; i < triggerLength; i ++) {
        const thisTrigger = replicateTrigger[i];
        const id = thisTrigger.getAttribute('data-add-field');
        const el = document.getElementById(id);
        let replicationCount = [];
        // Does the target element exist?
        if (el) {
          const gestalt = el.querySelector('[data-js="replicater-child"]');
          // Does the gestalt exist inside the target element?
          if (gestalt) {
            const inputs = gestalt.querySelectorAll('[id]');
            // Loop through the values of the IDs
            for (let j = 0; j < inputs.length; j ++) {
              const inputID = inputs[j].getAttribute('id');
              // Do we have a match in the querystring?
              if (keys.indexOf(inputID)) {
                let count = 1;
                // Can we increment it and still find a match?
                while (keys.indexOf(inputID + '-' + (count + 1)) > -1) {
                  count++;
                }
                replicationCount.push(count);
              };
            }
            // The number of times I can find a replication of the ID in the querystring
            const triggerCount = replicationCount.sort().reverse()[0];
            for (let j = 1; j < triggerCount; j ++) {
              // Add a new set of inputs
              thisTrigger.click();
            }
            populateContent();
          }
        }
      }
    } else { // Nothing to do: populate the existing fields on the page immediately
      populateContent();
    }

    function populateContent() {
      // Do we have a querystring?
      if (paramSize > 0) {
        // Loop through the keys of the querystring...
        for (let i = 0; i < paramSize; i ++) {
          const targetEl = document.getElementById(keys[i]);
          // If there's an element matching the name, populate it with the content
          if (targetEl) targetEl.value = vals[i];
        }
      }
    }

  }
  return myFactory;
}