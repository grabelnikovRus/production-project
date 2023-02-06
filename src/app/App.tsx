import { Link, Routes, Route } from "react-router-dom"
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme-providers";
import { classNames } from "shared/lib/classNames"
import "./styles/index.scss"

export const App = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Link to="/">Главаня</Link>
            <Link to="/about">О нас</Link>
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter />
        </div>
    )
}// Внутри Suspense должен быть весь Routes
