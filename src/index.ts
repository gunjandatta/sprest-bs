import * as $ from "jquery";
import "bootstrap";
import "./styles.scss";
import * as Components from "./components";

// Set the global variable
let GD = {
    $,
    Components
};
window ? window["GD"] = GD : null;
export default GD;