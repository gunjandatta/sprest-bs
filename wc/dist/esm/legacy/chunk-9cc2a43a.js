// Method to generate the webpart element
var generateElement = function (el, elId, isCfg) {
    if (isCfg === void 0) { isCfg = false; }
    var elWebPart = null;
    // Ensure the id exists
    if (elId && el.parentElement) {
        // Find the element
        elWebPart = el.parentElement.querySelector("#" + elId);
        // Ensure the element exists
        if (elWebPart == null) {
            // Create the element
            elWebPart = document.createElement("div");
            elWebPart.id = elId;
            isCfg ? elWebPart.style.display = "none" : null;
            el.parentElement.appendChild(elWebPart);
        }
    }
    return elWebPart;
};
export { generateElement as g };
