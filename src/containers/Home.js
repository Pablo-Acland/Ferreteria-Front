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
      <div className="d-flex justify-content-between div-logo">
        <div >
        <img className="logo" src={Logo} />
        </div>
        <div className="h-25 m-2">
          <button className="btn btn-primary"  onClick={() => signOut(auth)}> Cerrar sesión</button>
        </div>
        
     </div>
     <div className="d-flex justify-content-center div-home" >
          <h1  >Home</h1>
          
     </div>
     <div className="title-saludo" >
            <Router>
            <div className="d-flex justify-content-center">
                  <Link className="m-4 text-success" to= "/AgregarCliente" >Agregar un Cliente  </Link> 
                  <Link className="m-4 text-success" to="/ListarClientes">Listar Clientes  </Link>
                  <Link className="m-4 text-success" to="/AgregarProductos">Agregar Productos  </Link>
                  <Link className="m-4 text-success" to="/Vender">Venta  </Link>
                  <Link className="m-4 text-success" to="/ListarProveedores">ListarProveedores </Link>
                  <Link className="m-4 text-success" to="/ListarFacturas">ListarFacturas </Link>
            </div>
              <Routes>
              <Route path="/AgregarCliente" element={<AgregarCliente />} />
              <Route path="/ListarCLientes" element={<ListarClientes />} />
              <Route path="/AgregarProductos" element={<AgregarProductos />} />
              <Route path="/Vender" element={<Vender />} />
              <Route path="/ListarProveedores" element={<ListarProveedores />} />
              <Route path="/ListarFacturas" element={<ListarFacturas />} />
            </Routes>
          </Router>
     </div>
    </div>
  );
}

export default Home;
