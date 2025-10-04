import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${search}`);
  };

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link to="/">TechStoreAzu</Link>
      </div>

      
      {/* Botón menú hamburguesa */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú de navegación */}
      <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        </li>
        <li>
          <Link to="ProductList" onClick={() => setIsOpen(false)}>Productos</Link>
        </li>
        <li>
          <Link to="ProductForm" onClick={() => setIsOpen(false)}>Agregar Producto</Link>
        </li>
        </ul>
    </nav>
  );
}