/**
 * Legal Thesis Section - Rita Salles Advocacia
 * Design: Display consolidated legal theses and foundations
 * Features: Card-based layout with legal references
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
    description: 'Verificação aritmética se o aumento da última faixa etária respeita os limites impostos pela ANS em relação às faixas anteriores.',
    reference: 'Resolução Normativa nº 63/03 da ANS',
  },
  {
    id: 'preavis',
    title: 'Dever de Informação e Pré-aviso',
    description: 'A operadora não pode descredenciar hospitais sem aviso individualizado de 30 dias ao beneficiário, especialmente em tratamentos em curso.',
    reference: 'Lei nº 9.656/98, Art. 17',
  },
  {
    id: 'equivalencia',
    title: 'Equivalência de Rede Assistencial',
    description: 'O novo prestador indicado deve possuir a mesma qualificação técnica (ex: UTI Neonatal) do hospital excluído para evitar risco ao paciente.',
    reference: 'Princípio da Boa-fé Objetiva',
  },
  {
    id: 'mitigacao',
    title: 'Mitigação de Reajustes em Planos Coletivos',
    description: 'Embora haja maior liberdade de negociação, os reajustes não podem ser arbitrários ou descolados da realidade do mercado.',
    reference: 'Jurisprudência consolidada',
  },
];

export default function LegalThesis() {
  return (
    <section id="teses" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas Teses Jurídicas Consolidadas
          </h2>
          <p className="text-lg text-foreground/70">
            Cada defesa é fundamentada em teses jurídicas sólidas e em jurisprudência consolidada. Conheça os pilares técnicos que sustentam nossas vitórias.
          </p>
        </div>

        {/* Theses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {theses.map((thesis) => (
            <div
              key={thesis.id}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{thesis.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{thesis.description}</p>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                {thesis.reference}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-lg p-12 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-8">Por Que Escolher Nossa Abordagem?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-accent mb-4">Análise Minuciosa</h4>
              <p className="text-foreground/70 leading-relaxed">
                Cada documento é analisado em detalhes para identificar todas as irregularidades e oportunidades legais.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-accent mb-4">Documentação Sólida</h4>
              <p className="text-foreground/70 leading-relaxed">
                Preparamos processos com provas robustas e fundamentação jurídica incontestável.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-accent mb-4">Condução Responsável</h4>
              <p className="text-foreground/70 leading-relaxed">
                Atuamos com ética, discrição e total sigilo, respeitando as normas da advocacia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
