import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import cardImage from "/images/doctor.jpg";
import { isItemExists } from "../Context/dentistContext";
import { useDentist } from "../Context/dentistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({data}) => {
  const params = useParams();
  const { state, dispatch } = useDentist();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_UNIQUE", payload: res.data });
    });
  }, []);
  return (
    <div className="detail-container">
      <div className="detail-profile">
        <img src={cardImage} alt="" />
        <div className="profile-text">
          <div className="text name">{state.dentist?.name}</div>
          <div className="text email">{state.dentist?.email}</div>
          <div className="text phone">{state.dentist?.phone}</div>
          <div className="text web">{state.dentist?.website}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
