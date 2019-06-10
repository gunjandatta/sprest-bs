// Method to get properties
export const getProps = (el, elProps = {}) => {
    let props = {};
    // Detect the JS for returning the properties
    let js = (el.innerHTML || "").trim();
    if (js.length > 0) {
        try {
            // Try to set the properties
            props = (new Function(js))();
            // Clear the inner html
            el.innerHTML = "";
        }
        catch (_a) {
            // Log
            console.error("Error parsing the JS to get the properties.");
            console.error(js);
        }
    }
    // Parse the element properties
    for (let key in elProps) {
        // See if a property is already defined
        if (props[key] != null) {
            continue;
        }
        // Set the property
        props[key] = elProps[key];
    }
    // Return the properties
    return props;
};
