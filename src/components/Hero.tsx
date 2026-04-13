/**
 * Hero Section - Rita Salles Advocacia
 * Design: Professional hero with text in box on left and image on right
 * Features: Responsive layout, compelling headline, multiple CTAs
 */

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text Box */}
          <div className="bg-white border-l-4 border-accent p-8 md:p-10 lg:p-12 shadow-sm">
            <p className="text-accent font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
              Direito da Saúde
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sua Saúde é um Direito
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
              Reajustes abusivos, negativa de cobertura, descredenciamento de hospitais. Você não está sozinho. Com mais de 8 anos de experiência em Direito da Saúde, defendemos beneficiários contra operadoras de planos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10 py-8 border-y border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">8+</p>
                <p className="text-foreground/70 text-xs md:text-sm mt-2">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">100+</p>
                <p className="text-foreground/70 text-xs md:text-sm mt-2">Beneficiários Defendidos</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">15+</p>
                <p className="text-foreground/70 text-xs md:text-sm mt-2">Anos em Advocacia</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('experiencia')}
                className="btn-gold px-6 md:px-8 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all"
              >
                Ver Casos de Sucesso
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-outline-gold px-6 md:px-8 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all"
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full md:min-h-96 lg:min-h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330535777/fTMRKT8iPzDrzNpUA9nZT8/IMG_0284_5efa50a2.webp"
              alt="Rita Salles - Advogada especialista em Direito da Saúde"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
