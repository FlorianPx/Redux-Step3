import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Result from "./Result.jsx";

const houses = ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"];
const reducer = (
  state = { houses, selectedHouses: houses[Math.floor(Math.random() * 4)] },
  action
) => {
  switch (action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX":
      return { ...state, selectedHouses: state.houses[action.indexSelected] };
    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Result />
    </Provider>
  );
}

export default App;
