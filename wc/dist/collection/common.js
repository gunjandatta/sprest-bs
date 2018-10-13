export const getProps = (el, elProps = {}) => {
    let props = {};
    let js = (el.innerHTML || "").trim();
    if (js.length > 0) {
        try {
            props = (new Function(js))();
            el.innerHTML = "";
        }
        catch (_a) {
            console.error("Error parsing the JS to get the properties.");
            console.error(js);
        }
    }
    for (let key in elProps) {
        if (typeof (props[key]) != "undefined") {
            continue;
        }
        props[key] = elProps[key];
    }
    return props;
};
