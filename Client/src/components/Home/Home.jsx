import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableEmp from "../TableEmp/TableEmp.jsx";
import { getEmplApi } from "./services.js";
import Styles from "./Home.module.css";
import Cookies from 'universal-cookie';

const cookies= new Cookies();

function Home() {
  let navigate = useNavigate();
  //console.log("COOKES: ", cookies.get('email'), cookies.get('pass'));

  const [data, setData] = useState([]);
  const [orig, setOrig] = useState([]);
  var employees;

  useEffect(async () => {
    if(!cookies.get('email')){
      navigate("/");
    }else{
    employees = await getEmplApi();
    console.log("DATA del Home: ", employees);
    setData(employees);
    setOrig(employees);
    }
  }, []);

  function order(letter) {
    console.log("BOTON ORDER");
    letter === "a" ? setData([...data].sort((a, b) =>a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
      : letter === "z"? setData([...data].sort((b, a) =>a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
      : setData(orig);
  }
  
  function signOff(){
    cookies.remove('email', {path:"/"});
    cookies.remove('pass', {path:"/"});
    navigate("/");
  }

  return (
    
    <div className={Styles.divGral}>
      <div className={Styles.title}><h1>Personal Tipie</h1></div>
      <div className={Styles.buttonsCont}>
        <button className={Styles.button} onClick={() => order("a")}>Orden A-Z</button>
        <button className={Styles.button} onClick={() => order("z")}>Orden Z-A</button>
        <button className={Styles.button} onClick={() => order("x")}>Orden Api</button>
      </div>
      <TableEmp rows={data} />
      <div className={Styles.buttonSesionDiv}>
        <button className={Styles.buttonSesion} onClick={()=>signOff()} >Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Home;
