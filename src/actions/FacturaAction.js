
import { FacturaServices } from "../conexion/Factura/FacturaService";

const{getFacturas, agregarFactura}=FacturaServices();


const actGetFacturas = (setfactura)=>{
    getFacturas(setfactura);
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