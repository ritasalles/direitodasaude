/**
 * Footer Component - Rita Salles Advocacia
 * Senior Refactor: Optimized navigation links and professional legal footer.
 * Ensured consistency with new Termos de Uso page.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h3 className="font-extrabold text-2xl tracking-tight">Rita Salles <span className="text-accent">Advocacia</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Especialista em Direito da Saúde com foco exclusivo na defesa de beneficiários contra abusos de operadoras de planos de saúde.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-widest text-accent">Navegação</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#experiencia" className="text-slate-300 hover:text-white transition-colors">Nossa Experiência</a>
              </li>
              <li>
                <a href="#teses" className="text-slate-300 hover:text-white transition-colors">Teses Jurídicas</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="text-slate-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Legal Expertise */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-widest text-accent">Especialidades</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="text-slate-300">Reajuste Abusivo</li>
              <li className="text-slate-300">Negativa de Cobertura</li>
              <li className="text-slate-300">Descredenciamento</li>
              <li className="text-slate-300">Home Care e Medicamentos</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-widest text-accent">Contato</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">WhatsApp</p>
                <a href="tel:+5511921225287" className="text-slate-300 hover:text-white transition-colors">(11) 92122-5287</a>
              </li>
              <li>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">E-mail</p>
                <a href="mailto:contato@ritasallesadvocacia.com.br" className="text-slate-300 hover:text-white transition-colors">contato@ritasallesadvocacia.com.br</a>
              </li>
              <li>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">Endereço</p>
                <p className="text-slate-300 leading-relaxed">
                  Av. Paulista, 2028, 11º and., conj. 111<br />
                  Bela Vista, São Paulo/SP
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {currentYear} Rita Salles Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/politica-privacidade" className="text-slate-500 hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors">
              Termos de Uso e Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
