// ==UserScript==
// @name        YT short remover
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       none
// @version     0.1
// @author      Fl0xy
// @description removes YT short from Youtube using CSS
// ==/UserScript==

let debugStyle = `

/* remove Shorts Button in Menu bar (right side) */
ytd-guide-entry-renderer:has(> a[title="Shorts"]) {
    background: repeating-linear-gradient(
        45deg,
        #ff69b4,
        #ff69b4 10px,
        transparent 10px,
        transparent 20px
    );
}

/* remove shorts in startpage, trends & abo box */
ytd-rich-section-renderer:has(div):has(ytd-rich-shelf-renderer[is-shorts]) {
    background: repeating-linear-gradient(
        45deg,
        #ff69b4,
        #ff69b4 10px,
        transparent 10px,
        transparent 20px
    );
}

/* removes shorts in after seraches */
ytd-reel-shelf-renderer {
    background: repeating-linear-gradient(
        45deg,
        #ff69b4,
        #ff69b4 10px,
        transparent 10px,
        transparent 20px
    );
}

/* channel page shorts button */
yt-tab-shape[tab-title="Shorts"] {
    background: repeating-linear-gradient(
        45deg,
        #ff69b4,
        #ff69b4 10px,
        transparent 10px,
        transparent 20px
    );
}
`


var styleSheet = document.createElement("style")
styleSheet.innerText = debugStyle
document.head.appendChild(styleSheet)
