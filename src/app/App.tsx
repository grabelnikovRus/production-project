import { AppRouter } from './providers/router'
import { Suspense, type FC } from 'react'
import { Navbar } from 'widgets/navbar'
import { useTheme } from './providers/theme-providers'
import { classNames } from 'shared/lib/classNames'
import { Sidebar } from 'widgets/sidebar'
import { PageLoader } from 'widgets/page-loader'

import 'shared/config/i18n/i18n' // импортировать именно так!!!!

import './styles/index.scss'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', theme)}>
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
