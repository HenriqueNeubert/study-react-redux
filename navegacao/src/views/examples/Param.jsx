import react from "react";
import { useParams } from "react-router-dom";

const Param = (props) => {
  const { param } = useParams();
  return(
    <div className="Param">
      <h1>{param}</h1>
      <p>Parametro...{param}</p>
    </div>
  );
};

export default Param;
