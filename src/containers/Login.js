import React, { useState } from "react";


import Logo from '../assets/img/logo.png'

import firebaseApp from "../firebase/Credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email });
  }

  function submitHandler(e) {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    console.log("submit", email, password);

    

    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password)
      .catch(
        function(error){
            window.alert("Usuario no existe");
        }
      );
    }
  }

  return (
    <div className="hero" >
     <div className="div-logo">
        <img className="logo" src={Logo} />
     </div>
      
      <h1 className="title" >{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

      <form className="form-login" onSubmit={submitHandler}>
        <label className="from-login-label" >
          Correo electrónico:
          <input type="email" id="email" />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" />
        </label>

        <input
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
        />
      </form>

      <button className="form-login" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
    </div>
  );
}

export default Login;
