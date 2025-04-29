import React from 'react';

const BonusSection = () => {
  return (
    <section className="section" id="bonus">
      <div className="container">
        <div className="center-heading">
          <h2>Bônus Exclusivos</h2>
          <p className="lead">Vantagens adicionais que você recebe ao contratar nossa consultoria</p>
        </div>
        <div className="bonus-row">
          <div className="bonus-card">
            <div className="card-icon">
              <i className="fas fa-search-dollar"></i>
            </div>
            <h3>Diagnóstico Financeiro Gratuito</h3>
            <p>Você já descobre, antes de comprar, onde está perdendo dinheiro.</p>
          </div>
          <div className="bonus-card">
            <div className="card-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Assessoria mensal após o programa</h3>
            <p>Se quiser manter o acompanhamento depois dos 3 meses, oferecemos um plano de assessoria por R$ 1.500/mês.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;