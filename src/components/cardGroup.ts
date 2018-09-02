import * as jQuery from "jquery";
import { Card } from "./card";
import { ICardGroup, ICardGroupProps } from "./types/cardGroup";

/**
 * Card Group
 * @property props - The button group properties.
 */
export const CardGroup = (props: ICardGroupProps): ICardGroup => {
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

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Return the card group
    let cardGroup = jQuery(el.children[0]);
    return { el };
}