import React from "react";
import { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,

  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "number_add1":
      return { ...state, number: state.number + 1 };
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "numberMulti7":
      return { ...state, number: state.number * 7 };
    case "numberDiv25":
      return { ...state, number: state.number / 25 };
    case "numberInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
    case "numberAleatorio":
      return { ...state, number: Math.random(state.number) };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add1" })}
          >
            +1
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMulti7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDiv25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberInt" })}
          >
            Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAleatorio" })}
          >
            Aleatório
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAddN", payload: -9 })}
          >
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
