// ==UserScript==
// @name         privacy.resistfingerprinting Blurry Google Docs/Sheets Fix
// @version      1.0
// @supportURL   https://github.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix/issues
// @description  Fixes blurry font on Google Docs and Sheets. This issue is caused by resistfingerprinting forcing window.devicePixelRatio to be set to 1 no matter the actual value. WARNING! This overides the spoofed devicePixelRatio with the real value while in a Google Docs/Sheets document thus decreasing security.
// @author       Prismo
// @license      GPL-3.0-only
// @match        *://docs.google.com/document/d*
// @match        *://docs.google.com/spreadsheets/d*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @run-at       document-start
// @grant unsafeWindow
// ==/UserScript==

(function() {
    console.log("Set devicePixelRatio to real value");
    unsafeWindow.devicePixelRatio = 1.7647058823529411;
})();