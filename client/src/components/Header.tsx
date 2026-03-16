import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Rita Salles Advocacia
 * Design: Professional law firm header with large, high-resolution logo
 * Features: Responsive navigation, sticky positioning, mobile menu
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330535777/fTMRKT8iPzDrzNpUA9nZT8/logotipo2026_87163b46.png"
              alt="Rita Salles Advocacia - Direito da Saúde"
              className="h-64 w-auto"
              title="Rita Salles Advocacia"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              Nossa Experiência
            </button>
            <button
              onClick={() => scrollToSection('teses')}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              Teses Jurídicas
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-gold px-6 py-2 rounded-lg"
            >
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => scrollToSection('experiencia')}
                className="text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Nossa Experiência
              </button>
              <button
                onClick={() => scrollToSection('teses')}
                className="text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Teses Jurídicas
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-gold mx-4 px-4 py-2 rounded-lg w-auto"
              >
                Agendar Consulta
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
