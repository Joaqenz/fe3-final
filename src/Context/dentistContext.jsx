import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const DentistContext = createContext();

const initialState = JSON.parse(localStorage.getItem("GlobalContext")) || {
    dentist: {},
    dentistList: [],
    favoritesList:[]
}

export const isItemExists = (array, newItem) => {
    return array.some((item) => item.id === newItem.id);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return { 
        ...state,
        dentistList: action.payload
    };
    case "GET_UNIQUE":
      localStorage.setItem("GlobalContext", JSON.stringify(state))
      return {
        ...state,
        dentist: action.payload
    };
    case "ADD_FAV":
      if (!isItemExists(state.favoritesList, action.payload)) {
        state.favoritesList.push(action.payload);
        localStorage.setItem("GlobalContext", JSON.stringify(state))
      }
      return {
        ...state
      }
      case "DELETE_FAV":
        const filteredState = {
            ...state,
            favoritesList: state.favoritesList.filter(fav => fav.id !== action.payload.id)
          }
        localStorage.setItem("GlobalContext", JSON.stringify(filteredState))
      return filteredState
    default:
      throw new Error()
  }
};

export const DentistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    axios(url)
    .then((res) => {
        dispatch({ type: "GET_LIST", payload: res.data })
    })}, []);

  return (
    <DentistContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DentistContext.Provider>
  );
};
export const useDentist = () => useContext(DentistContext);
