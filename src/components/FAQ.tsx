/**
 * FAQ Section - Rita Salles Advocacia
 * Design: Accordion-style FAQ with common questions about health law
 * Features: Expandable Q&A, responsive layout
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'reajuste-legal',
    question: 'Qual é o limite legal para reajuste de plano de saúde?',
    answer: 'A Resolução Normativa nº 63/03 da ANS estabelece limites para reajustes por faixa etária. O reajuste não pode ser arbitrário e deve respeitar a variação acumulada entre as faixas. Reajustes acima de 131,5% em uma única faixa etária são frequentemente considerados abusivos.',
  },
  {
    id: 'negacao-cobertura',
    question: 'O que fazer se meu plano negar cobertura?',
    answer: 'A negativa de cobertura deve ser justificada pela operadora. Se você discordar, pode solicitar revisão administrativa ou judicial. Muitas negativas são consideradas abusivas quando não há justificativa legal válida. Recomendamos análise jurídica imediata.',
  },
  {
    id: 'descredenciamento',
    question: 'Posso ser prejudicado por descredenciamento de hospital?',
    answer: 'Sim. A Lei nº 9.656/98, Art. 17, exige aviso prévio de 30 dias para descredenciamento. Se você está em tratamento, a operadora deve garantir continuidade do cuidado. Descredenciamentos abruptos, especialmente em casos urgentes, são frequentemente ilegais.',
  },
  {
    id: 'custos-acao',
    question: 'Quanto custa uma ação judicial contra operadora de plano?',
    answer: 'Os custos variam conforme o tipo de ação. Oferecemos consulta inicial gratuita para avaliar seu caso e discutir as opções de honorários. Muitos casos são viáveis e podem resultar em economia significativa para o cliente.',
  },
  {
    id: 'prazo-acao',
    question: 'Qual é o prazo para entrar com uma ação?',
    answer: 'O prazo depende do tipo de ação. Para ações de cobrança, o prazo é de 5 anos. Para ações de reparação de danos, o prazo é de 3 anos. É importante agir rapidamente para preservar provas e direitos.',
  },
  {
    id: 'medida-liminar',
    question: 'O que é medida liminar ou tutela de urgência?',
    answer: 'É uma decisão judicial rápida que protege seus direitos enquanto o processo está em andamento. Pode obrigar a operadora a cobrir um tratamento ou a manter um hospital credenciado, por exemplo. É especialmente útil em casos urgentes.',
  },
  {
    id: 'documentos-necessarios',
    question: 'Quais documentos preciso para iniciar uma ação?',
    answer: 'Documentos essenciais incluem: contrato do plano, comprovante de pagamento, correspondência da operadora (negativa de cobertura, aviso de reajuste, etc.), recibos médicos e comprovantes de tratamento. Quanto mais documentação, melhor.',
  },
  {
    id: 'sucesso-garantido',
    question: 'Vocês garantem sucesso na ação?',
    answer: 'Nenhum advogado pode garantir resultado. No entanto, analisamos cada caso cuidadosamente antes de aceitar. Nosso histórico mostra alta taxa de sucesso em casos de reajuste abusivo e negativa de cobertura infundada.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 bg-secondary/20 border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6">
            Ainda tem dúvidas? Entre em contato com nossos especialistas.
          </p>
          <a href="#contato" className="btn-gold inline-block px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
