import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {


  return (
    <Provider store={store}>
      App para IDBI
    </Provider>
  )
}

export default App
