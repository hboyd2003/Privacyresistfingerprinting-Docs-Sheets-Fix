// ==UserScript==
// @name         privacy.resistfingerprinting Blurry Google Docs/Sheets Fix
// @version      1.0
// @description  Fixes blurry font on Google Docs and Sheets. This issue is caused by resistfingerprinting forcing window.devicePixelRatio to be set to 1 no matter the actual value. WARNING! This overides the spoofed devicePixelRatio with the real value while in a Google Docs/Sheets document thus decreasing security.
// @author       Prismo
// @license      GPL-3.0-only
// @supportURL   https://github.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix/issues
// @downloadURL  https://raw.githubusercontent.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix/main/privacy.resistfingerprinting%20Blurry%20Google%20Docs-Sheets%20Fix.user.js
// @updateURL    https://raw.githubusercontent.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix/main/privacy.resistfingerprinting%20Blurry%20Google%20Docs-Sheets%20Fix.user.js
// @icon         https://raw.githubusercontent.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix/main/FixDocsIcon.png
// @match        *://docs.google.com/document/d*
// @match        *://docs.google.com/spreadsheets/d*
// @run-at       document-start
// @grant unsafeWindow
// ==/UserScript==

(function() {
    console.log("Set devicePixelRatio to real value");
    unsafeWindow.devicePixelRatio = 1.7647058823529411;
})();