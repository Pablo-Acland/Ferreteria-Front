import React, { useState } from "react";

import Home from "./containers/Home";
import Login from "./containers/Login";


import firebaseApp from "./firebase/Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  function usuario(usuarioFirebase) {
    
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {

      if (!user) {
        usuario(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Home user={user} /> : <Login />}</>;
}

export default App;
