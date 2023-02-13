import { Routes, Route } from "react-router-dom"
import { Suspense } from "react";
import { routerConfig } from "shared/config/router-config/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Load</div>}>
            <Routes>
                
                {Object.values(routerConfig).map((el) => <Route {...el} element={<div className="wrapper">{el.element}</div>} key={el.path}/>)}  
            </Routes>
        </Suspense>
    )
}
