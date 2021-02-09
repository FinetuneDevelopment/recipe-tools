function Dialog(dialogEl, overlayEl) {

  this.dialogEl = dialogEl;
  this.overlayEl = overlayEl;
  this.focusedElBeforeOpen;

  let focusableEls = this.dialogEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
  this.focusableEls = Array.prototype.slice.call(focusableEls);

  this.firstFocusableEl = this.focusableEls[0];
  this.lastFocusableEl = this.focusableEls[this.focusableEls.length - 1];

  this.close(); // Reset
}

Dialog.prototype.open = function () {

  let Dialog = this;

  this.dialogEl.removeAttribute('aria-hidden');
  this.overlayEl.removeAttribute('aria-hidden');

  this.focusedElBeforeOpen = document.activeElement;

  this.dialogEl.addEventListener('keydown', function (e) {
    Dialog._handleKeyDown(e);
  });

  this.overlayEl.addEventListener('click', function () {
    Dialog.close();
  });

  this.firstFocusableEl.focus();
};

Dialog.prototype.close = function () {

  this.dialogEl.setAttribute('aria-hidden', true);
  this.overlayEl.setAttribute('aria-hidden', true);

  if (this.focusedElBeforeOpen) {
    this.focusedElBeforeOpen.focus();
  }
};

Dialog.prototype._handleKeyDown = function (e) {

  let Dialog = this;
  let KEY_TAB = 9;
  let KEY_ESC = 27;

  function handleBackwardTab() {
    if (document.activeElement === Dialog.firstFocusableEl) {
      e.preventDefault();
      Dialog.lastFocusableEl.focus();
    }
  }
  function handleForwardTab() {
    if (document.activeElement === Dialog.lastFocusableEl) {
      e.preventDefault();
      Dialog.firstFocusableEl.focus();
    }
  }

  switch (e.keyCode) {
    case KEY_TAB:
      if (Dialog.focusableEls.length === 1) {
        e.preventDefault();
        break;
      }
      if (e.shiftKey) {
        handleBackwardTab();
      } else {
        handleForwardTab();
      }
      break;
    case KEY_ESC:
      Dialog.close();
      break;
    default:
      break;
  }
};

Dialog.prototype.addEventListeners = function (openDialogSel, closeDialogSel) {

  let Dialog = this;

  let openDialogEls = document.querySelectorAll(openDialogSel);
  for (let i = 0; i < openDialogEls.length; i++) {
    openDialogEls[i].addEventListener('click', function (e) {
      Dialog.open();
      e.preventDefault();
    });
  }

  let closeDialogEls = document.querySelectorAll(closeDialogSel);
  for (let i = 0; i < closeDialogEls.length; i++) {
    closeDialogEls[i].addEventListener('click', function () {
      Dialog.close();
    });
  }
};

let navDialogEl = document.querySelector('.dialog');
let dialogOverlay = document.querySelector('.dialog-overlay');
let btnOpen = document.querySelector('.open-dialog');
let btnClose = document.querySelector('.close-dialog');

if (navDialogEl && dialogOverlay && btnOpen && btnClose) {
  let myDialog = new Dialog(navDialogEl, dialogOverlay);
  myDialog.addEventListeners('.open-dialog', '.close-dialog');
}
