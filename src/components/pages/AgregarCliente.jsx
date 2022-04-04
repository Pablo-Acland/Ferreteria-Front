import React from 'react';
import { ClienteAccion } from '../../actions/ClienteAction';
import { useState, useEffect } from 'react';



const AgregarCliente = ()=>{

    const { acciones } = ClienteAccion();

    const [nombre, setNombre]= useState(null);
    const [celular, setCelular]= useState(null);
    const [ci, setCI]= useState(null);

    const add = (e)=>{
        e.preventDefault();
        let cliente = {
            nombre: nombre,
            celular: celular,
            ci: ci
        }
        acciones.actSetCliente(cliente);
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
            <h2>Agregar CLientes</h2>
            </div>
            <table>
                <tr>
                    <td>Nombre</td>
                    <td><input className='m-2' type= "text" onChange={modificarNombre}/></td>
                </tr>
                <tr>
                    <td>Celular</td>
                    <td><input className='m-2' type= "text" onChange={modificarCelular}/></td>
                </tr>
                <tr>
                    <td>CI</td>
                    <td><input className='m-2' type= "text" onChange={modificarCI}/>  </td>
                </tr>
                <tr>
                    <td  colSpan="2"><input className="btn btn-primary" type= "submit" value= "Agregar"/></td>
                </tr>
            </table>


            

            </form>
            </div>
    );

}
export default AgregarCliente;