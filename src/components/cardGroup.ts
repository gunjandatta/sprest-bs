import * as jQuery from "jquery";
import { Card } from "./card";
import { ICardGroup, ICardGroupProps } from "./types/cardGroup";

/**
 * Card Group
 * @property props - The button group properties.
 */
export const CardGroup = (props: ICardGroupProps): ICardGroup | string => {
    let html = [];

    // Set the class names
    let classNames = ["card-group"];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    html.push('<div class="' + classNames.join(' ') + '">');

    // Parse the cards
    let cards = props.cards || [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        // Add the button html
        html.push(Card(card));
    }

    // Add the closing tag
    html.push("</div>");

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Return the card group
        let cardGroup = jQuery(props.el.children[0]);
        return {
            el: cardGroup
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}