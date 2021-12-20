import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getUser } from "./services.js";
//import './Login.css'
import Styles from "./Login.module.css";
import login from "../../images/login.png";
import Cookies from 'universal-cookie';

const cookies= new Cookies();

function Login() {
  // cookies.remove('email', {path:"/"});
  // cookies.remove('pass', {path:"/"});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  //var json;

  useEffect(async () => {
    if(cookies.get('email')){
      navigate("/home");
    }
  },[]);
  //////////////////////////////////////
  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  ////////////////////////////////////////
  const loginSubmit = async (e) => {
    e.preventDefault();

    var json = await getUser(user);
    if (!json.error) {
      cookies.set('email', json.email, {path:"/"});
      cookies.set('pass', json.password, {path:"/"});
      swal({
        title: "Login exitoso",
        text: "dirigirse al Home",
        icon: "success",
        button: "Aceptar",
      })
      .then((resp) => {
        navigate("/home");
      });
    } else {
      swal({
        title: json.error,
        text: json.motivo,
        icon: "error",
        button: "Aceptar",
        color: "red",
      });
    }
  };
  ///////////////////////////////
  return (
    <div className={Styles.divGral}>
      <div className={Styles.tittle}>
        <h1>LOGIN</h1>
      </div>
      <div className={Styles.containerForm}>
        <form onSubmit={(e) => loginSubmit(e)}>
          <div className={Styles.imgContainer}>
            <img className={Styles.imgLogin} src={login} alt="Avatar" />
          </div>
          <div className={Styles.inputsCont}>
            <div className={Styles.inputs}>
              <input
                className={Styles.inputText}
                required
                type="email"
                name="email"
                value={user.email}
                placeholder="Ingrese email..."
                onChange={(e) => handleChange(e)}
              />
              <div className={Styles.iconInput}>
                <i class="fas fa-envelope"></i>
              </div>
            </div>
            <div className={Styles.inputs}>
              <input
                className={Styles.inputText}
                required
                type="text"
                name="password"
                placeholder="Ingrese password..."
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
              <div className={Styles.iconInput}>
              <i class="fas fa-unlock-alt"></i>

              </div>
            </div>
            <div className={Styles.inputs}>
              <button className={Styles.boton} type="submit">
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
