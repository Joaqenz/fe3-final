import React from "react";
import { Link } from "react-router-dom";
import cardImage from "/images/doctor.jpg";
import { isItemExists } from "../Context/dentistContext";
import { useDentist } from "../Context/dentistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data }) => {
  const { state, dispatch } = useDentist();
  return (
    <div className="card">
      <Link to={"/dentista/" + data.id}>
        <img src={cardImage} alt="" />
        <div
          className="cardText"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <div className="">{data.name}</div>
          <div
            className=""
            style={{ textTransform: "uppercase", fontSize: "12px" }}
          >
            {data.username}
          </div>
        </div>
      </Link>

      {!isItemExists(state.favoritesList, data) ? (
        <button
          onClick={() => dispatch({ type: "ADD_FAV", payload: data })}
          className="favButton"
        >
          <FontAwesomeIcon className="icon" icon={["far", "heart"]} />
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "DELETE_FAV", payload: data })}
          className="favButton"
        >
          <FontAwesomeIcon className="icon" icon={["fas", "heart"]} />
        </button>
      )}
    </div>
  );
};

export default Card;
