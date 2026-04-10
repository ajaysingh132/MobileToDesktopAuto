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
// ==UserScript==
// @name         MobileToDesktopAuto - Ultra Max Power
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  ब्राउज़र को पूरी तरह डेस्कटॉप मोड में बदलें (User-Agent + Viewport + Zoom)
// @author       ajaysingh132
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/ajaysingh132/MobileToDesktopAuto/main/script.user.js
// @downloadURL  https://raw.githubusercontent.com/ajaysingh132/MobileToDesktopAuto/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 1. डेस्कटॉप पहचान (User-Agent Spoofing)
    const desktopUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";
    
    // पहचान बदलने के लिए एडवांस्ड सेटिंग्स
    Object.defineProperty(navigator, 'userAgent', { get: () => desktopUA });
    Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
    Object.defineProperty(navigator, 'appVersion', { get: () => desktopUA });
    Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 0 }); // टच सपोर्ट छुपाएं

    // 2. लेआउट सेटिंग्स (Viewport & CSS)
    function applySettings() {
        // व्यूपोर्ट को डेस्कटॉप चौड़ाई पर सेट करें
        let v = document.querySelector('meta[name="viewport"]');
        if (!v) {
            v = document.createElement('meta');
            v.name = "viewport";
            document.head.appendChild(v);
        }
        v.content = "width=1280, initial-scale=0.75, maximum-scale=5";

        // CSS के जरिए डेस्कटॉप व्यू फोर्स करें
        const styleId = 'desktop-mode-fix';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                html {
                    min-width: 1200px !important;
                    zoom: 0.85 !important;
                    overflow-x: auto !important;
                }
                body {
                    min-width: 1200px !important;
                }
            `;
            document.documentElement.appendChild(style);
        }
    }

    // तुरंत रन करें
    applySettings();

    // पेज लोड होने के दौरान और बाद में भी चेक करें
    window.addEventListener('DOMContentLoaded', applySettings);
    window.addEventListener('load', applySettings);

})();
