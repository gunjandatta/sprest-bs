/**
 * Theme Manager
 */
export const ThemeManager: {
    // Current Theme
    get CurrentTheme(): { [key: string]: string };

    // Default Classic Theme Values
    get ClassicThemeInfo(): { [key: string]: string }
    set ClassicThemeInfo(value: { [key: string]: string });

    // Default Modern Theme Values
    get ModernThemeInfo(): { [key: string]: string }
    set ModernThemeInfo(value: { [key: string]: string });

    // Loads the modern theme, or the classic theme if it's not found
    load(updateTheme?: boolean): PromiseLike<void>;

    // Updates the sass variables for this framework
    update: (themeInfo?: { [key: string]: string }) => void;
}