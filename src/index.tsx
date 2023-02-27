import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/theme-providers'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { StoreProvider } from 'app/providers/store-providers'

render(
  <StoreProvider initial={{ counter: { value: 0 } }}>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)
