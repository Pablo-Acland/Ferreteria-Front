import { URL_BASE } from '../config';

export const ProveedorServices = () =>{

    const getProveedor =(setProvedor)=>{
        return fetch(URL_BASE + "/proveedores")
        .then(response => response.json())
        .then((p) =>{
            console.log(p);
            setProvedor(p);
        })
    };


    const agregarProveedor =(Proveedor)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(Proveedor)
        };

        fetch(URL_BASE + "/proveedor", requestOptions)
            .then(response => response.json())
            .then((p) => {
               console.log("proveedor agregado");
            });
        
    };
   
            return{
        getProveedor,
        agregarProveedor
    }
}