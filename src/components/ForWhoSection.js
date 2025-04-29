import React from 'react';

const ForWhoSection = () => {
  return (
    <section className="section section-gradient" id="for-who">
      <div className="container">
        <div className="section-row align-center">
          <div className="text-col">
            <h2 className="section-title">Para quem é a Triad On – Finance?</h2>
            <div className="card-container">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Empresas que faturam a partir de R$ 100 mil/mês</h4>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Negócios com pelo menos 5 colaboradores</h4>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <h4>Donos que não têm clareza dos números</h4>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Empresas que cresceram, mas ainda operam com o financeiro desorganizado</h4>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-compass"></i>
                </div>
                <h4>Quem não sabe de fato o quanto estão lucrando e busca previsibilidade</h4>
              </div>
            </div>
          </div>
          <div className="text-col">
            <div className="dark-box">
              <h3>Se você continuar operando no escuro:</h3>
              <div className="warning-list">
                <div className="warning-item">
                  <div className="warning-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <p>Vai continuar misturando PF com PJ</p>
                </div>
                <div className="warning-item">
                  <div className="warning-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <p>Vai continuar apagando incêndio</p>
                </div>
                <div className="warning-item">
                  <div className="warning-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <p>Vai continuar perdendo dinheiro — sem saber onde</p>
                </div>
                <div className="warning-item">
                  <div className="warning-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <p>Vai tomar decisões com base em achismo, não dados</p>
                </div>
                <div className="warning-item">
                  <div className="warning-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <p>E o pior: vai limitar o crescimento da sua empresa</p>
                </div>
              </div>
              <div className="cta-container">
                <p className="lead">Com a Triad On – Finance, você cria estrutura, sistema e cultura financeira. Não é só gestão. É estratégia para crescer com inteligência.</p>
                <a href="#contact" className="btn-primary">Quero essa transformação</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;