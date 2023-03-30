import Link from 'next/link'
import Navegador from '../components/Navegador'

function Inicio(){
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Navegador cor="red" texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo"/>
      <Navegador cor="#9400d3" texto="JSX" destino="/jsx"/>
    </div>
  )
}

export default Inicio