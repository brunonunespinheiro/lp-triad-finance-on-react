import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="section section-gradient" id="testimonials">
      <div className="container">
        <div className="center-heading">
          <h2>O que nossos clientes dizem</h2>
          <p className="lead">Transformações reais de empresários que aplicaram nosso método</p>
        </div>
        <div className="testimonials-row">
          <div className="testimonial">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p>"Antes eu vendia bem, mas a empresa parecia no vermelho todo mês. Com a Triad, eu descobri onde estavam os furos e hoje consigo até fazer um planejamento para os próximos 6 meses."</p>
            <div className="client-info">
              <div>
                <h5>Lucas</h5>
                <p>Empresário no Maranhão</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p>"Eu não sabia o quanto podia retirar da empresa, nem se tinha lucro. Em 2 meses, eu consegui visualizar tudo e parei de comprometer o caixa."</p>
            <div className="client-info">
              <div>
                <h5>Carla</h5>
                <p>Loja de Serviços</p>
              </div>
            </div>
          </div>
        </div>
        <div className="center-cta">
          <a href="#contact" className="btn-primary">Quero resultados como esses</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;