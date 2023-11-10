import { Helper } from "gd-sprest";
import { DefaultClassic, DefaultModern } from "./defaultValues";

/**
 * Theme manager for the components
 */
export class ThemeManager {
    // Classic Theme Information
    private static _classicThemeInfo: { [key: string]: string } = DefaultClassic;
    static get ClassicThemeInfo(): { [key: string]: string } { return this._classicThemeInfo; }
    static set ClassicThemeInfo(value: { [key: string]: string }) { this._classicThemeInfo = value; }

    /**
     * Current Theme
     * Loads the modern theme from the DOM or the classic from the site collection.
     */
    private static _currentTheme: { [key: string]: string } = {};
    static get CurrentTheme(): { [key: string]: string } { return this._currentTheme; }

    // Modern Theme Information
    private static _modernThemeInfo: { [key: string]: string } = DefaultModern;
    static get ModernThemeInfo(): { [key: string]: string } { return this._modernThemeInfo; }
    static set ModernThemeInfo(value: { [key: string]: string }) { this._modernThemeInfo = value; }

    // Determines if the theme is currently inverted
    static get IsInverted(): boolean {
        // See if the properties exists
        if (typeof (this.CurrentTheme.isInverted) === "boolean") { return this.CurrentTheme.isInverted; }

        // Determine based on the white color
        let whiteValue = this.CurrentTheme.palette ? this.CurrentTheme.palette["white"] : this.CurrentTheme["white"];
        if (typeof (whiteValue) === "string") { return whiteValue.toLowerCase() == "#ffffff" ? false : true; }

        // Return false by default
        return false;
    }

    // Loads the modern theme, or the classic theme if it's not found
    static load(updateTheme: boolean = true): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the current theme
            Helper.getCurrentTheme().then(themeInfo => {
                // Set the current theme
                this._currentTheme = themeInfo;

                // See if we are applying the classic theme
                updateTheme ? this.update() : null;

                // Resolve the request
                resolve();
            }, reject);
        });
    }

    // Sets the current theme
    static setCurrentTheme(value: any, updateTheme: boolean = true) {
        // Set the theme
        this._currentTheme = value;

        // Update the theme
        updateTheme ? this.update() : null;
    }

    // Updates the theme variables
    static update(themeInfo: any = {}) {
        let root = document.querySelector(':root') as HTMLElement;

        // Get the theme information
        let palette = themeInfo.palette || this.CurrentTheme.palette || {};
        let semanticColors = themeInfo.semanticColors || this.CurrentTheme.semanticColors || {}

        // Parse the modern theme values
        for (let key in this.ModernThemeInfo) {
            // Set the value
            let value = palette[key] || semanticColors[key] ||
                themeInfo[this.ModernThemeInfo[key]] || this.CurrentTheme[this.ModernThemeInfo[key]] ||
                themeInfo[this.ClassicThemeInfo[key]] || this.CurrentTheme[this.ClassicThemeInfo[key]];

            // See if a value exists
            if (value) {
                // Set the variable
                root.style.setProperty(key, value);
            }
        }
    }
}