import React, { useState, useEffect } from 'react';

const CtaSection = () => {
  // Estado para o contador regressivo
  const [countdown, setCountdown] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  // Efeito para iniciar o contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevState => {
        let { hours, minutes, seconds } = prevState;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            
            if (hours > 0) {
              hours--;
            } else {
              // Reset countdown quando chegar a zero
              hours = 47;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  // Função para formatar o tempo com zero à esquerda
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <section className="section section-gradient" id="contact">
      <div className="container">
        <div className="cta-box">
          <h2>Quero organizar o financeiro da minha empresa</h2>
          <p className="lead">Clique abaixo e fale com a equipe do Paulo Moura.</p>
          <p className="limited-offer">
            <i className="fas fa-clock"></i> 
            <span className="countdown-text">Oferta por tempo limitado: </span>
            <strong className="countdown-time">
              {formatTime(countdown.hours)}h {formatTime(countdown.minutes)}m {formatTime(countdown.seconds)}s
            </strong>
          </p>
          <a href="#" className="btn-primary btn-large">
            <i className="fas fa-check-circle"></i> Garantir minha vaga com diagnóstico grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;