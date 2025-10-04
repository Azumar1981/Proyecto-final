import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // ✅ CSS correcto

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(2); // Ejemplo con 2 productos en carrito

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

      {/* Buscador */}
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          🔍
        </button>
      </form>

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
          <Link to="ProductDetail" onClick={() => setIsOpen(false)}>Productos</Link>
        </li>
        <li>
          <Link to="ProductForm" onClick={() => setIsOpen(false)}>Contacto</Link>
        </li>
        <li className={styles.cart}>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            🛒 <span className={styles.cartCount}>{cartCount}</span>
          </Link>
        </li>
        </ul>
    </nav>
  );
}
