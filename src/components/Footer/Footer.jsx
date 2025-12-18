import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Marca y Redes */}
                <div className="footer-section">
                    <h4>NexusTech Solutions</h4>
                    <p>Innovando para el futuro digital. Transformamos ideas en soluciones tecnológicas escalables.</p>
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <span>🐱</span> GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <span>💼</span> LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <span>🐦</span> Twitter
                        </a>
                    </div>
                </div>

                {/* Enlaces Rápidos */}
                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul className="footer-links">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className="footer-section">
                    <h4>Contáctanos</h4>
                    <ul className="footer-contact">
                        <li>📧 contacto@nexustech.com</li>
                        <li>📱 +1 (555) 123-4567</li>
                        <li>📍 Ciudad Tecnológica, Piso 42</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} NexusTech Solutions. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
