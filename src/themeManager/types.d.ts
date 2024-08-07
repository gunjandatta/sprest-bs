/**
 * Theme Manager
 */
export const ThemeManager: {
    // Current Theme
    get CurrentTheme(): { [key: string]: string };

    // Default Classic Theme Values
    get ClassicThemeInfo(): { [key: string]: string }
    set ClassicThemeInfo(value: { [key: string]: string });

    // Flag to determine if the theme is currently inverted
    get IsInverted(): boolean;

    // Default Modern Theme Values
    get ModernThemeInfo(): { [key: string]: string }
    set ModernThemeInfo(value: { [key: string]: string });

    // Loads the modern theme, or the classic theme if it's not found
    load(updateTheme?: boolean): PromiseLike<void>;

    // Sets the current theme
    setCurrentTheme: (value: any, updateTheme?: boolean) => void;

    // Updates the sass variables for this framework
    update: (themeInfo?: any) => void;
}