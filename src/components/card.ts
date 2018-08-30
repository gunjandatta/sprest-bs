import * as jQuery from "jquery";
import { ButtonTypes } from "./button";
import { ICard, ICardProps } from "./types/card";
import { Nav } from "./nav";

/**
 * Card
 */
export const Card = (props: ICardProps): ICard | string => {
    // Set the class names
    let classNames = ["card"];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    let html = ['<div class="' + classNames.join(' ') + '">'];

    // See if the top image exists
    if (props.imgTop) {
        // Add the top image
        html.push([
            '<img',
            'class="card-img-top"',
            'src="' + (props.imgTop.src || "") + '"',
            'alt="' + (props.imgTop.alt || "") + '">'
        ].join(' '));
    }

    // See if the header exists
    if (props.header) {
        // See if the content exists
        if (props.header.content) {
            // Render the content
            html.push('<div class="card-header">' + props.header.content + '</div>');
        }
        // Else, see if the navigation exists
        else if (props.header.nav) {
            let navProps = props.header.nav;

            // Set the class
            navProps.className = [
                navProps.className || "",
                "card-header-tabs"
            ].join(' ');

            // Render the navigation
            html.push(Nav(navProps) as string);
        }
    }

    // Parse the body items
    let items = props.body || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the class names
        let classNames = [
            "card-body",
            item.className || ""
        ].join(' ');

        // Parse the actions
        let actions = item.actions || [];
        let buttons = [];
        for (let j = 0; j < actions.length; j++) {
            let action = actions[j];

            // Set the class name
            let className = "btn";
            switch (action.buttonType) {
                // Danger
                case ButtonTypes.Danger:
                    className += " btn-danger";
                    break;
                // Dark
                case ButtonTypes.Dark:
                    className += " btn-dark";
                    break;
                // Info
                case ButtonTypes.Info:
                    className += " btn-info";
                    break;
                // Light
                case ButtonTypes.Light:
                    className += " btn-light";
                    break;
                // Link
                case ButtonTypes.Link:
                    className += " btn-link";
                    break;
                // Primary
                case ButtonTypes.Primary:
                    className += " btn-primary";
                    break;
                // Secondary
                case ButtonTypes.Secondary:
                    className += " btn-secondary";
                    break;
                // Success
                case ButtonTypes.Success:
                    className += " btn-success";
                    break;
                // Warning
                case ButtonTypes.Warning:
                    className += " btn-warning";
                    break;
                // Default
                default:
                    className = "card-link";
                    break;
            }

            // Add the button
            buttons.push(
                '<a href="' + (action.href || "#") + '" class="' + className + '">' + action.text + '</a>'
            );
        }

        // Add the body
        html.push([
            '<div class="' + classNames + '">',
            item.title ? '<h5 class="card-title">' + item.title + '</h5>' : '',
            item.subTitle ? '<h5 class="card-subtitle"' + item.subTitle + '</h6>' : '',
            item.text ? '<p class="card-text">' + item.text + '</p>' : '',
            item.content || '',
            buttons.join(''),
            '</div>'
        ].join('\n'));
    }

    // See if the footer exists
    if (props.footer) {
        // Add the footer
        html.push('<div class="card-footer">' + props.footer + '</div>');
    }

    // See if the bottom image exists
    if (props.imgBottom) {
        // Add the bottom image
        html.push([
            '<img',
            'class="card-img-bottom"',
            'src="' + (props.imgBottom.src || "") + '"',
            'alt="' + (props.imgBottom.alt || "") + '">'
        ].join(' '));
    }

    // Set the closing tag
    html.push("</div>");

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Return the alert
        let card = jQuery(props.el.children[0]);
        return {
            dispose: () => { card.card("dispose"); },
            el: card
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}