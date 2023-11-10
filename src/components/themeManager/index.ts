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
    private static _currentTheme: { [key: string]: string }
    static get CurrentTheme(): { [key: string]: string } { return this._currentTheme; }

    // Modern Theme Information
    private static _modernThemeInfo: { [key: string]: string } = DefaultModern;
    static get ModernThemeInfo(): { [key: string]: string } { return this._modernThemeInfo; }
    static set ModernThemeInfo(value: { [key: string]: string }) { this._modernThemeInfo = value; }

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

    // Updates the theme variables
    static update(themeInfo: { [key: string]: string } = {}) {
        let root = document.querySelector(':root') as HTMLElement;

        // Parse the modern theme values
        for (let key in this.ModernThemeInfo) {
            // Get the value
            let value = themeInfo[this.ModernThemeInfo[key]];
            if (value) {
                // Set the variable
                root.style.setProperty(key, value);
            }
            // Else, see if the current theme exists
            else if (this.CurrentTheme) {
                // See if a value exists
                value = this.CurrentTheme[this.ClassicThemeInfo[key]];
                if (value) {
                    // Set the variable
                    root.style.setProperty(key, value);
                }
            }
        }
    }
}