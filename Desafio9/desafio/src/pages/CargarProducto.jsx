import React, { useContext, useState } from "react";
import Navegador from "../components/Navegador";
import { ProductosContext } from "../context/ProveedorProductos";
import "./CargarProducto.css";

const CargarProducto = () => {
    const { agregarProducto, setProductos } = useContext(ProductosContext);
    const [nuevoProducto, setNuevoProducto] = useState({ precio: "", name: "", imagen: "", descripcion: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const handleSubmitProducto = () => {
        if (nuevoProducto.name.trim() === '' || nuevoProducto.precio.trim() === '' || nuevoProducto.imagen.trim() === '' || nuevoProducto.descripcion.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        fetch("https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then((response) => response.json())
            .then((nuevoProductoCreado) => {
        
                agregarProducto(nuevoProductoCreado);
               
                setNuevoProducto({ precio: "", name: "", imagen: "", descripcion: "" });
                
                return fetch(url);
            })
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error(error.message));
    };

    return (
        <div className="cargar-producto-container">
            <Navegador />
            <div className="cargar-producto-form">
                <h2>Agregar Producto</h2>
                <form>
                    <label>
                        Nombre:
                        <input type="text" name="name" value={nuevoProducto.name} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Precio:
                        <input type="text" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Descripción:
                        <textarea name="descripcion" value={nuevoProducto.descripcion} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Imagen (URL):
                        <input type="text" name="imagen" value={nuevoProducto.imagen} onChange={handleInputChange} />
                    </label>
                    <br />
                    <button type="button" className="btn-cargar-producto" onClick={handleSubmitProducto}>
                        Cargar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CargarProducto;

