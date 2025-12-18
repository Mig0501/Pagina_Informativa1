import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  // Estado para el tema
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('nexustech-theme');
    return saved ? JSON.parse(saved) : false;
  });

  // Estado para servicios cargados desde JSON
  const [services, setServices] = useState([]);

  // Estado para cargando/error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para el total de cotizaciones
  const [totalQuotes, setTotalQuotes] = useState(0);

  // useEffect para cargar datos del JSON
  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);

        // Simular carga asíncrona (opcional, puedes quitar el setTimeout)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Importar directamente el JSON
        const servicesData = await import('./data/services.json');
        setServices(servicesData.default);

        setError(null);
      } catch (err) {
        setError('Error al cargar los servicios');
        console.error('Error loading services:', err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []); // [] significa que se ejecuta solo al montar el componente

  // useEffect para persistir el tema en localStorage
  useEffect(() => {
    localStorage.setItem('nexustech-theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleQuoteRequest = () => {
    setTotalQuotes(prev => prev + 1);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        totalQuotes={totalQuotes}
      />

      <main className="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Sección de Servicios */}
        <section className="services-section" id="servicios">
          <div className="section-header">
            <h2>Nuestro Portafolio de Servicios IT</h2>
            <p className="section-subtitle">
              Soluciones integrales para transformación digital
            </p>
            <div className="stats-header">
              <span className="total-quotes">
                📊 Total de cotizaciones solicitadas: <strong>{totalQuotes}</strong>
              </span>
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
              </button>
            </div>
          </div>

          {/* Estado de carga/error */}
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Cargando servicios...</p>
            </div>
          )}

          {error && (
            <div className="error">
              <p>⚠️ {error}</p>
              <button onClick={() => window.location.reload()}>
                Reintentar
              </button>
            </div>
          )}

          {/* Grid de servicios */}
          {!loading && !error && (
            <div className="services-grid">
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  priceTier={service.priceTier}
                  category={service.category}
                  onRequestQuote={handleQuoteRequest}
                />
              ))}
            </div>
          )}

          {/* Información adicional */}
          <div className="services-info">
            <p>💡 <strong>Nota:</strong> Cada tarjeta tiene su propio contador de solicitudes y un contador global en el header.</p>
            <p>🔧 Todos los datos se cargan dinámicamente desde <code>src/data/services.json</code> usando <strong>useEffect</strong>.</p>
          </div>
        </section>

        {/* Sección de Estadísticas */}
        <Stats />
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;