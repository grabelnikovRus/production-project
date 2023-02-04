import { FC, useMemo, useState } from "react";
import { ThemeContext, Theme, THEME_KEY } from "../lib/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT)
// в самом провайдере уже задаем дефолтное значение
    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
};
