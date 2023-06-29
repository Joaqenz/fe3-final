import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
  });


  let errorMessage = "Por favor verifique su información nuevamente";
  let confirmMessage = `Gracias ${data.name}, te contactaremos cuando antes vía mail.`;
  let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm()){
      setConfirm(true)
    }
  };
  const validateForm = () => {
    if (data.name.length < 5 || !emailRegex.test(data.email)) {
      setError(true);
    } else {
      setError(false);
      return true
    }
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setConfirm(false)
  };
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label>Nombre:</label>
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={(event) => handleChange(event)}
            style={{ marginBottom: "10px" }}
          />

          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={(event) => handleChange(event)}
            style={{ marginBottom: "10px" }}
          />
        </div>
        {error ? <p>{errorMessage}</p> : <></>}
        <button>Agregar Estudiante</button>
      </form>
      {confirm ? <p>{confirmMessage}</p> : <></>}
    </div>
  );
};

export default Form;
