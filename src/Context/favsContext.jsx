import { createContext, useContext, useEffect, useReducer } from "react";

export const FavsContext = createContext();


const initialState = JSON.parse(localStorage.getItem("favs")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      if (!isItemExists(state, action.payload)) {
        state.push(action.payload);
        localStorage.setItem("favs", JSON.stringify(state))
      }
      return [...state]
      case "DELETE_FAV":
        const filteredState = state.filter(fav => fav.id !== action.payload.id);
        localStorage.setItem("favs", JSON.stringify(filteredState))
      return filteredState
    default:
      throw new Error()
  }
};


export const FavsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
  },[state])

  return (
    <FavsContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </FavsContext.Provider>
  );
};
export const useFavs = () => useContext(FavsContext);
