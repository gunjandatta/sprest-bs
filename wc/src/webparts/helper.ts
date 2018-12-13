// Method to generate the webpart element
export const generateElement = (el: HTMLElement, elId: string, isCfg: boolean = false): HTMLElement => {
    let elWebPart: HTMLElement = null;

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
}