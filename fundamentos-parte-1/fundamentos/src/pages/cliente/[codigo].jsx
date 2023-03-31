import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo() {
  const router = useRouter()
  return(
    <Layout titulo="Navegação Dinâmica!">
      <span>
        <div>
          Código = {router.query.codigo}
        </div>
        {/* <div>
          Filial = {router.query.filial}
        </div> */}
      </span>
    </Layout>
  )
}