import React from "react";
import Navegador from "../components/Navegador";
import imagen1 from "../imagenes/imagen1.jpeg";
import imagen2 from "../imagenes/imagen2.jpeg";
import imagen3 from "../imagenes/imagen3.jpeg";



const Home = () => {
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 100, imagen: imagen1 },
    { id: 2, nombre: "Producto 2", precio: 150, imagen: imagen2 },
    { id: 3, nombre: "Producto 3", precio: 120, imagen: imagen3 },
  ];

  return (
    <>
      <Navegador />

      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <h1 className="text-center mb-4">Bienvenido a Mercado Libre</h1>

        
          <div className="row">
            {productos.map((producto) => (
              <div className="col-md-4 mb-4" key={producto.id}>
                <div className="card h-100">
                  <img src={producto.imagen} className="card-img-top img-fluid" alt={producto.nombre} style={{ height: "265px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <a href="#" className="btn btn-primary">Ver Detalles</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;