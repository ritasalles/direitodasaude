import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Rita Salles Advocacia
 * Senior Refactor: Proportional logo sizing and mobile-first navigation.
 * Logo height is now synchronized with CTA button scale for visual harmony.
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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Sized proportionally to the CTA button */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330535777/fTMRKT8iPzDrzNpUA9nZT8/logotipo2026_87163b46.png"
              alt="Rita Salles Advocacia"
              className="h-20 md:h-24 w-auto transition-all"
              title="Rita Salles Advocacia"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('teses')}
              className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
            >
              Teses
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-gold px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Análise Inicial
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('experiencia')}
                className="text-left px-4 py-2 text-lg font-medium hover:bg-secondary rounded-lg"
              >
                Nossa Experiência
              </button>
              <button
                onClick={() => scrollToSection('teses')}
                className="text-left px-4 py-2 text-lg font-medium hover:bg-secondary rounded-lg"
              >
                Teses Jurídicas
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-2 text-lg font-medium hover:bg-secondary rounded-lg"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-gold mx-4 py-3 rounded-lg text-center font-bold"
              >
                Solicitar Análise Inicial
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
