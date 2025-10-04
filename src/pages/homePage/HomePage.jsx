import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.overlay}>
        <h1>Bienvenidos a TechStoreAzu</h1>
        <p>Tu destino para la última tecnología. Descubre productos innovadores y de alta calidad.</p>
        <Link to="/productList" className={styles.button}>
          Explorar Productos
        </Link>
      </div>
    </div>
  );
}
