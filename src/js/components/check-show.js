'use strict';

export default function addCheckShowFactory() {
  let myFactory = {};

  // Markup:
  // <input type="checkbox" data-check-show="my-id">
  // or
  // <input type="radio" data-check-show="my-id">
  // Target:
  // <div id="my-id" hidden></div>
  // If the user checks the checkbox or radio button, the element with the matching ID will be
  // shown or hidden. Note this has been done with JavaScript rather than CSS so the markup
  // can be more flexible.
  myFactory.init = function () {
    let addCheckTriggers = document.querySelectorAll('[data-check-show]');
    for (let i = 0; i < addCheckTriggers.length; i++) {
      addCheckTriggers[i].addEventListener('change', function (e) {
        const box = e.target;
        const targetID = box.getAttribute('data-check-show');
        toggleTarget(box,targetID);
      });
    }

    // Toggles the target, depending on the state of the checkbox
    function toggleTarget(objBox,id) {
      let target = document.getElementById(id);
      if (target) {
        if (objBox.checked) target.removeAttribute('hidden');
        else if (!objBox.checked) target.setAttribute('hidden','true');
      }
    }
  }

  return myFactory;
}
