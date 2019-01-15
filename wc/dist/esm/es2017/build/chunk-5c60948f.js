import { h } from '../gd-sprest-bs.core.js';

const generateElement = (el, elId, isCfg = false) => {
    let elWebPart = null;
    if (elId && el.parentElement) {
        elWebPart = el.parentElement.querySelector("#" + elId);
        if (elWebPart == null) {
            elWebPart = document.createElement("div");
            elWebPart.id = elId;
            isCfg ? elWebPart.style.display = "none" : null;
            el.parentElement.appendChild(elWebPart);
        }
    }
    return elWebPart;
};

export { generateElement as a };
