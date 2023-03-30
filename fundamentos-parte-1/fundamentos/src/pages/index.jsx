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
      <Navegador cor="blueviolet" texto="Navegação #1" destino="/navegacao"/>
      <Navegador cor="green" texto="Navegação #2" destino="/cliente/RS-2/1245"/>
      <Navegador cor="grey" texto="Componente com estado" destino="/estado"/>
    </div>
  )
}

export default Inicio