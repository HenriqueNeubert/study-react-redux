import React from 'react';
import produtos from '../../data/produtos.js';
import './TabelaProdutos.css'

export default (props) => {

  function getLinhas() 
  {    
    return produtos.map((produto, id) => {
      return (
        <tr key={produto.id} className={id % 2 == 0 ? 'Par' : 'Impar'}>
          <td>
            <strong>{produto.id} - </strong>
          </td> 
          <td>
            {produto.nome} - R$
          </td>
          <td>
            {produto.preco.toFixed(2).replace('.', ',')}
          </td>
        </tr>
      )
  })
}

  return (
    <div className='TabelaProdutos'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  );
};
