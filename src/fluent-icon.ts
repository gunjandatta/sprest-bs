/**
 * Fluent Icon
 * This method will render the icon element for Office Fluent UI icons. This will only work on modern pages.
 * @param iconName - The icon name to render.
 */
export function FluentIcon(iconName: string): HTMLElement {
    // Create the icon and set the class name
    let elIcon = document.createElement("i");
    elIcon.classList.add("ms-icon--" + iconName);
    elIcon.setAttribute("aria-hidden", "true");
    elIcon.setAttribute("data-icon-name", iconName);
    elIcon.setAttribute("role", "presentation");
    elIcon.setAttribute("tabindex", "-1");

    // Return the element
    return elIcon;
}
