import React from "react";
import { useDentist } from "../Context/dentistContext";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentist();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favoritesList.map((dentist) => (
          <Card
            key={dentist.id}
            data={dentist}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
