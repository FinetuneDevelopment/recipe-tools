'use strict';

export default function gdprFactory() {

  let myFactory = {};

  // The GDPR cookie has three potential values:
  // 1) null:  the user has not yet made a decision - no cookies are created, but the cookie control popup appears.
  // 2) true:  the user has accepted cookies. Cookies are used and the cookie control popup does not appear.
  // 3) false: the user has rejected cookies. Cookies are not used and the cookie control popup does not appear.

  myFactory.init = function () {

    // Has the setup already run?
    if (typeof window.gdpr.choice === 'undefined') {
      // Adds (or updates) a global variable with the current state of the GDPR acceptance
      // (this code should also appear in the <head>, so it runs before the script tags appear
      // on the page)
      var gdprChoice = document.cookie.match(new RegExp('(^| )gdpr=([^;]+)'));
      window.gdpr.choice = gdprChoice ? (gdprChoice[0].split('=')[1] == 'true') : null;
    }

    // Adds the cookie control markup to the page
    let cookieControl = document.createElement('aside');
    cookieControl.setAttribute('data-js', 'cookie-choice');
    cookieControl.classList.add('gdpr');
    cookieControl.classList.add('bt-pink');
    cookieControl.classList.add('brd-all');
    cookieControl.classList.add('text-center');
    // The cookie control always needs to be in the DOM, so the user can change their mind later
    if (window.gdpr.choice !== null) {
      cookieControl.classList.add('hide');
    }
    cookieControl.innerHTML = '<p><strong>Can we use cookies, please?</strong></p><p class="flush"><button type="button" class="btn btn-secondary suck" data-js="gdpr-no">No thanks</button> <button type="button" class="btn btn-primary suck" data-js="gdpr-yes">Go on then</button></p><div class="text-right flush"><span class="bt-attach"><span class="bt-attach__child bt-attach__child-se bt-hand-reassuring-right"></span></span></div><p class="small flush">For more information on how we use this data, <a href="/privacy-policy/">visit our Privacy Policy page</a>.</p>';
    document.body.appendChild(cookieControl);

    // Attaches event handler to cookie control panel
    cookieControl.addEventListener('click', this.cookieDecision, false);

    // Button with functionality so the user can change their mind
    const btnConfig = document.querySelector('[data-js="cookie-config"]');
    if (btnConfig) {
      btnConfig.addEventListener('click', function () {cookieControl.classList.remove('hide')}, false);
    }
  },
  // The user has interacted with the cookie control panel in some way
  myFactory.cookieDecision = function (e) {
    const cookieControl = document.querySelector('[data-js="cookie-choice"]');
    const btnType = e.target.getAttribute('data-js');
    // "No thanks"
    if (btnType === 'gdpr-no') {
      cookieControl.classList.add('hide');
      myFactory.updateCookie(false);
      window.gdpr = false;
    }
    // "Go on then"
    else if (btnType === 'gdpr-yes') {
      cookieControl.classList.add('hide');
      myFactory.updateCookie(true);
      window.gdpr = true;
    }
  }
  myFactory.updateCookie = function (yesOrNo) {
    let myDate = new Date;
    // This selects a date one year in the future, short by a couple of days
    // dev.to/rossangus/a-horrible-coincidence-3fbj
    myDate.setTime(myDate.getTime()+Math.pow(9,11));
    let sameSite = '';
    const ua = window.navigator.userAgent;
    // IE might reject cookies with a SameSite paramater, but Chrome insists upon them.
    if (ua.indexOf('MSIE ') === -1 && ua.indexOf('Trident/') === -1) {
      sameSite = '; SameSite=Lax';
    }
    document.cookie = "gdpr=" + yesOrNo + ";expires=" + myDate.toGMTString() + ";path=/" + sameSite;
  }

  return myFactory;
}
