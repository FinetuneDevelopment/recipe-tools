'use strict';

export default function scrollFactory() {
  let myFactory = {};

  myFactory.init = function () {
    let timeout = false;

    window.onscroll = function () {
      if (!timeout) {
        timeout = setTimeout(function () {
          clearTimeout(timeout);
          timeout = false;
          setTimeout(function() {document.body.classList.remove('scrolling')}, 1000);
        }, 300);
      } else {
        document.body.classList.add('scrolling');
      }
    };
  }

  return myFactory;
}
