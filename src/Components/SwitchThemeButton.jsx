import React, { useEffect } from "react";
import { useTheme } from "../Context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme();
  useEffect(() => {}, [darkMode]);
  return (
    <button className="switchButton" onClick={toggleTheme}>
      {darkMode ? (
        <FontAwesomeIcon icon={["far", "moon"]} />
      ) : (
        <FontAwesomeIcon icon={["far", "sun"]} />
      )}
    </button>
  );
};

export default SwitchThemeButton;
