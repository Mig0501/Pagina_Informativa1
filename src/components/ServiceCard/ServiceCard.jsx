import React, { useState } from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  priceTier, 
  category,
  onRequestQuote 
}) => {
  // Estado para el contador de cotizaciones de ESTA tarjeta
  const [quoteCount, setQuoteCount] = useState(0);
  
  // Estado para expandir/contraer descripción
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para manejar clic en "Solicitar Cotización"
  const handleQuoteClick = () => {
    const newCount = quoteCount + 1;
    setQuoteCount(newCount);
    
    // Notificar al componente padre (App.jsx)
    if (onRequestQuote) {
      onRequestQuote();
    }
    
    // Feedback visual temporal
    const button = document.activeElement;
    if (button) {
      button.textContent = '✅ ¡Solicitada!';
      setTimeout(() => {
        button.textContent = 'Solicitar Cotización';
      }, 1000);
    }
  };

  // Función para alternar descripción expandida
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.card} ${styles[category.toLowerCase()]}`}>
      {/* Encabezado con icono y categoría */}
      <div className={styles.cardHeader}>
        <span className={styles.icon} role="img" aria-label={title}>
          {icon}
        </span>
        <span className={styles.categoryBadge}>
          {category}
        </span>
      </div>

      {/* Título del servicio */}
      <h3 className={styles.title}>{title}</h3>

      {/* Descripción con botón "Leer más/menos" */}
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          {isExpanded ? description : `${description.substring(0, 100)}...`}
        </p>
        <button 
          className={styles.readMoreBtn}
          onClick={toggleDescription}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>

      {/* Precio y acciones */}
      <div className={styles.cardFooter}>
        <div className={styles.price}>
          <span className={styles.priceLabel}>Desde:</span>
          <strong className={styles.priceValue}>{priceTier}</strong>
        </div>

        <div className={styles.actions}>
          {/* Contador de solicitudes de ESTA tarjeta */}
          <div className={styles.counter}>
            <span className={styles.counterIcon}>📋</span>
            <span className={styles.counterText}>
              {quoteCount} solicitud{quoteCount !== 1 ? 'es' : ''}
            </span>
          </div>

          {/* Botón principal */}
          <button 
            className={styles.quoteButton}
            onClick={handleQuoteClick}
            aria-label={`Solicitar cotización para ${title}`}
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;