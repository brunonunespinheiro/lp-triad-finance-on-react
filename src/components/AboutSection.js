import React from 'react';

const AboutSection = () => {
  return (
    <section className="section section-about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <div className="section-badge">Entenda Nossa Proposta</div>
            <h2 className="section-title">
              A Triad On – Finance não é um curso.<br />
              <span className="highlight">É uma transformação real.</span>
            </h2>
          </div>
          
          <div className="about-question">
            <p className="lead question-text">
              Você já tentou planilhas, cursos, dicas no Instagram, softwares... <br />
              Mas ainda sente que não tem controle financeiro real?
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="card-content">
                <h3>Consultoria Estratégica</h3>
                <p>A Triad On – Finance é uma consultoria de 3 meses para empresas que já cresceram, mas ainda não têm um controle financeiro eficiente.</p>
              </div>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="card-content">
                <h3>Metodologia Clara</h3>
                <p>Com um passo a passo claro, você estrutura o financeiro da sua empresa, aprende a analisar dados e tomar decisões estratégicas baseadas em indicadores — e não só no "feeling".</p>
              </div>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-fire-extinguisher"></i>
              </div>
              <div className="card-content">
                <h3>Resultados Reais</h3>
                <p>O que oferecemos é estrutura, clareza e domínio. Para que você pare de apagar incêndios e passe a crescer com inteligência.</p>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <a href="#contact" className="btn-primary btn-large">
              <i className="fas fa-arrow-right"></i> Quero transformar minha gestão financeira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;