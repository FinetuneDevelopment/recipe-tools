'use strict';

export default function blockScroll() {

  let myFactory = {};

  // Turns any arbitrary element into a scrolling element, as long as it has the following markup:
  // <div class="block-scroll" data-js="block-scroll">
  //  <div class="block-scroll__child" data-js="block-scroll-item">Scroll item</div>
  //  <div class="block-scroll__child" data-js="block-scroll-item">Scroll item</div>
  //  ...
  // </div>
  // Comes in two flavours, .block-scroll__child (fixed width) and
  // .block-scroll__child-wide (always 100% of the width of the parent)
  myFactory.init = function () {
    let scrollSet = document.querySelectorAll('[data-js="block-scroll"]');

    // Do we have owt to do?
    if (scrollSet.length) {
      // Might need to do this more than once.
      for (let i = 0; i < scrollSet.length; i++) {
        // Tab scroll controls
        let scrollControl = document.createElement('p');
        let currentScroll = scrollSet[i];

        // IE, you encouragable scamp!
        scrollControl.classList.add('scroll-control');
        scrollControl.classList.add('hidden');
        scrollControl.setAttribute('data-js', 'scroll-control');

        scrollControl.innerHTML = '<button class="icon-large brd-all bt-white" type="button" data-js="previous" title="Scroll left"><span class="shape sh-arrow-left" aria-label="Left"></span></button> <button class="icon-large brd-all bt-white" type="button" data-js="next" title="Scroll right"><span class="shape sh-arrow-right" aria-label="Right"></span></button>';
        // Insert the controls before the tabs
        currentScroll.insertAdjacentElement('beforebegin', scrollControl);
        // Add an attribute, so CSS can hide the scrollbar
        currentScroll.setAttribute('data-active', 'true');
        // Marks the element, so the pollyfill will work (Safari and Edge)
        currentScroll.style.scrollBehavior = 'smooth';

        let btnPrevious = currentScroll.previousElementSibling.querySelector('[data-js="previous"]');
        let btnNext = currentScroll.previousElementSibling.querySelector('[data-js="next"]');

        // Set up click events
        btnPrevious.addEventListener('click', this.previousItem, false);
        btnNext.addEventListener('click', this.nextItem, false);
      }
      window.addEventListener('resize', this.scrollCheck);
      this.scrollCheck();
    }
  },
    // This function searches the DOM for Block Scrolls and shows or hides the
    // scroll buttons, as required.
    myFactory.scrollCheck = function () {
      let scrollSet = document.querySelectorAll('[data-js="block-scroll"]');

      if (scrollSet.length) {
        // Go through each matching set of scrollable items
        for (let i = 0; i < scrollSet.length; i++) {
          let currentScroll = scrollSet[i];
          let scrollNav = currentScroll.previousElementSibling;

          // If the element has a scroll bar
          if ((currentScroll.scrollWidth > currentScroll.clientWidth)) {
            scrollNav.classList.remove('hidden');
          } else {
            scrollNav.classList.add('hidden');
          }
          // Snaps whatever item is closes to the edge of the scroll viewport
          // (this is more of an issue on resize than load)
          myFactory.alignItem(currentScroll);
        }
      }
    },
    // User has clicked on the (<-) button
    myFactory.previousItem = function (e) {
      let scrollParent = e.target.closest('[data-js="scroll-control"]').nextElementSibling;
      let blockScrollItems = scrollParent.querySelectorAll('[data-js="block-scroll-item"]');
      let arScrollpoints = [];

      // Builds up an array of the snap points of the tab navigation, from left to right.
      for (let i = 0; i < blockScrollItems.length; i++) {
        arScrollpoints[i] = (blockScrollItems[i].offsetLeft);
      }
      // Works out which snap point we're currently closest to, working from the end back.
      for (let i = (arScrollpoints.length - 1); i >= 0; i--) {
        // If it only needs to scroll a tiny amount, then skip the current point and move onto the next one.
        // This happens if the user clicks the button during the animation and helps to make the scroll feel
        // less laggy.
        if ((i > 0) && (arScrollpoints[i] - scrollParent.scrollLeft) < 10) {
          scrollParent.scrollLeft = arScrollpoints[i - 1];
          break;
        } else if (arScrollpoints[i] < scrollParent.scrollLeft) {
          scrollParent.scrollLeft = arScrollpoints[i];
          break;
        }
      }
    },
    // User has clicked on the (->) button
    myFactory.nextItem = function (e) {
      let scrollParent = e.target.closest('[data-js="scroll-control"]').nextElementSibling;
      let blockScrollItems = scrollParent.querySelectorAll('[data-js="block-scroll-item"]');
      let arScrollpoints = [];

      // Builds up an array of the snap points of the tab navigation, from left to right.
      for (let i = 0; i < blockScrollItems.length; i++) {
        arScrollpoints[i] = (blockScrollItems[i].offsetLeft);
      }

      // Works out which snap point we're currently at.
      for (let i = 0; i < arScrollpoints.length; i++) {
        if (arScrollpoints[i] > scrollParent.scrollLeft) {
          // If it only needs to scroll a tiny amount, then skip the current point and move onto the next one.
          // This happens if the user clicks the button during the animation and helps to make the scroll feel
          // less laggy.
          if (i < arScrollpoints.length && (arScrollpoints[i] - scrollParent.scrollLeft) < 10) {
            scrollParent.scrollLeft = arScrollpoints[(i + 1)];
            break;
          } else if (arScrollpoints[i] > scrollParent.scrollLeft) {
            scrollParent.scrollLeft = arScrollpoints[i];
            break;
          }
        }
      }
    },
    // Aligns the current scroll item so it is hard against the left hand edge of the scroll viewport
    myFactory.alignItem = function (scrollParent) {
      let blockScrollItems = scrollParent.querySelectorAll('[data-js="block-scroll-item"]');
      let dadWidth = scrollParent.clientWidth;
      let gap = scrollParent.scrollLeft % dadWidth;
      let arScrollpoints = [];

      // Builds up an array of the snap points of the scroll items, from left to right.
      for (let i = 0; i < blockScrollItems.length; i++) {
        arScrollpoints[i] = blockScrollItems[i].offsetLeft;
      }

      for (let i = 0; i < arScrollpoints.length; i++) {
        // Do we need to scroll a wee bit?
        if (gap > 0 && scrollParent.scrollLeft < arScrollpoints[i]) {
          // Do we need to scroll left?
          if (gap < dadWidth / 2) {
            scrollParent.scrollLeft = arScrollpoints[i];
          }
          // What if we want to scroll right, but there's no more right to scroll to?
          else if (i === arScrollpoints.length) {
            scrollParent.scrollLeft = arScrollpoints[i];
          } else {
            scrollParent.scrollLeft = arScrollpoints[i + 1];
          }
          break;
        }
      }
    }
  return myFactory;
}