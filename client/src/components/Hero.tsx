/**
 * Hero Section - Rita Salles Advocacia
 * Design: Professional hero with high-quality background image and call-to-action
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
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330535777/fTMRKT8iPzDrzNpUA9nZT8/hero-advocacia-HyXMwmWFKVHcQ2vbABR23s.webp"
          alt="Escritório de advocacia profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-lg mb-4 uppercase tracking-wide">
            Direito da Saúde
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua Saúde é um Direito
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Reajustes abusivos, negativa de cobertura, descredenciamento de hospitais. Você não está sozinho. Com mais de 8 anos de experiência em Direito da Saúde, defendemos beneficiários contra operadoras de planos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">8+</p>
              <p className="text-white/80 text-sm md:text-base mt-2">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">100+</p>
              <p className="text-white/80 text-sm md:text-base mt-2">Beneficiários Defendidos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-white/80 text-sm md:text-base mt-2">Anos em Advocacia</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('experiencia')}
              className="btn-gold px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              Ver Casos de Sucesso
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-outline-gold px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
