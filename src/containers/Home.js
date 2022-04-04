import React from "react";



import Logo from '../assets/img/logo.png'

import firebaseApp from "../firebase/Credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      <div className="div-logo">
        <img className="logo" src={Logo} />
     </div>
     <div className="div-home" >
          <h1  >Home</h1>
          <button onClick={() => signOut(auth)}> Cerrar sesión</button>
     </div>
     <div className="title-saludo" >
     </div>
    </div>
  );
}

export default Home;
