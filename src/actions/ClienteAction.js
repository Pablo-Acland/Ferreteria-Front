import { ClientesServices } from "../conexion/Cliente/ClienteService";

const {getClientes, agregarCliente}=  ClientesServices();

const actGetClientes = (setCliente)=>{
    getClientes(setCliente);
}

const actSetCliente = (cliente)=>{
    agregarCliente(cliente);
}

export const ClienteAccion = () =>{
    let acciones={
            actGetClientes,
        actSetCliente
        }
    return{
        acciones
        
    }

}