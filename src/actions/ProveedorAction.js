import { ProveedorServices } from "../conexion/Proveedor/ProveedorService";


const {getProveedor, agregarProveedor}=  ProveedorServices();

const actGetProveedores = (setProveedores)=>{
    getProveedor(setProveedores);
}

const actSetProveedor = (Proveedor)=>{
    agregarProveedor(Proveedor);
}

export const ProveedorAccion = () =>{
    let accionesP={
            actGetProveedores,
        actSetProveedor
        }
    return{
        accionesP
        
    }

}