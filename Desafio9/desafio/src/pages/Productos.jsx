import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navegador from "../components/Navegador";
import { ProductosContext } from "../context/ProveedorProductos";
import '../App.css';

const Productos = () => {
    const { productos, eliminarProducto } = useContext(ProductosContext);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleEliminarProducto = (id) => {
        fetch(`https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then(() => {
            eliminarProducto(id);
            setProductoSeleccionado(null); 
        })
        .catch((error) => console.error(error.message));
    };

    const handleSeleccionarProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredProductos = productos.filter(producto =>
        producto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navegador onSearch={handleSearch} />
            <h1 id="prod">Productos</h1>
            <div className="contenedor">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredProductos.map(producto => (
                        <div className="col" key={producto.id}>
                            <div className="card h-100">
                                <img src={producto.imagen} className="card-img-top" alt={producto.name} style={{ height: "280px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.name}</h5>
                                    <p className="card-text">{producto.precio}</p>
                                    <button className="btn btn-primary" onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                                    <Link to={`/productos/${producto.id}`} className="btn btn-primary">Ver Detalles</Link>
                                    <Link to={`/EditarProducto/${producto.id}`} className="btn btn-primary">Editar Producto</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Productos;


