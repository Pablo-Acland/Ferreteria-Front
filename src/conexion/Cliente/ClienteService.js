import { URL_BASE } from '../config';

export const ClientesServices = () =>{

    const getClientes =(setCliente)=>{
        return fetch(URL_BASE + "/clientes")
        .then(response => response.json())
        .then((p) =>{
            console.log(p);
            setCliente(p);
        })
    };


    const agregarCliente =(cliente)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(cliente)
        };

        fetch(URL_BASE + "/cliente", requestOptions)
            .then(response => response.json())
            .then((p) => {
               console.log("cliente agregado");
            });
        
    };
   
            return{
        getClientes,
        agregarCliente
    }
}

