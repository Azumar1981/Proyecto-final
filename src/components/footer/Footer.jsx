import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Footer.module.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.section}>
        <div className={styles.column}>
          <h5 className={styles.title}>MI EMPRESA   TECHSTOREAZU</h5> 
          <p className={styles.description}>
            En nuestra empresa encontrarás los mejores productos tecnológicos en calidad y precio.
          </p>
        </div>
        <div className={styles.column}>
          <h5 className={styles.title}>ENLACES RÁPIDOS</h5>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.link}>Inicio</Link></li> 
            <li><Link to="/products" className={styles.link}>Productos</Link></li> 
            <li><Link to="/add-product" className={styles.link}>Agregar Producto</Link></li> 
            <li><Link to="/contact" className={styles.link}>Contacto</Link></li> 
          </ul>
        </div>
        <div className={styles.column}>
          <h5 className={styles.title}>SÍGUENOS</h5>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} TechStoreAzu | Todos los derechos reservados.</p> 
      </div>
    </footer>
  );
}