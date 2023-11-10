/**
 * Theme Manager
 */
export const ThemeManager: {
    // Classic Theme
    get ClassicTheme(): { [key: string]: string };

    // Default Classic Theme Values
    get ClassicThemeInfo(): { [key: string]: string }
    set ClassicThemeInfo(value: { [key: string]: string });

    // Default Modern Theme Values
    get ModernThemeInfo(): { [key: string]: string }
    set ModernThemeInfo(value: { [key: string]: string });

    // Loads the classic theme
    loadClassic(updateTheme?: boolean): PromiseLike<void>;

    // Updates the sass variables for this framework
    updateTheme: (themeInfo?: { [key: string]: string }) => void;
}