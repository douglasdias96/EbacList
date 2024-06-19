import { useSelector } from 'react-redux'
import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../Components/store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) =>
        item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefas marcadas com: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
