import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../Styles'
import { FiltroBusca } from '../../Styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../Utils/enums/tarefas'
import { cadastrar } from '../../Components/store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <FiltroBusca
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <FiltroBusca
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa"
        />
        <Opcoes>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />

              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit"> Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
