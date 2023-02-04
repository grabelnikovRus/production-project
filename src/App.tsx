import { Counter } from "./components/Counter"
import { Link, Routes, Route } from "react-router-dom"
import { Main } from "./page/Main"
import { AboutAsync } from "./page/About.async"
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import {classNames} from "./helpers/classNames"
import "./styles/index.scss"

export const App = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Counter />
            <Link to="/">Главаня</Link>
            <Link to="/about">О нас</Link>
            <button onClick={toggleTheme}>toggle</button>
            <Suspense fallback={<div>Load</div>}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<AboutAsync />} />  
                </Routes>
            </Suspense>
        </div>
    )
}// Внутри Suspense должен быть весь Routes