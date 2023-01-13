# Privacyresistfingerprinting-Docs-Sheets-Fix
Fixes the blurry text on Google Docs and Sheets that exists when Privacy.resistfingerprinting is on.
The issue is caused by the spoofing of window.devicePixelRatio which is set to one regardless of its actual value when privacy.resistfingerprinting is set to true.
WARNING! To fix this issue window.devicePixelRatio is set to its real value when in the Google Doc or Sheet editor. This undermines what privacy.resistfingerprinting is attempting to do.

## Installation
1. Download the script on [Greasyfork](https://greasyfork.org/en/scripts/453863-privacy-resistfingerprinting-blurry-google-docs-sheets-fix) or [Github](https://github.com/hboyd2003/Privacyresistfingerprinting-Docs-Sheets-Fix) and install it.
2. Next we need to get your actual window.devicePixelRatio.
3. In Firefox turn off privacy.resistfingerprinting and open developer tools on any webpage.
4. In the developer tools console enter "window.devicePixelRatio" and copy the result
5. Edit the script and replace the default value with the one you copied.
6. Turn back on privacy.resistfingerprinting
