import React from 'react';

export default props => {
  return (
    <div>
      <div>filho</div>
      <button onClick={
        function (e) {
          props.clicar('Henrique', 25, true)
        }
      }>Fornecer Infos</button>
    </div>
  )
}