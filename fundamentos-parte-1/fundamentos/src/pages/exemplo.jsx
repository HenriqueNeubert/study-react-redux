import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes"> 
      <div>
        <h1>Exemplo</h1>
        <Cabecalho titulo="Fundamentos de Next.js and React.js"></Cabecalho>
        <Cabecalho></Cabecalho>
      </div>
    </Layout>
  )
}