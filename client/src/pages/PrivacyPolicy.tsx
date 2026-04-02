/**
 * Privacy Policy Page - Rita Salles Advocacia
 * Design: Professional privacy policy page with clear sections
 * Features: LGPD compliant, responsive layout, accessible content
 */

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-gray-300 text-lg">
            Informações sobre como coletamos, usamos e protegemos seus dados pessoais
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <p className="text-gray-600 mb-8 text-sm">
            Última atualização: Abril de 2026
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Identificação do Controlador de Dados
            </h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="mb-2"><strong>Controlador:</strong> Rita Salles Advocacia</p>
              <p className="mb-2"><strong>Endereço:</strong> Avenida Paulista, 2028, 11º Andar, Conjunto 111, Bela Vista, São Paulo/SP</p>
              <p className="mb-2"><strong>E-mail:</strong> contato@ritasallesadvocacia.com.br</p>
              <p><strong>Telefone:</strong> (11) 92122-5287</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. Informações Coletadas
            </h2>
            <p className="text-gray-700 mb-6">
              Coletamos os seguintes tipos de dados dos usuários:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Dados de Identificação:</strong> Nome completo, CPF, e-mail, telefone, endereço (quando aplicável)
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Dados Fornecidos Voluntariamente:</strong> Informações inseridas em formulários de contato, mensagens, participação em eventos
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do usuário e analisar o desempenho do site
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. Finalidade do Tratamento dos Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Utilizamos seus dados para as seguintes finalidades:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Prestação de Serviços Jurídicos:</strong> Contato, elaboração de propostas, execução de contratos, cumprimento de obrigações legais
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Comunicação:</strong> Envio de newsletters, informativos, artigos jurídicos e convites para eventos
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Marketing:</strong> Envio de publicidade direcionada (com seu consentimento)
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Melhoria do Site:</strong> Análise de dados para otimizar a experiência do usuário
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Cumprimento de Obrigações Legais:</strong> Atendimento a determinações judiciais e requisições de autoridades competentes
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Base Legal para o Tratamento
            </h2>
            <p className="text-gray-700 mb-6">
              O tratamento de seus dados é baseado nas seguintes bases legais (conforme Lei Geral de Proteção de Dados - LGPD):
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Consentimento:</strong> Quando você manifesta livre e informada concordância com o tratamento de seus dados
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Cumprimento de Obrigação Legal:</strong> Quando necessário para cumprir obrigações legais
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Execução de Contrato:</strong> Quando necessário para executar um contrato do qual você é parte
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Legítimo Interesse:</strong> Quando necessário para atender aos interesses legítimos da nossa organização
                </div>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Prestadores de Serviços:</strong> Empresas de hospedagem, marketing, análise de dados (com garantias de proteção)
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Parceiros:</strong> Outros profissionais e consultores (quando necessário para prestação de serviços)
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>
                  <strong>Autoridades Públicas:</strong> Em cumprimento de obrigações legais e requisições judiciais
                </div>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Segurança dos Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Adotamos medidas técnicas e administrativas para proteger seus dados:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Criptografia de dados sensíveis</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Controles de acesso restrito</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Firewalls e sistemas de proteção</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Backups regulares</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Auditorias periódicas de segurança</div>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Direitos dos Titulares dos Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Conforme a LGPD, você tem o direito de:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Confirmar se seus dados estão sendo tratados</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Acessar seus dados pessoais</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Corrigir dados incompletos ou inexatos</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Solicitar anonimização, bloqueio ou eliminação de dados</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Portabilidade de seus dados para outro fornecedor</div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <div>Revogar seu consentimento a qualquer momento</div>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              Para exercer qualquer desses direitos, entre em contato conosco através do e-mail: <strong>contato@ritasallesadvocacia.com.br</strong>
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Tempo de Retenção dos Dados
            </h2>
            <p className="text-gray-700">
              Seus dados serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta política e conforme exigido pela lei. Após esse período, os dados serão eliminados ou anonimizados.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Alterações na Política de Privacidade
            </h2>
            <p className="text-gray-700">
              Esta política pode ser atualizada periodicamente. Notificaremos você sobre alterações significativas através do e-mail ou publicação no site. Recomendamos que você revise esta política regularmente.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              10. Canal de Contato
            </h2>
            <p className="text-gray-700 mb-6">
              Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos seus dados, entre em contato conosco:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="mb-2"><strong>E-mail:</strong> contato@ritasallesadvocacia.com.br</p>
              <p className="mb-2"><strong>Telefone:</strong> (11) 92122-5287</p>
              <p><strong>Endereço:</strong> Avenida Paulista, 2028, 11º Andar, Conjunto 111, Bela Vista, São Paulo/SP</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-gray-600 text-sm">
              Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018 e com a Constituição Federal Brasileira.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
