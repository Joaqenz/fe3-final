import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();

const initialState = JSON.parse(localStorage.getItem("theme")) || {
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state));
  }, [state]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const contextValue = {
    darkMode: state.darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
