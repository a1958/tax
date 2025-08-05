// ==UserScript==
// @name         autotax
// @namespace    http://tampermonkey.net/
// @version      1.25.8.6
// @description  try it!
// @author       You
// @match        https://*.shanghai.chinatax.gov.cn:8443/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chinatax.gov.cn
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/a1958/tax/refs/heads/main/autotax.meta.js
// @downloadURL  https://raw.githubusercontent.com/a1958/tax/refs/heads/main/autotax.js
// ==/UserScript==