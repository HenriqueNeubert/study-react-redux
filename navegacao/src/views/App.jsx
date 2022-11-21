import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import react from "react";
import './App.css'

import { BrowserRouter } from  'react-router-dom' // essa importação mudou

const App = props => (
  <div className="App">
    <BrowserRouter>
      <Menu/>
      <Content/>
    </BrowserRouter> 
  </div>
)

export default App