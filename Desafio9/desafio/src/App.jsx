import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CargarProducto from './pages/CargarProducto';
import { ProveedorProductos } from './context/ProveedorProductos';
import DetalleProducto from './pages/DetalleProducto'; // Ajustar la importación según la ubicación correcta de DetalleProducto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/LUX/bootstrap.min.css';

function App() {
  return (
    <ProveedorProductos>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/cargar" element={<CargarProducto />} />
          <Route path="/productos/:id" element={<DetalleProducto />} /> {/* Ruta dinámica para detalles del producto */}
        </Routes>
      </Router>
    </ProveedorProductos>
  );
}

export default App;
