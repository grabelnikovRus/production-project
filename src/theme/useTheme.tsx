import { useContext } from "react";
import { Theme, ThemeContext, THEME_KEY } from "./ThemeContext";

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    };
};
