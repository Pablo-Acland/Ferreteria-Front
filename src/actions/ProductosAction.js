import { ProductosServices } from "../conexion/Productos/ProductosService";

const { getProducto, agregarProducto }= ProductosServices();

const actGetProducto = (setProducto)=>{
    getProducto(setProducto);
}

const actSetProducto = (producto)=>{
    agregarProducto(producto);
}

export const ProductoAccion = () =>{
    let acciones={
            actGetProducto,
        actSetProducto
        }
    return{
        acciones
        
    }

}