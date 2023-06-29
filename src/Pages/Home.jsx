import React from "react";

//importamos componentes
import Card from "../Components/Card";
import { useDentist } from "../Context/dentistContext";


const Home = () => {
  const { state } = useDentist();
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.dentistList.map((dentist) => (
          <Card
            key={dentist.id}
            data={dentist}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
