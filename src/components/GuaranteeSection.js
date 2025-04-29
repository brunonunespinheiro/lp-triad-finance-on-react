import React from 'react';
import guaranteeImage from '../assets/images/guarantee.png';

const GuaranteeSection = () => {
  return (
    <section className="section" id="guarantee">
      <div className="container">
        <div className="section-row align-center">
          <div className="image-col text-center">
            <img src={guaranteeImage} alt="Garantia" className="guarantee-image" />
          </div>
          <div className="text-col">
            <h2 className="section-title">Garantia Risco Zero: 15 dias para testar</h2>
            <p className="lead">Você tem 15 dias após a contratação para avaliar a entrega.</p>
            <p>Se entender que não faz sentido para sua empresa, é só pedir o reembolso.</p>
            <ul className="check-list success">
              <li>Sem burocracia.</li>
              <li>Sem questionamentos.</li>
            </ul>
            <a href="#contact" className="btn-primary">Quero garantir minha vaga</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;