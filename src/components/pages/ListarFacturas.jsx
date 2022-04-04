import React from 'react';
import { FacturaAccion } from '../../actions/FacturaAction';
import { useState, useEffect } from 'react';

const ListarFacturas = (props) => {
    
    const [facturas, setFactura] = useState([]);
    const { accionesF } = FacturaAccion();
    
    useEffect(() => {

            accionesF.actGetFacturas(setFactura);

        }, []);
    

    



    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Celular</th>
                        <th>DNI</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas && facturas.map((factura) => {
                        return (
                            <tr key={factura.id}>
                                <td>{factura.nombreCliente}</td>
                                <td>{factura.nombreEmpleado}</td>

                                <td>{factura.productos.map(producto => 
                                <tr key={producto.id}>
                                    <td>{producto.nombreProducto}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    
                                </tr>)}</td>
                                <td>{factura.totalPagar}</td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    
}

export default ListarFacturas;