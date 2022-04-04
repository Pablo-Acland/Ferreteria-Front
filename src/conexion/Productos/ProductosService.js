import { URL_BASE } from '../config';

export const ProductosServices = () =>{

    const getProducto =(setProducto)=>{
        return fetch(URL_BASE + "/productos")
        .then(response => response.json())
        .then((p) =>{
            console.log(p);
            setProducto(p);
        })
    };


    const agregarProducto =(producto)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(producto)
        };

        fetch(URL_BASE + "/producto", requestOptions)
            .then(response => response.json())
            .then((p) => {
               console.log("producto agregado");
            });
        
    };

    const updateProducto =(producto)=>{
        let id = producto.id;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(producto)
        };

        fetch(URL_BASE + '/producto/update/'+id, requestOptions)
            .then(response => response.json())
            .then((p) => {
               console.log("producto agregado");
            });
        
    };
   
            return{
        getProducto,
        agregarProducto,
        updateProducto
    }
}