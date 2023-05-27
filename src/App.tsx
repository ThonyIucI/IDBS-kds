import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './pages/Home'
import { PersistGate } from 'redux-persist/integration/react'
function App() {


  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
