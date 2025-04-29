import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Triad Logo" className="footer-logo-img" />
            <p>Consultoria em Gestão Financeira para Empresas em Crescimento. Organize suas finanças, pare de perder dinheiro e prepare sua empresa para crescer com clareza.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h5>Links</h5>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">O que é</a>
              <a href="#method" className="footer-link">Método</a>
              <a href="#for-who" className="footer-link">Para quem</a>
              <a href="#experts" className="footer-link">Especialistas</a>
            </div>
            <div className="footer-links-column">
              <h5>Suporte</h5>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Contato</a>
            </div>
            <div className="footer-contact">
              <h5>Contato</h5>
              <p><i className="fas fa-map-marker-alt"></i> São Luís, Maranhão</p>
              <p><i className="fas fa-phone-alt"></i> (98) 9000-0000</p>
              <p><i className="fas fa-envelope"></i> contato@triadconsultoria.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Triad Consultoria. Todos os direitos reservados.</p>
          <p>Desenvolvido com <i className="fas fa-heart"></i> em São Luís, MA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;