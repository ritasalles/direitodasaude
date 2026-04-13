/**
 * Hero Section - Rita Salles Advocacia
 * Senior Refactor: Balanced layout for both text and image containers.
 * Implemented proportional height and mobile-first stacking.
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background pt-12 pb-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Grid Container - Flex-col on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-8 lg:gap-12">
          
          {/* Left Content - Text Box */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-white border-l-4 border-accent p-8 md:p-12 shadow-lg rounded-r-lg z-10">
            <div>
              <p className="text-accent font-bold text-sm md:text-base mb-4 uppercase tracking-widest">
                Direito da Saúde
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                Sua Saúde é um Direito, <br className="hidden md:block" /> Não um Favor.
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
                Reajustes abusivos, negativa de cobertura e descredenciamento. Com mais de 8 anos de experiência exclusiva em Direito da Saúde, defendemos beneficiários contra abusos de operadoras.
              </p>

              {/* Stats - Grid layout for data points */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-slate-100 mb-10">
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-accent">8+</p>
                  <p className="text-foreground/60 text-[10px] md:text-xs mt-1 font-semibold uppercase tracking-tighter">Anos de Foco</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-accent">100+</p>
                  <p className="text-foreground/60 text-[10px] md:text-xs mt-1 font-semibold uppercase tracking-tighter">Casos Ativos</p>
                </div>
                <div className="text-center md:text-left border-r-0">
                  <p className="text-2xl md:text-3xl font-bold text-accent">15+</p>
                  <p className="text-foreground/60 text-[10px] md:text-xs mt-1 font-semibold uppercase tracking-tighter">Total Carreira</p>
                </div>
              </div>
            </div>

            {/* CTAs - Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-gold w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-base shadow-md hover:shadow-xl transition-all"
              >
                Solicitar Análise Inicial
              </button>
              <button
                onClick={() => scrollToSection('experiencia')}
                className="btn-outline-gold w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-base hover:bg-accent/5 transition-all"
              >
                Ver Casos de Sucesso
              </button>
            </div>
          </div>

          {/* Right Image - Synchronized height with the left box on desktop */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative group">
            <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330535777/fTMRKT8iPzDrzNpUA9nZT8/IMG_0284_5efa50a2.webp"
                alt="Rita Salles - Especialista em Direito da Saúde"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"></div>
              <div className="absolute bottom-6 left-6 text-white md:hidden">
                <p className="font-bold text-xl">Dra. Rita Salles</p>
                <p className="text-sm opacity-90">Especialista em Direito da Saúde</p>
              </div>
            </div>
            
            {/* Design Element - Decorative floating accent */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
