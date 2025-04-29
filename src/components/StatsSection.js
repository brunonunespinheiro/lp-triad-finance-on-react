import React from 'react';

const StatsSection = () => {
  return (
    <section className="section section-gradient">
      <div className="container">
        <div className="stats-row">
          <div className="stats-box">
            <div className="stats-number">R$100k+</div>
            <p>Faturamento mínimo mensal das empresas atendidas</p>
          </div>
          <div className="stats-box">
            <div className="stats-number">3 meses</div>
            <p>Para transformar completamente sua gestão financeira</p>
          </div>
          <div className="stats-box">
            <div className="stats-number">15 dias</div>
            <p>De garantia risco zero para testar nossa consultoria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;