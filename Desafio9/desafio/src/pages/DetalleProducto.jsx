import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductosContext } from "../context/ProveedorProductos";
import Navegador from "../components/Navegador";
import '../App.css';

const DetalleProducto = () => {
    const { id } = useParams();
    const { productos } = useContext(ProductosContext);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const productoEncontrado = productos.find(prod => prod.id === id);
        if (productoEncontrado) {
            setProducto(productoEncontrado);
        }
    }, [id, productos]);

    if (!producto) {
        return <p>Cargando producto...</p>; 
    }

    return (
        <>
            <Navegador />
            <div className="detalle-producto-container">
                <div className="detalle-producto-content">
                    <div className="detalle-producto-imagen">
                        <img src={producto.imagen} alt={producto.name} />
                    </div>
                    <div className="detalle-producto-info">
                        <h2>{producto.name}</h2>
                        <p className="detalle-producto-precio">{producto.precio}</p>
                        <p className="detalle-producto-descripcion">{producto.descripcion}</p>
                        <button className="btn btn-primary">Comprar Ahora</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;

