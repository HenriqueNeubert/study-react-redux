import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

const clientes = [
  new Cliente('Ana', 34, '1'),
  new Cliente('Jorge', 30, '2'),
  new Cliente('Henrique', 25, '3'),
  new Cliente('Julian', 17, '4'),
]

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `} >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
