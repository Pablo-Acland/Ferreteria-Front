import React from 'react';
import { ProductoAccion } from "../actions/ProductosAction";
import { useState, useEffect } from 'react';
import ListarClientes from './pages/ListarClientes';
import { FacturaAccion } from '../actions/FacturaAction';


const Vender = () =>{


    const [productos, setProducto] = useState([]);
    const [listProductos, setListProductos]=useState([])
    const { acciones } = ProductoAccion();
    const [precioTotal, setPrecioTotal]=useState(0);
    const [cliente, setCliente]=useState(null);
    const { accionesF }= FacturaAccion();
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
                if(producto.cantidad!==0){
                listProductos.push(pro);
                producto.cantidad--;
                let a =Object.values(listProductos);
                setListProductos(a);
            }
            }else{
                if(producto.cantidad!==0){
                listProductos[indice].cantidad++;
                producto.cantidad--;
                console.log(producto.cantidad);
                listProductos[indice].precio+=producto.precio;
                let a =Object.values(listProductos);
                setListProductos(a);
                }
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

        const crearFactura= ()=>{
            let fecha = new Date();
            fecha.setFullYear(); 
            let factura ={
                consecutivoFactura: "8326482021",
                fecha: fecha,
                nombreCliente: cliente.nombre,
                nombreEmpleado: "Raul",
                productos: listProductos,
                totalPagar: precioTotal
            }

            accionesF.actSetFactura(factura);

        }
        const actualizarProductos=()=>{
            productos.map((p)=>{
                acciones.actUpdateProducto(p);
            });
        }

        const cantidad=(producto)=>{
            if(producto.cantidad<3){
                window.alert("Cantidad del producto baja ")
            }
        }


    return(
        <div className='d-flex justify-content-center'>
            <ListarClientes setCliente={setCliente}/>
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
                            <td><button className='btn btn-success title'  onClick={()=>{addProducto(producto);
                                cantidad(producto);
                            }} >+</button></td>
                            <td><button className="btn btn-warning" onClick={()=>{removeProducto(producto)}} >-</button></td>
                            
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
            <button onClick={()=>{crearFactura();
                actualizarProductos();
            }}>Comprar</button>
        </table>
    </div>
    );

}
export default Vender;