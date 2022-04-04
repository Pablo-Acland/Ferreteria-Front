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
        <div className='d-flex justify-content-center'>
        <form onSubmit={add}>
        <div>
            <h2>Agregar Proveedores</h2>
            </div>
        <table>
            <tr>
                <td>Nombre</td>
                <td><input type= "text" onChange={modificarNombre}/></td>
            </tr>
            <tr>
                <td>Celular</td>
                <td><input type= "text" onChange={modificarCelular}/></td>
            </tr>
            <tr>
                <td>CI</td>
                <td><input type= "text" onChange={modificarCI}/> </td>
            </tr>
            <tr>
                <td  colSpan="2"><input className="btn btn-primary" type= "submit" value= "Agregar"/></td>
            </tr>
        </table>
        
        
         
        
        </form>
        </div>
    );

}
export default AgregarProveedor;