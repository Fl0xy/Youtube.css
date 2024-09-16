// ==UserScript==
// @name        YT short remover
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       none
// @version     0.1
// @author      Fl0xy
// @description removes YT short from Youtube using CSS
// ==/UserScript==

let style = `

/* remove Shorts Button in Menu bar (right side) */
ytd-guide-entry-renderer:has(> a[title="Shorts"]) {
    display: none;
}

/* remove shorts in startpage, trends & abo box */
ytd-rich-section-renderer:has(div):has(ytd-rich-shelf-renderer[is-shorts]) {
    display: none;
}

/* removes shorts in after seraches */
ytd-reel-shelf-renderer {
    display: none;
}

/* channel page shorts button */
yt-tab-shape[tab-title="Shorts"] {
    display: none;
}

ytd-rich-item-renderer {
    --ytd-rich-grid-item-max-width: 325px;
    --ytd-rich-grid-item-min-width: 183,5px;
    --ytd-rich-grid-items-per-row: 6;
}
`


var styleSheet = document.createElement("style")
styleSheet.innerText = style
document.head.appendChild(styleSheet)
