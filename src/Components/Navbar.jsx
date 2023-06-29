import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import SwitchThemeButton from "./SwitchThemeButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="title">
        DH
      </div>
      <div className="links">
        <NavLink to={routes.home}>
          <div className="link">Home</div>
        </NavLink>
        <NavLink to={routes.contact}>
          <div className="link">Contacto</div>
        </NavLink>
        <NavLink to={routes.favs}>
          <div className="link">Favoritos</div>
        </NavLink>
        <button className="switchButton" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={["fas", "arrow-left"]} />
        </button>
        <SwitchThemeButton/>
      </div>
          
    </nav>
  );
};

export default Navbar;
