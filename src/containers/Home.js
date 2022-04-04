import React from "react";

import ListarFacturas from "../components/pages/ListarFacturas";
import ListarProveedores from "../components/pages/ListarProveedores";
import AgregarCliente from "../components/pages/AgregarCliente";
import ListarClientes from "../components/pages/ListarClientes";
import AgregarProductos from "../components/pages/AgregarProductos";
import Vender from "../components/Vender";
import { BrowserRouter as Router, Link, Routes, Route  } from "react-router-dom";
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
            <Router>
                  <Link to= "/AgregarCliente" >Agregar un Cliente  </Link> 
                  <Link to="/ListarClientes">Listar Clientes  </Link>
                  <Link to="/AgregarProductos">Agregar Productos  </Link>
                  <Link to="/Vender">Venta  </Link>
                  <Link to="/ListarProveedores">ListarProveedores </Link>
                  <Link to="/ListarFacturas">ListarFacturas </Link>
              <Routes>
              <Route path="/AgregarCliente" element={<AgregarCliente />} />
              <Route path="/ListarCLientes" element={<ListarClientes />} />
              <Route path="/AgregarProductos" element={<AgregarProductos />} />
              <Route path="/Vender" element={<Vender />} />
              <Route path="/ListarProveedores" element={<ListarProveedores />} />
              <Route path="/ListarFacturas" element={<ListarFacturas />} />
              <Route path="/" element={<ListarClientes />} />
            </Routes>
          </Router>
     </div>
    </div>
  );
}

export default Home;
