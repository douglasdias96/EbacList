import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../Components/store'
import { alteraTermo } from '../../Components/store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.FiltroBusca
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluidas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          <FiltroCard legenda="todas" contador={10} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral