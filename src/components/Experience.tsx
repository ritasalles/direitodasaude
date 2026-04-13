/**
 * Experience Section - Rita Salles Advocacia
 * Design: Showcase successful cases with compelling narratives
 * Features: Case studies with problem, legal thesis, and results
 */

interface CaseStudy {
  id: string;
  title: string;
  result: string;
  problem: string;
  thesis: string;
  resultDetails: string;
  badge: string;
}

const cases: CaseStudy[] = [
  {
    id: 'reajuste',
    title: 'Reajuste Abusivo por Faixa Etária',
    result: '131,5% reduzido para 59,69%',
    problem: 'Beneficiária de plano coletivo por adesão foi surpreendida com um aumento de 131,5% ao completar 59 anos, tornando a mensalidade financeiramente insustentável.',
    thesis: 'Questionamento da validade do reajuste com base na Resolução Normativa nº 63/03 da ANS, que limita a variação acumulada entre as faixas etárias, e no Estatuto do Idoso.',
    resultDetails: 'A justiça paulista reconheceu o excesso, determinando a redução do reajuste para 59,69%, garantindo a manutenção do equilíbrio contratual e a permanência da segurada no plano.',
    badge: 'Beneficiária com 59 anos',
  },
  {
    id: 'descredenciamento',
    title: 'Descredenciamento de Hospital em Urgência',
    result: 'Medida liminar obtida em urgência',
    problem: 'Gestante de alto risco (38 semanas) foi informada, às vésperas do parto, sobre o descredenciamento repentino do hospital e da equipe médica que realizou todo o seu pré-natal.',
    thesis: 'Aplicação do Art. 17 da Lei nº 9.656/98, que exige a comunicação prévia de 30 dias para substituição de prestadores e a garantia de serviço equivalente, cumulado com a proteção à boa-fé objetiva e à segurança materno-fetal.',
    resultDetails: 'Obtenção de medida liminar (tutela de urgência) para obrigar a operadora a custear integralmente a internação e o parto no hospital original, preservando a continuidade do cuidado pela equipe de confiança da paciente.',
    badge: 'Gestante de alto risco com 38 semanas',
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resultados que Reafirmam Nosso Compromisso
          </h2>
          <p className="text-lg text-foreground/70">
            Cada caso é uma vitória pela dignidade e pela saúde de nossos clientes. Conheça histórias reais de beneficiários que recuperaram seus direitos.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
            >
              {/* Result Badge */}
              <div className="mb-6">
                <p className="text-accent font-bold text-2xl md:text-3xl mb-2">
                  {caseStudy.result}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-foreground/60 font-medium">{caseStudy.badge}</p>
              </div>

              {/* Problem */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-bold text-foreground mb-2">O Problema</h4>
                <p className="text-foreground/70 leading-relaxed">{caseStudy.problem}</p>
              </div>

              {/* Legal Thesis */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-bold text-foreground mb-2">Tese Jurídica</h4>
                <p className="text-foreground/70 leading-relaxed">{caseStudy.thesis}</p>
              </div>

              {/* Result */}
              <div>
                <h4 className="font-bold text-foreground mb-2">O Resultado</h4>
                <p className="text-foreground/70 leading-relaxed">{caseStudy.resultDetails}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6">
            Seu caso pode ser o próximo. Deseja analisar a legalidade do reajuste ou da negativa do seu plano?
          </p>
          <a href="#contato" className="btn-gold inline-block px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
