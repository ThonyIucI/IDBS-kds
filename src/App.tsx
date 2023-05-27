import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './pages/Home'
function App() {


  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
       <Home/>
      </Provider>
    </ThemeProvider>
  )
}

export default App
