export default function handler(req, res) {

  if(req.method === 'GET') {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id: 2,
    name: 'henrique',
    params:  JSON.stringify(req.query),
    nome: req.query.nome,
    idade: +req.query.idade
  })
}

// http://localhost:3000/api/hello?nome=Henrique&idade=25