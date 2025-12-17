import React from 'react';
import styles from './Header.module.css';

const Header = ({ isDarkMode, onToggleTheme, totalQuotes }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>NexusTech Solutions</h1>
      </div>
      
      <nav className={styles.nav}>
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#servicios">servicios</a></li>
          <li><a href="#proyectos">proyectos</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </nav>
      
      <div className={styles.controls}>
        <span className={styles.quoteCounter}>
          📋 Cotizaciones: {totalQuotes || 0}
        </span>
        
        <button 
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;