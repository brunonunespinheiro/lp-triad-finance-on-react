import React from 'react';

const MethodSection = () => {
  return (
    <section className="section" id="method">
      <div className="container">
        <div className="center-heading">
          <h2>O Método Triad em 3 etapas</h2>
          <p className="lead">Um sistema comprovado para transformar sua gestão financeira</p>
        </div>
        <div className="method-row">
          <div className="step-box">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>MÊS 1 – DIAGNÓSTICO PROFUNDO</h3>
              <ul className="check-list">
                <li>Conciliação entre sistema e extrato bancário</li>
                <li>Identificação de falhas e retrabalhos</li>
                <li>Alinhamento com o time responsável</li>
              </ul>
              <p>Nesse ponto inicial, você descobre onde está o vazamento do seu dinheiro.</p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>MÊS 2 – ESTRUTURAÇÃO</h3>
              <ul className="check-list">
                <li>Criação e validação do plano de contas</li>
                <li>Categorias financeiras personalizadas</li>
                <li>Manual de rotina para lançamento e leitura de dados</li>
              </ul>
              <p>Na segunda fase, você começa a organizar o caos e ganha visão sobre o que realmente importa.</p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>MÊS 3 – DECISÃO ESTRATÉGICA</h3>
              <ul className="check-list">
                <li>Análise histórica e de indicadores</li>
                <li>Projeções de caixa (cenário realista, otimista e pessimista)</li>
                <li>Planejamento estratégico para expansão ou estabilidade</li>
              </ul>
              <p>Agora, você passa a tomar decisões baseadas em dados e não em achismos.</p>
            </div>
          </div>
        </div>
        <div className="center-cta">
          <a href="#contact" className="btn-primary">Quero implementar esse método na minha empresa</a>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;