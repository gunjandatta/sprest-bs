// Generates the html for an icon
export const generateIcon = (svg: string, height: number = 32, width: number = 32) => {
	// Get the icon element
	let elDiv = document.createElement("div");
	elDiv.innerHTML = svg;
	let icon = elDiv.firstChild as HTMLElement;
	if (icon) {
	    // Set the height/width
	    icon.setAttribute("height", (height ? height : 32).toString());
	    icon.setAttribute("width", (width ? width : 32).toString());

	    // Update the styling
	    icon.style.pointerEvents = "none";

	    // Support for IE
	    icon.setAttribute("focusable", "false");
	}

	// Return the icon
	return icon;
}
