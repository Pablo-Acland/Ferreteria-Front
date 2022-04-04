import React from 'react';
import { ProveedorAccion } from '../../actions/ProveedorAction';
import { useState, useEffect } from 'react';



const AgregarProveedor = ()=>{

    const { accionesP } = ProveedorAccion();

    const [nombre, setNombre]= useState(null);
    const [celular, setCelular]= useState(null);
    const [ci, setCI]= useState(null);

    const add = (e)=>{
        e.preventDefault();
        let proveedor = {
            nombre: nombre,
            celular: celular,
            ci: ci
        }
        accionesP.actSetProveedor(proveedor);
    }

    const modificarNombre = (e)=>{
        setNombre(e.target.value);
    }
    const modificarCelular = (e)=>{
        setCelular(e.target.value);
    }
    const modificarCI = (e)=>{
        setCI(e.target.value);
    }

    return (
    <div>
        <form onSubmit={add}>
        <input type= "text" onChange={modificarNombre}/>
        <input type= "text" onChange={modificarCelular}/>
        <input type= "text" onChange={modificarCI}/> 
        <input type= "submit" value= "Agregar"/>
        </form>
        </div>
    );

}
export default AgregarProveedor;