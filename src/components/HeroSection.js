import React from 'react';
import heroImage from '../assets/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-row">
          <div className="hero-text">
            <span className="badge-feature">Consultoria Financeira Especializada</span>
            <h1>Triad On – Finance</h1>
            <p className="lead">Organize suas finanças, pare de perder dinheiro e prepare sua empresa para crescer com clareza, previsibilidade e lucro.</p>
            <p className="emphasis"><strong>Em apenas 3 meses.</strong></p>
            <div className="cta-group">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-check-circle"></i> Garantir minha vaga com diagnóstico grátis
              </a>
              <p className="support-text">
                <i className="fas fa-comments"></i> Atendimento e acompanhamento direto com o especialista.
              </p>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Triad Finance" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;