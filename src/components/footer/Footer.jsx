// src/components/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';
// Importa los iconos de Font Awesome.
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.section}>
        <div className={styles.column}>
          <h5 className={styles.title}>TU COMPAÑÍA</h5>
          <p className={styles.description}>
            Una breve descripción de tu empresa para darle un poco de contexto al visitante.
          </p>
        </div>
        <div className={styles.column}>
          <h5 className={styles.title}>ENLACES RÁPIDOS</h5>
          <ul className={styles.linkList}>
            <li><a href="#inicio" className={styles.link}>Inicio</a></li>
            <li><a href="#sobre-nosotros" className={styles.link}>Sobre Nosotros</a></li>
            <li><a href="#servicios" className={styles.link}>Servicios</a></li>
            <li><a href="#contacto" className={styles.link}>Contacto</a></li>
            <li><a href="#politica-privacidad" className={styles.link}>Política de Privacidad</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h5 className={styles.title}>SÍGUENOS</h5>
          <div className={styles.socialIcons}>
            {/* Ahora se usan los componentes de iconos en lugar de letras */}
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
        <p>&copy; {currentYear} Tu Compañía | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}