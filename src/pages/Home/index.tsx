import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../containers/Barra'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
