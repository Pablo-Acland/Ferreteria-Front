import React from 'react';
import { ProductoAccion } from "../actions/ProductosAction";
import { useState, useEffect } from 'react';
import ListarClientes from './pages/ListarClientes';
const Vender = () =>{


    const [productos, setProducto] = useState([]);
    const [listProductos, setListProductos]=useState([])
    const { acciones } = ProductoAccion();
    const [precioTotal, setPrecioTotal]=useState(0);

    useEffect(() => {
        acciones.actGetProducto(setProducto);

    }, []);

    useEffect(() => {
        let precioTotal= 0;
        listProductos.map((p)=> {
            precioTotal+=p.precio
        });
        setPrecioTotal(precioTotal);
    }, [listProductos]);

         function addProducto(producto) {
            let pro ={
                id: producto.id,
                nombreProducto: producto.nombreProducto,
                precio: producto.precio,
                cantidad: 1
            }
            let indice= listProductos.findIndex(p=>p.id===producto.id);
            console.log(indice);
            if(indice===-1){
                listProductos.push(pro);
                let a =Object.values(listProductos);
                setListProductos(a);
            }else{

                listProductos[indice].cantidad++;
                listProductos[indice].precio+=producto.precio;
                let a =Object.values(listProductos);
                setListProductos(a);
            }
        };
        const removeProducto = (producto) =>{
            let pro ={
                id: producto.id,
                nombreProducto: producto.nombreProducto,
                precio: producto.precio,
                cantidad: 1
            }
            let indice= listProductos.findIndex(p=>p.id===producto.id);
            console.log(indice);
            if(!(indice===-1)){
                if(listProductos[indice].cantidad>1){
                    listProductos[indice].cantidad--;
                    listProductos[indice].precio-=producto.precio;
                    let a =Object.values(listProductos);
                    console.log(a);
                setListProductos(a);
                }else{
                    let a =Object.values(listProductos);
                    a.splice(indice,1);
                    console.log(a);
                setListProductos(a);
                }
                
                
            }
        } 


    return(
        <div>
            <ListarClientes/>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => 
                        <tr key={producto.id}>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td><button  onClick={()=>{addProducto(producto)}} >+</button></td>
                            <td><button  onClick={()=>{removeProducto(producto)}} >-</button></td>
                            
                        </tr>

                )}
            </tbody>

            <thead>
            <tr>
            <td colSpan="3">Carrito</td>

            </tr>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {listProductos.map(producto => 
                        <tr key={producto.id}>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            
                        </tr>

                )}
                <tr>
            <td colSpan="2">Precio Total</td>
            <td>{precioTotal}</td>
            </tr>
            </tbody>
            <button>Comprar</button>
        </table>
    </div>
    );

}
export default Vender;