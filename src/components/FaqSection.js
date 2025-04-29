import React, { useState } from 'react';

const FaqSection = () => {
  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Já no 1º mês, com o diagnóstico e a conciliação financeira, você começará a identificar desperdícios e gargalos."
    },
    {
      question: "Eu preciso ter sistema financeiro?",
      answer: "Não. Se você só tiver extrato bancário, conseguimos aplicar a metodologia."
    },
    {
      question: "A consultoria é individual?",
      answer: "Sim. Cada empresa recebe um atendimento personalizado com reuniões quinzenais e materiais exclusivos."
    },
    {
      question: "Tem suporte durante a jornada?",
      answer: "Sim. Nosso time estará com você no WhatsApp e nas reuniões para tirar dúvidas e acompanhar a implementação."
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="center-heading">
          <h2>Perguntas Frequentes</h2>
          <p className="lead">Tire suas dúvidas sobre a Triad On – Finance</p>
        </div>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-header" onClick={() => toggleFaq(index)}>
                <h3>{item.question}</h3>
                <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
              </div>
              <div className={`faq-body ${activeIndex === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;