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
      <Navegador cor="#183028" texto="Estiloso" destino="/estiloso"/>
      <Navegador cor="#9400d3" texto="Exemplo" destino="/exemplo"/>
      <Navegador cor="#9400d3" texto="JSX" destino="/jsx"/>
      <Navegador cor="#ee1133" texto="Navegação #1" destino="/navegacao"/>
      <Navegador cor="#3c69e7" texto="Navegação #2" destino="/cliente/RS-2/1245"/>
      <Navegador cor="#005765" texto="Componente com estado" destino="/estado"/>
      <Navegador cor="#bb1133" texto="Integração API #01" destino="/integracao_1"/>
    </div>
  )
}

export default Inicio