import { ProductosServices } from "../conexion/Productos/ProductosService";

const { getProducto, agregarProducto, updateProducto }= ProductosServices();

const actGetProducto = (setProducto)=>{
    getProducto(setProducto);
}

const actSetProducto = (producto)=>{
    agregarProducto(producto);
}
const actUpdateProducto = (producto)=>{
    updateProducto(producto);
}

export const ProductoAccion = () =>{
    let acciones={
            actGetProducto,
        actSetProducto,
        actUpdateProducto
        }
    return{
        acciones
        
    }

}