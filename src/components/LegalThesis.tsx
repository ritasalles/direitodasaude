/**
 * Legal Thesis Section - Rita Salles Advocacia
 * Senior Refactor: Consolidated legal foundations and refined "Why Choose Us" section.
 * Optimized for mobile-first readability and technical precision.
 */

interface Thesis {
  id: string;
  title: string;
  description: string;
  reference: string;
}

const theses: Thesis[] = [
  {
    id: 'variacao',
    title: 'Cálculo da Variação Acumulada',
    description: 'Verificação técnica da compatibilidade dos reajustes por faixa etária com os critérios de proporcionalidade e com a variação acumulada entre as faixas, conforme estabelecido pela regulamentação da ANS, especialmente a RN nº 63/2003.',
    reference: 'RESOLUÇÃO NORMATIVA Nº 63/2003 – ANS',
  },
  {
    id: 'preavis',
    title: 'Dever de Informação e Pré-aviso',
    description: 'A alteração da rede assistencial deve observar o dever de informação adequada ao beneficiário, com comunicação prévia e garantia de continuidade do tratamento, especialmente em situações em curso, conforme a legislação aplicável e o entendimento consolidado da jurisprudência.',
    reference: 'LEI Nº 9.656/1998 E REGULAMENTAÇÃO DA ANS',
  },
  {
    id: 'equivalencia',
    title: 'Equivalência de Rede Assistencial',
    description: 'A substituição de prestadores deve assegurar capacidade técnico-assistencial equivalente, garantindo a continuidade e a segurança do tratamento, em observância aos princípios da boa-fé objetiva e da proteção do consumidor.',
    reference: 'PRINCÍPIO DA BOA-FÉ OBJETIVA E JURISPRUDÊNCIA CONSOLIDADA',
  },
  {
    id: 'mitigacao',
    title: 'Mitigação de Reajustes em Planos Coletivos',
    description: 'Embora os planos coletivos admitam maior liberdade contratual, os reajustes devem observar critérios atuariais legítimos, com transparência e vinculação à sinistralidade do grupo, não podendo ser arbitrários ou desproporcionais, conforme entendimento consolidado dos tribunais.',
    reference: 'JURISPRUDÊNCIA CONSOLIDADA DO STJ',
  },
];

export default function LegalThesis() {
  return (
    <section id="teses" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Nossas Teses Jurídicas Consolidadas
          </h2>
          <p className="text-lg text-foreground/70 border-l-4 border-accent pl-6 italic">
            Cada defesa é fundamentada em teses jurídicas sólidas e em jurisprudência consolidada. Conheça os pilares técnicos que sustentam nossas vitórias.
          </p>
        </div>

        {/* Theses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {theses.map((thesis) => (
            <div
              key={thesis.id}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{thesis.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">{thesis.description}</p>
              <div className="inline-block px-3 py-1 bg-accent/5 border border-accent/20 rounded-md">
                <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest">
                  {thesis.reference}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-12 text-center md:text-left">Por Que Escolher Nossa Abordagem?</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <h4 className="text-xl font-bold">Análise Minuciosa</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cada caso é analisado de forma individualizada, com exame técnico detalhado dos documentos e identificação de inconsistências contratuais, regulatórias e jurisprudenciais.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <h4 className="text-xl font-bold">Documentação Sólida</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Estruturação de demandas com base em provas consistentes e fundamentação jurídica robusta, alinhada à legislação e aos entendimentos mais recentes dos tribunais.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <h4 className="text-xl font-bold">Condução Responsável</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Atuação pautada pela ética, discrição e rigor técnico, com respeito às normas da advocacia e foco na segurança jurídica do cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
