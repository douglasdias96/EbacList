import { Provider } from 'react-redux'
import BarraLateral from './containers/Barra'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './Styles'
import store from './Components/store/index'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
