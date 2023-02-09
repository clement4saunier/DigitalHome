import { createSignal, createContext, useContext, createMemo } from "solid-js";

const ThemeContext = createContext();

export function ThemeProvider(props) {
    const themes = ["blockchain", "web", "videogame"];
    const [themeIndex, setThemeIndex] = createSignal(0);
    const theme = createMemo(() => themes[themeIndex()]);

    function cycleTheme() {
        let nextIndex = themeIndex() + 1;

        if (nextIndex >= themes.length) nextIndex = 0;
        setThemeIndex(nextIndex);
    }

    function setTheme(i) {
        if (i >= themes.length) i = 0;
        setThemeIndex(i);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme() { return useContext(ThemeContext); }