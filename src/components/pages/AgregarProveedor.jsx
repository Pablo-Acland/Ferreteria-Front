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
        <table>
            <tr>
                <td>Nombre</td>
                <td><input type= "text" onChange={modificarNombre}/></td>
            </tr>
            <tr>
                <td>Precio</td>
                <td><input type= "text" onChange={modificarCelular}/></td>
            </tr>
            <tr>
                <td>Cantidad</td>
                <td><input type= "text" onChange={modificarCI}/> </td>
            </tr>
            <tr>
                <td colSpan="2"><input type= "submit" value= "Agregar"/></td>
            </tr>
        </table>
        
        
         
        
        </form>
        </div>
    );

}
export default AgregarProveedor;