import { AppRouter } from './providers/router'
import { Suspense, useEffect, type FC } from 'react'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'
import { PageLoader } from 'widgets/page-loader'

import 'shared/config/i18n/i18n' // импортировать именно так!!!!

import './styles/index.scss'

export const App: FC = () => {
  useEffect(() => {
    if (Math.random() >= 0.9) {
      console.log(1)
      throw new Error()
    }
  }, [])

  return (
    <div className='app'>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}// Внутри Suspense должен быть весь Routes
