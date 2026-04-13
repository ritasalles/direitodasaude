/**
 * Footer Component - Rita Salles Advocacia
 * Design: Professional footer with links and copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Rita Salles Advocacia</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Especialista em Direito da Saúde com mais de 8 anos de experiência defendendo beneficiários contra operadoras de planos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#experiencia" className="text-background/80 hover:text-background transition-colors">
                  Nossa Experiência
                </a>
              </li>
              <li>
                <a href="#teses" className="text-background/80 hover:text-background transition-colors">
                  Teses Jurídicas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Reajuste Abusivo
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Negativa de Cobertura
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Descredenciamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+5511921225287"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  (11) 92122-5287
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@ritasallesadvocacia.com.br"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  contato@ritasallesadvocacia.com.br
                </a>
              </li>
              <li className="text-background/80">
                Avenida Paulista, 2028, 11º Andar
              </li>
              <li className="text-background/80 text-sm">
                Bela Vista, São Paulo/SP
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; {currentYear} Rita Salles Advocacia. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/politica-privacidade" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
