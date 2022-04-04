
import { FacturaServices } from "../conexion/Factura/FacturaService";

const{getFactura, agregarFactura}=FacturaServices();


const actGetFacturas = (setfactura)=>{
    getFactura(setfactura);
}

const actSetFactura = (factura)=>{
    agregarFactura(factura);
}

export const FacturaAccion = () =>{
    let accionesF={
            actGetFacturas,
        actSetFactura        
    }
    return{
        accionesF
        
    }

}