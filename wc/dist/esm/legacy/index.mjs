import { g as getProps } from './chunk-26c2e58d.js';
import { g as generateElement } from './chunk-9cc2a43a.js';
var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    // Render the accordion
    Accordion.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the accordion
        GD.Components.Accordion(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Accordion, "is", {
        get: function () { return "bs-accordion"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Accordion;
}());
var Alert = /** @class */ (function () {
    function Alert() {
    }
    // Render the alert
    Alert.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        // Render the alert
        GD.Components.Alert(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Alert, "is", {
        get: function () { return "bs-alert"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "content": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "content",
                    "reflect": false
                },
                "header": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header",
                    "reflect": false
                },
                "isDismissible": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-dismissible",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
var Badge = /** @class */ (function () {
    function Badge() {
    }
    // Render the badge
    Badge.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        // Render the badge
        GD.Components.Badge(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Badge, "is", {
        get: function () { return "bs-badge"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "content": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "content",
                    "reflect": false
                },
                "header": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header",
                    "reflect": false
                },
                "href": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "href",
                    "reflect": false
                },
                "isPill": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-pill",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    // Render the breadcrumb
    Breadcrumb.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        // Render the breadcrumb
        GD.Components.Breadcrumb(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Breadcrumb, "is", {
        get: function () { return "bs-breadcrumb"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
var Button = /** @class */ (function () {
    function Button() {
    }
    // Render the button
    Button.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            controls: this.controls,
            data: this.data,
            el: this.el,
            href: this.href,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
            isLarge: this.isLarge,
            isLink: this.isLink,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            trigger: this.trigger,
            type: this.type
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the button
        GD.Components.Button(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Button, "is", {
        get: function () { return "bs-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "controls": {
                    "type": "unknown",
                    "mutable": false,
                    "complexType": {
                        "original": "Array<string>",
                        "resolved": "string[]",
                        "references": {
                            "Array": {
                                "location": "global"
                            }
                        }
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    }
                },
                "data": {
                    "type": "any",
                    "mutable": false,
                    "complexType": {
                        "original": "any",
                        "resolved": "any",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "data",
                    "reflect": false
                },
                "href": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "href",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isBlock": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-block",
                    "reflect": false
                },
                "isDisabled": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-disabled",
                    "reflect": false
                },
                "isExpanded": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-expanded",
                    "reflect": false
                },
                "isLarge": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-large",
                    "reflect": false
                },
                "isLink": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-link",
                    "reflect": false
                },
                "isOutline": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-outline",
                    "reflect": false
                },
                "isSmall": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-small",
                    "reflect": false
                },
                "target": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "target",
                    "reflect": false
                },
                "text": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "text",
                    "reflect": false
                },
                "toggle": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "toggle",
                    "reflect": false
                },
                "trigger": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "trigger",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    // Render the button group
    ButtonGroup.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the button group
        GD.Components.ButtonGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(ButtonGroup, "is", {
        get: function () { return "bs-button-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroup, "properties", {
        get: function () {
            return {
                "buttonType": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "button-type",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isLarge": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-large",
                    "reflect": false
                },
                "isSmall": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-small",
                    "reflect": false
                },
                "isVertical": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-vertical",
                    "reflect": false
                },
                "label": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "label",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroup, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return ButtonGroup;
}());
var Card = /** @class */ (function () {
    function Card() {
    }
    // Render the card
    Card.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        // Render the card
        GD.Components.Card(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Card, "is", {
        get: function () { return "bs-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "footer": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "footer",
                    "reflect": false
                },
                "header": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header",
                    "reflect": false
                },
                "imgBottom": {
                    "type": "unknown",
                    "mutable": false,
                    "complexType": {
                        "original": "object",
                        "resolved": "object",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    }
                },
                "imgTop": {
                    "type": "unknown",
                    "mutable": false,
                    "complexType": {
                        "original": "object",
                        "resolved": "object",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    // Render the card group
    CardGroup.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        // Render the card group
        GD.Components.CardGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(CardGroup, "is", {
        get: function () { return "bs-card-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return CardGroup;
}());
var Carousel = /** @class */ (function () {
    function Carousel() {
    }
    // Render the carousel
    Carousel.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the carousel
        GD.Components.Carousel(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Carousel, "is", {
        get: function () { return "bs-carousel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "enableControls": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-controls",
                    "reflect": false
                },
                "enableCrossfade": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-crossfade",
                    "reflect": false
                },
                "enableIndicators": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-indicators",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    // Render the collapse
    Collapse.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the collapse
        GD.Components.Collapse(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Collapse, "is", {
        get: function () { return "bs-collapse"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "content": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "content",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isMulti": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-multi",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Collapse;
}());
var Dropdown = /** @class */ (function () {
    function Dropdown() {
    }
    // Render the dropdown
    Dropdown.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            setLabelToValue: this.setLabelToValue,
            type: this.type,
            value: this.value
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the dropdown
        GD.Components.Dropdown(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Dropdown, "is", {
        get: function () { return "bs-dropdown"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "dropLeft": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "drop-left",
                    "reflect": false
                },
                "dropRight": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "drop-right",
                    "reflect": false
                },
                "dropUp": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "drop-up",
                    "reflect": false
                },
                "formFl": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "form-fl",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isSplit": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-split",
                    "reflect": false
                },
                "label": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "label",
                    "reflect": false
                },
                "menuOnly": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "menu-only",
                    "reflect": false
                },
                "multi": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "multi",
                    "reflect": false
                },
                "setLabelToValue": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "set-label-to-value",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                },
                "value": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "value",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
var Form = /** @class */ (function () {
    function Form() {
    }
    // Render the form
    Form.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            el: this.el
        });
        // Render the form
        GD.Components.Form(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Form, "is", {
        get: function () { return "bs-form"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
var InputGroup = /** @class */ (function () {
    function InputGroup() {
    }
    // Render the inputGroup
    InputGroup.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
            type: this.type,
            value: this.value
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the inputGroup
        GD.Components.InputGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(InputGroup, "is", {
        get: function () { return "bs-input-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputGroup, "properties", {
        get: function () {
            return {
                "appendedLabel": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "appended-label",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "description": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "description",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isLarge": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-large",
                    "reflect": false
                },
                "isPlainText": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-plain-text",
                    "reflect": false
                },
                "isReadonly": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-readonly",
                    "reflect": false
                },
                "isSmall": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-small",
                    "reflect": false
                },
                "label": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "label",
                    "reflect": false
                },
                "placeholder": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "placeholder",
                    "reflect": false
                },
                "prependedLabel": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "prepended-label",
                    "reflect": false
                },
                "rows": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "rows",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                },
                "value": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "value",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputGroup, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return InputGroup;
}());
var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
    }
    // Render the jumbotron
    Jumbotron.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title")
        });
        // Render the jumbotron
        GD.Components.Jumbotron(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Jumbotron, "is", {
        get: function () { return "bs-jumbotron"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jumbotron, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "content": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "content",
                    "reflect": false
                },
                "isFluid": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-fluid",
                    "reflect": false
                },
                "lead": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "lead",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jumbotron, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Jumbotron;
}());
var ListGroup = /** @class */ (function () {
    function ListGroup() {
    }
    // Render the list group
    ListGroup.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            colWidth: this.colWidth,
            el: this.el,
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs
        });
        // Render the list group
        GD.Components.ListGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(ListGroup, "is", {
        get: function () { return "bs-list-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "colWidth": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "col-width",
                    "reflect": false
                },
                "enableFade": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-fade",
                    "reflect": false
                },
                "isFlush": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-flush",
                    "reflect": false
                },
                "isTabs": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-tabs",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListGroup, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return ListGroup;
}());
var Modal = /** @class */ (function () {
    function Modal() {
    }
    // Render the modal
    Modal.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            body: this.body,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title")
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the modal
        GD.Components.Modal(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Modal, "is", {
        get: function () { return "bs-modal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "properties", {
        get: function () {
            return {
                "body": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "body",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "disableFade": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "disable-fade",
                    "reflect": false
                },
                "footer": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "footer",
                    "reflect": false
                },
                "hideCloseButton": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "hide-close-button",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isCentered": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-centered",
                    "reflect": false
                },
                "isLarge": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-large",
                    "reflect": false
                },
                "isSmall": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-small",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());
var Nav = /** @class */ (function () {
    function Nav() {
    }
    // Render the navigation
    Nav.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the navigation
        GD.Components.Nav(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Nav, "is", {
        get: function () { return "bs-nav"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "enableFade": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-fade",
                    "reflect": false
                },
                "enableFill": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-fill",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "isJustified": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-justified",
                    "reflect": false
                },
                "isPills": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-pills",
                    "reflect": false
                },
                "isTabs": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-tabs",
                    "reflect": false
                },
                "isVertical": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-vertical",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Nav;
}());
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    // Render the navbar
    Navbar.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el,
            enableSearch: this.enableSearch,
            id: this.id,
            type: this.type
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the navbar
        GD.Components.Navbar(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Navbar, "is", {
        get: function () { return "bs-navbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar, "properties", {
        get: function () {
            return {
                "brand": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "brand",
                    "reflect": false
                },
                "brandUrl": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "brand-url",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "enableSearch": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "enable-search",
                    "reflect": false
                },
                "id": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "id",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Navbar;
}());
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    // Render the pagination
    Pagination.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            alignment: this.alignment,
            className: this.className,
            el: this.el,
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages
        });
        // Render the pagination
        GD.Components.Pagination(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Pagination, "is", {
        get: function () { return "bs-pagination"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "properties", {
        get: function () {
            return {
                "alignment": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "alignment",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "icon": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "icon",
                    "reflect": false
                },
                "isLarge": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-large",
                    "reflect": false
                },
                "isSmall": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-small",
                    "reflect": false
                },
                "label": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "label",
                    "reflect": false
                },
                "numberOfPages": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "number-of-pages",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
var Popover = /** @class */ (function () {
    function Popover() {
    }
    // Render the popover
    Popover.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });
        // Render the popover
        GD.Components.Popover(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Popover, "is", {
        get: function () { return "bs-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "isDismissible": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-dismissible",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Popover;
}());
var Progress = /** @class */ (function () {
    function Progress() {
    }
    // Render the progress
    Progress.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });
        // Render the progress
        GD.Components.Progress(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Progress, "is", {
        get: function () { return "bs-progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "isAnimated": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-animated",
                    "reflect": false
                },
                "isStriped": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-striped",
                    "reflect": false
                },
                "label": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "label",
                    "reflect": false
                },
                "max": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "max",
                    "reflect": false
                },
                "min": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "min",
                    "reflect": false
                },
                "size": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "size",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
var ProgressGroup = /** @class */ (function () {
    function ProgressGroup() {
    }
    // Render the progress group
    ProgressGroup.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isMultiple: this.isMultiple
        });
        // Render the progress group
        GD.Components.ProgressGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(ProgressGroup, "is", {
        get: function () { return "bs-progress-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "isMultiple": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "is-multiple",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressGroup, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return ProgressGroup;
}());
var Table = /** @class */ (function () {
    function Table() {
    }
    // Render the tooltip
    Table.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        // Render the table
        GD.Components.Table(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Table, "is", {
        get: function () { return "bs-table"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
var Toast = /** @class */ (function () {
    function Toast() {
    }
    // Render the toast
    Toast.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            bodyText: this.bodyText,
            className: this.className,
            closeButtonHidden: this.closeButtonHidden,
            closeButtonText: this.closeButtonText,
            el: this.el,
            headerImgClass: this.headerImgClass,
            headerImgSrc: this.headerImgSrc,
            headerText: this.headerText
        });
        // Render the toast
        GD.Components.Toast(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Toast, "is", {
        get: function () { return "bs-toast"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "properties", {
        get: function () {
            return {
                "bodyText": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "body-text",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "closeButtonHidden": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "close-button-hidden",
                    "reflect": false
                },
                "closeButtonText": {
                    "type": "boolean",
                    "mutable": false,
                    "complexType": {
                        "original": "boolean",
                        "resolved": "boolean",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "close-button-text",
                    "reflect": false
                },
                "headerImgClass": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header-img-class",
                    "reflect": false
                },
                "headerImgSrc": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header-img-src",
                    "reflect": false
                },
                "headerText": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "header-text",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Toast;
}());
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    // Render the tooltip
    Tooltip.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        // Render the tooltip
        GD.Components.Tooltip(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Tooltip, "is", {
        get: function () { return "bs-tooltip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Tooltip;
}());
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    // Render the toolbar
    Toolbar.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        // Render the toolbar
        GD.Components.Toolbar(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Toolbar, "is", {
        get: function () { return "bs-toolbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "properties", {
        get: function () {
            return {
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "spacing": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "spacing",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
var index = /*#__PURE__*/ Object.freeze({
    Accordion: Accordion,
    Alert: Alert,
    Badge: Badge,
    Breadcrumb: Breadcrumb,
    Button: Button,
    ButtonGroup: ButtonGroup,
    Card: Card,
    CardGroup: CardGroup,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Form: Form,
    InputGroup: InputGroup,
    Jumbotron: Jumbotron,
    ListGroup: ListGroup,
    Modal: Modal,
    Nav: Nav,
    Navbar: Navbar,
    Pagination: Pagination,
    Popover: Popover,
    Progress: Progress,
    ProgressGroup: ProgressGroup,
    Table: Table,
    Toast: Toast,
    Tooltip: Tooltip,
    Toolbar: Toolbar
});
var WebPart = /** @class */ (function () {
    function WebPart() {
    }
    // Render the webpart
    WebPart.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the webpart
        $REST.WebParts.WebPart(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WebPart, "is", {
        get: function () { return "bs-webpart"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPart, "properties", {
        get: function () {
            return {
                "cfgElementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "cfg-element-id",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "elementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "element-id",
                    "reflect": false
                },
                "wpClassName": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "wp-class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPart, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return WebPart;
}());
var WPList = /** @class */ (function () {
    function WPList() {
    }
    // Render the list webpart
    WPList.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the list webpart
        $REST.WebParts.WPList(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WPList, "is", {
        get: function () { return "bs-webpart-list"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPList, "properties", {
        get: function () {
            return {
                "camlQuery": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "caml-query",
                    "reflect": false
                },
                "cfgElementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "cfg-element-id",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "elementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "element-id",
                    "reflect": false
                },
                "wpClassName": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "wp-class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPList, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return WPList;
}());
var WPSearch = /** @class */ (function () {
    function WPSearch() {
    }
    // Render the search webpart
    WPSearch.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the search webpart
        $REST.WebParts.WPSearch(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WPSearch, "is", {
        get: function () { return "bs-webpart-search"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPSearch, "properties", {
        get: function () {
            return {
                "camlQuery": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "caml-query",
                    "reflect": false
                },
                "cfgElementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "cfg-element-id",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "elementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "element-id",
                    "reflect": false
                },
                "wpClassName": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "wp-class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPSearch, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return WPSearch;
}());
var WPTabs = /** @class */ (function () {
    function WPTabs() {
    }
    // Render the webpart tabs
    WPTabs.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            type: this.type,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the webpart
        $REST.WebParts.WPTabs(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WPTabs, "is", {
        get: function () { return "bs-webpart-tabs"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPTabs, "properties", {
        get: function () {
            return {
                "cfgElementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "cfg-element-id",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "elementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "element-id",
                    "reflect": false
                },
                "type": {
                    "type": "number",
                    "mutable": false,
                    "complexType": {
                        "original": "number",
                        "resolved": "number",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "type",
                    "reflect": false
                },
                "wpClassName": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "wp-class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPTabs, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return WPTabs;
}());
var WPTaxonomy = /** @class */ (function () {
    function WPTaxonomy() {
    }
    // Render the taxonomy webpart
    WPTaxonomy.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the webpart
        $REST.WebParts.WPTaxonomy(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WPTaxonomy, "is", {
        get: function () { return "bs-webpart-taxonomy"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPTaxonomy, "properties", {
        get: function () {
            return {
                "cfgElementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "cfg-element-id",
                    "reflect": false
                },
                "className": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "class-name",
                    "reflect": false
                },
                "elementId": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "element-id",
                    "reflect": false
                },
                "wpClassName": {
                    "type": "string",
                    "mutable": false,
                    "complexType": {
                        "original": "string",
                        "resolved": "string",
                        "references": {}
                    },
                    "required": false,
                    "optional": false,
                    "docs": {
                        "tags": [],
                        "text": ""
                    },
                    "attribute": "wp-class-name",
                    "reflect": false
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WPTaxonomy, "elementRef", {
        get: function () { return "el"; },
        enumerable: true,
        configurable: true
    });
    return WPTaxonomy;
}());
var index$1 = /*#__PURE__*/ Object.freeze({
    generateElement: generateElement,
    WebPart: WebPart,
    WPList: WPList,
    WPSearch: WPSearch,
    WPTabs: WPTabs,
    WPTaxonomy: WPTaxonomy
});
export { index as Components, index$1 as WebParts };
