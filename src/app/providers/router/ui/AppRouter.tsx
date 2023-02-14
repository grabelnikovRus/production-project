import { Routes, Route } from 'react-router-dom'
import { Suspense, type FC } from 'react'
import { routerConfig } from 'shared/config/router-config/routerConfig'
import { Loader } from 'shared/ui'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {Object.values(routerConfig).map((el) => <Route {...el} element={<div className="wrapper">{el.element}</div>} key={el.path}/>)}
      </Routes>
    </Suspense>
  )
}
