import React ,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDentist } from '../Context/dentistContext';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const { state, dispatch } = useDentist();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_UNIQUE", payload: res.data })
    }
    )
  }, []);
  return (
    <>
      <h1>{`Detalle dentisnta N:${params.id}`}</h1>
       <div className="">{state.dentist?.name}</div>
       <div className="">{state.dentist?.email}</div>
       <div className="">{state.dentist?.phone}</div>
       <div className="">{state.dentist?.website}</div>
    </>
  )
}

export default Detail