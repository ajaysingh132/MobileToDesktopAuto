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
    const desktopUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
    
    // ब्राउज़र की पहचान को Windows PC में बदलें
    Object.defineProperty(navigator, 'userAgent', { get: () => desktopUA });
    Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
    Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 0 }); // टच सपोर्ट छुपाएं ताकि माउस मोड एक्टिव हो

    // 2. लेआउट सेटिंग्स (Viewport & Zoom)
    function applyDesktopSettings() {
        // व्यूपोर्ट को डेस्कटॉप चौड़ाई (1280px) पर फोर्स करें
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = "viewport";
            document.head.appendChild(viewport);
        }
        viewport.content = "width=1280, initial-scale=0.75, maximum-scale=5";

        // CSS के जरिए पेज को डेस्कटॉप जैसा फैलाएं
        if (!document.getElementById('desktop-fix-style')) {
            const style = document.createElement('style');
            style.id = 'desktop-fix-style';
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

    // तुरंत लागू करें
    applyDesktopSettings();

    // पेज लोड होने के बाद फिर से चेक करें (ताकि कोई साइट इसे बदल न सके)
    window.addEventListener('DOMContentLoaded', applyDesktopSettings);
    window.addEventListener('load', applyDesktopSettings);

})();
