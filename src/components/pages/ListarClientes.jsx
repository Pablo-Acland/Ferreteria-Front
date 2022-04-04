import React from 'react';
import { ClienteAccion } from '../../actions/ClienteAction';
import { useState, useEffect } from 'react';

const ListarClientes = (props) => {
    
    const [clientes, setClientes] = useState([]);
    const { acciones } = ClienteAccion();
    
    useEffect(() => {
        console.log(ClienteAccion());

            acciones.actGetClientes(setClientes);

        }, []);
    

    



    
    console.log(clientes)
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
                    {clientes && clientes.map((cliente) => {
                        return (
                            <tr key={cliente.id}>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.celular}</td>
                                <td>{cliente.ci}</td>
                                <td><input type="radio" id={cliente.id} name="cliente" value={cliente} onClick={()=>{ props.setCliente(cliente)}}></input></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    
}

export default ListarClientes;