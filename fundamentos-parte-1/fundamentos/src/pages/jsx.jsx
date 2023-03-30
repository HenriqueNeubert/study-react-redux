import Layout from '../components/Layout'

export default function Jsx() {
  const a = 4
  const b = 3
  const titulo = "JSX-conceito"
  const objeto = {nome: "Henrique", idade: 25}
  function subtitulo(){
    return <h2>Este é o subtitulo</h2>
  }
  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        <h1>{titulo.toLocaleUpperCase()}</h1>
        {subtitulo()}
        {a * b}
        <p>{JSON.stringify(objeto)}</p>
      </div>
    </Layout>
  )
}