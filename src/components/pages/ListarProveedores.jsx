

import { ProveedorAccion } from '../../actions/ProveedorAction';
import { useState, useEffect } from 'react';

const ListarProveedores = () => {
    
    const [proveedores, setProveedor] = useState([]);
    const { accionesP } = ProveedorAccion();
    
    useEffect(() => {

            accionesP.actGetProveedores(setProveedor);

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
                    {proveedores && proveedores.map((provedor) => {
                        return (
                            <tr key={provedor.id}>
                                <td>{provedor.nombre}</td>
                                <td>{provedor.celular}</td>
                                <td>{provedor.ci}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
    
}

export default ListarProveedores;