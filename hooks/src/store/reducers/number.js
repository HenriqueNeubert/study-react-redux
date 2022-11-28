export function numberReducer(state, action) {
  switch (action.type) {
    case "number_add1":
      return { ...state, number: state.number + 1 };
    case "number_add2":
      return { ...state, number: state.number + 2 };
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