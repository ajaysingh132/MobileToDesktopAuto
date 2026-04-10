// ==UserScript==
// @name         MobileToDesktopAuto - Ultra Max Power
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  ब्राउज़र को पूरी तरह डेस्कटॉप मोड में बदलें (User-Agent + Viewport)
// @author       YourName
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/आपका-यूनिक-नाम/MobileToDesktopAuto/raw/main/script.user.js
// @downloadURL  https://github.com/आपका-यूनिक-नाम/MobileToDesktopAuto/raw/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';
    const desktopUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";
    Object.defineProperty(navigator, 'userAgent', { get: () => desktopUA });
    Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });

    function applySettings() {
        let v = document.querySelector('meta[name="viewport"]');
        if (!v) { v = document.createElement('meta'); v.name = "viewport"; document.head.appendChild(v); }
        v.content = "width=1280, initial-scale=0.75";
        document.documentElement.style.minWidth = "1200px";
        document.documentElement.style.zoom = "0.85";
    }
    applySettings();
    window.addEventListener('DOMContentLoaded', applySettings);
})();
