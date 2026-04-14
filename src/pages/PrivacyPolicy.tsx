/**
 * Privacy Policy and Terms of Use - Rita Salles Advocacia
 * Senior Refactor: Standardizing legal compliance (LGPD) and ensuring mobile readability.
 */

export default function PrivacyPolicy() {
  const lastUpdated = "Abril de 2026";
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Termos de Uso e Privacidade</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Transparência e conformidade com a LGPD no tratamento dos seus dados.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12 text-slate-700 leading-relaxed">
          
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 pb-4 mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Documento Oficial</p>
            <p className="text-sm text-slate-500">Última atualização: {lastUpdated}</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Termos de Uso</h2>
            <p className="mb-4">
              Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. O conteúdo deste site é informativo e não substitui uma consulta jurídica individualizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Política de Privacidade (LGPD)</h2>
            <p className="mb-4">
              A Rita Salles Advocacia está comprometida com a segurança de seus dados. Coletamos informações como nome, e-mail e telefone exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder solicitações de análise inicial de casos.</li>
              <li>Prestar serviços jurídicos contratados.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Direitos do Titular</h2>
            <p className="mb-4">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/18), você tem o direito de acessar, corrigir, anonimizar ou excluir seus dados a qualquer momento através do e-mail: <strong>contato@ritasallesadvocacia.com.br</strong>.
            </p>
          </section>

          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Controlador de Dados:</h3>
            <p className="text-sm">Rita Salles Advocacia</p>
            <p className="text-sm">Av. Paulista, 2028, 11º and., conj. 111, Bela Vista, São Paulo/SP</p>
            <p className="text-sm">CNPJ: [Inserir CNPJ se aplicável]</p>
          </section>

          <div className="pt-8 text-center">
            <a href="/" className="text-accent font-bold hover:underline">← Voltar para a Página Inicial</a>
          </div>
        </div>
      </div>
    </div>
  );
}
