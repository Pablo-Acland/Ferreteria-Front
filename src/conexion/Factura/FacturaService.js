import { URL_BASE } from '../config';

export const FacturaServices = () =>{

    const getFactura =(setFactura)=>{
        return fetch(URL_BASE + "/factura/facturas")
        .then(response => response.json())
        .then((p) =>{
            console.log(p);
            setFactura(p);
        })
    };


    const agregarFactura =(factura)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(factura)
        };

        fetch(URL_BASE + "/factura/crear", requestOptions)
            .then(response => response.json())
            .then((p) => {
               console.log("factura agregado");
            });
        
    };
   
            return{
        getFactura,
        agregarFactura
    }
}