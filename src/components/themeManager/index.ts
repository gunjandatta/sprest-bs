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

    // Classic Theme
    private static _classicTheme: { [key: string]: string }
    static get ClassicTheme(): { [key: string]: string } { return this._classicTheme; }

    // Modern Theme Information
    private static _modernThemeInfo: { [key: string]: string } = DefaultModern;
    static get ModernThemeInfo(): { [key: string]: string } { return this._modernThemeInfo; }
    static set ModernThemeInfo(value: { [key: string]: string }) { this._modernThemeInfo = value; }

    // Loads the classic theme and optionally applies it
    static loadClassic(updateTheme: boolean = true): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the current theme
            Helper.getCurrentTheme().then(themeInfo => {
                // Set the classic theme
                this._classicTheme = themeInfo;

                // See if we are applying the classic theme
                this.update();

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
            // Else, see if the classic theme exists
            else if (this.ClassicTheme) {
                // See if a value exists
                value = this.ClassicTheme[this.ClassicThemeInfo[key]];
                if (value) {
                    // Set the variable
                    root.style.setProperty(key, value);
                }
            }
        }
    }
}