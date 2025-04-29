import React from 'react';
import expert1 from '../assets/images/expert1.png';
import expert2 from '../assets/images/expert2.png';
import expert3 from '../assets/images/expert3.png';

const ExpertsSection = () => {
  return (
    <section className="section section-gradient" id="experts">
      <div className="container">
        <div className="center-heading">
          <h2>Os 3 pilares por trás do Triad On – Finance</h2>
          <p className="lead">Conheça os especialistas que vão transformar sua gestão financeira</p>
        </div>
        <div className="experts-row">
          <div className="expert-card">
            <img src={expert1} alt="Paulo Moura" className="expert-image" />
            <div className="expert-info">
              <h3>Paulo Moura</h3>
              <p className="expert-title">Estrategista de Negócios</p>
              <p>Especialista em gestão com foco em liderança, cultura organizacional e estruturação de sistemas financeiros para empresas em expansão.</p>
              <p>Com mais 4 anos de atuação em diferentes setores, Paulo desenvolveu a metodologia TRIAD observando o que realmente trava o crescimento de empresas que já vendem bem: a gestão do financeiro.</p>
            </div>
          </div>
          <div className="expert-card">
            <img src={expert2} alt="Samuel Melo Rocha" className="expert-image" />
            <div className="expert-info">
              <h3>Samuel Melo Rocha</h3>
              <p className="expert-title">Contador e Advogado</p>
              <p>Especializado em contabilidade e direito empresarial. Atua com foco em tributação, planejamento societário e sucessório, apoiando empresas na construção de negócios sólidos.</p>
              <p>Sócio de empresas referência em gestão e consultoria, incluindo Máximus Contabilidade, GMSE Advocacia, Triad Consultoria, e outras.</p>
            </div>
          </div>
          <div className="expert-card">
            <img src={expert3} alt="Eduardo Costa" className="expert-image" />
            <div className="expert-info">
              <h3>Eduardo Costa</h3>
              <p className="expert-title">Advogado Tributarista</p>
              <p>Com sólida formação em gestão e finanças empresariais. É graduado em Direito, Contabilidade e Administração, com especializações em Auditoria e Perícia Contábil e Gestão Empresarial.</p>
              <p>Sócio-fundador do Grupo MSE, atua na estruturação e otimização financeira de empresas, com foco em planejamento tributário e consultoria estratégica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;