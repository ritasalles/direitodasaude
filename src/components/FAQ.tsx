import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Section - Rita Salles Advocacia
 * Senior Refactor: Standardized accordion with high-performance transitions.
 * Corrected legal content for clarity and technical accuracy.
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'reajuste-legal',
    question: 'Qual é o limite legal para reajuste de plano de saúde?',
    answer: 'Os reajustes devem observar critérios regulatórios e contratuais, especialmente no que se refere à proporcionalidade entre as faixas etárias e à variação acumulada ao longo do tempo, conforme normas da ANS. A análise de eventual abusividade depende do caso concreto, sendo considerados fatores como desproporcionalidade, ausência de transparência e incompatibilidade com os parâmetros regulatórios.',
  },
  {
    id: 'negacao-cobertura',
    question: 'O que fazer se meu plano negar cobertura?',
    answer: 'A operadora deve apresentar justificativa adequada, com base no contrato, na legislação e nas normas da ANS. Caso haja dúvida quanto à legalidade da negativa, é possível buscar revisão administrativa ou judicial, especialmente quando houver indícios de restrição indevida de cobertura.',
  },
  {
    id: 'descredenciamento',
    question: 'Posso ser prejudicado por descredenciamento de hospital?',
    answer: 'Alterações na rede assistencial devem ser previamente informadas ao beneficiário e não podem comprometer a continuidade do tratamento. Em determinadas situações, especialmente quando há tratamento em curso, a substituição deve garantir condições equivalentes de atendimento, conforme entendimento consolidado da jurisprudência.',
  },
  {
    id: 'custos-acao',
    question: 'Quanto custa uma ação judicial contra plano de saúde?',
    answer: 'Os custos variam conforme a complexidade do caso e o tipo de demanda. Realizamos uma análise inicial para avaliar a viabilidade jurídica da medida e orientar o cliente quanto às possíveis estratégias e condições de atuação.',
  },
  {
    id: 'prazo-acao',
    question: 'Qual é o prazo para entrar com uma ação?',
    answer: 'O prazo para propositura de ação varia conforme a natureza do direito discutido e as circunstâncias do caso concreto. Recomenda-se a análise individualizada para definição precisa do prazo aplicável e preservação dos direitos.',
  },
  {
    id: 'medida-liminar',
    question: 'O que é tutela de urgência (liminar)?',
    answer: 'Trata-se de medida judicial destinada a assegurar um direito de forma imediata, antes da decisão final do processo, quando presentes os requisitos legais. É frequentemente utilizada em situações que envolvem risco à saúde ou necessidade de continuidade de tratamento.',
  },
  {
    id: 'documentos-necessarios',
    question: 'Quais documentos são necessários para iniciar uma ação?',
    answer: 'Em geral, são relevantes documentos como contrato do plano de saúde, comprovantes de pagamento, comunicações da operadora (como negativas de cobertura ou avisos de reajuste), além de relatórios e prescrições médicas. A análise completa depende das particularidades de cada caso.',
  },
  {
    id: 'sucesso-garantido',
    question: 'Vocês garantem sucesso na ação?',
    answer: 'Não é possível garantir resultado em qualquer demanda judicial. Cada caso é analisado de forma criteriosa, com base na legislação aplicável e no entendimento dos tribunais, a fim de identificar as melhores estratégias jurídicas.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-foreground/70">
            Tire suas dúvidas sobre Direito da Saúde, reajustes, negativa de cobertura e descredenciamento.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
              >
                <h3 className="text-lg font-bold text-foreground pr-4 leading-snug">{item.question}</h3>
                <div className={`p-1 rounded-full bg-accent/10 transition-transform duration-300 ${openId === item.id ? 'rotate-180 bg-accent/20' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
              </button>

              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 py-5 bg-secondary/20 border-t border-border">
                    <p className="text-foreground/80 leading-relaxed text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-slate-50 p-12 rounded-2xl border border-slate-100">
          <p className="text-xl font-bold text-foreground mb-8">
            Ainda tem dúvidas? Entre em contato com nossos especialistas.
          </p>
          <a 
            href="#contato" 
            className="btn-gold inline-block px-12 py-4 rounded-lg font-extrabold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Solicitar Análise Inicial
          </a>
        </div>
      </div>
    </section>
  );
}
