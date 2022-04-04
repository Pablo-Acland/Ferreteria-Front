import React from 'react';
import { ProductoAccion } from '../../actions/ProductosAction';
import { useState } from 'react';

const AgregarProductos = ()=>{

    const { acciones } = ProductoAccion();

    const [nombre, setNombre]= useState(null);
    const [precio, setPrecio]= useState(null);
    const [cantidad, setCantidad]= useState(null);

    const add = (e)=>{
        e.preventDefault();
        let producto = {
            nombreProducto: nombre,
            precio: precio,
            cantidad: cantidad
        }
        acciones.actSetProducto(producto);
    }

    const modificarNombre = (e)=>{
        setNombre(e.target.value);
    }
    const modificarPrecio = (e)=>{
        setPrecio(e.target.value);
    }
    const modificarCantidad = (e)=>{
        setCantidad(e.target.value);
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
                <td><input type= "text" onChange={modificarPrecio}/></td>
            </tr>
            <tr>
                <td>Cantidad</td>
                <td><input type= "text" onChange={modificarCantidad}/></td>
            </tr>
            <tr>
                <td colSpan="2"><input type= "submit" value= "Agregar"/></td>
            </tr>
        </table>
        
        
         
        
        </form>
        </div>
    );

}
export default AgregarProductos;