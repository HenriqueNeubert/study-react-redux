import react from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/param/noticias">Noticias</Link>
        </li>
        <li>
          <Link to="/param/videos">Videos</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/naoExiste">Não Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
