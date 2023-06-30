import React from "react";

//importamos componentes
import Card from "../Components/Card";
import { useDentist } from "../Context/dentistContext";

const Home = () => {
  const { state } = useDentist();
  return (
    <main className="">
      <h1 style={{ textAlign:'center' }}>Home</h1>
      <div className="card-grid">
        {state.dentistList.map((dentist) => (
          <Card key={dentist.id} data={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
