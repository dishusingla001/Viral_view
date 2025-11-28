const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-accent-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      <div className="container-custom px-6 md:px-12 pt-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Helping Brands{' '}
              <span className="text-gradient">Grow</span> with Strategic Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming businesses through data-driven strategies, creative campaigns, 
              and results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Work With Me
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary"
              >
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dark-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-400">5+</div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-400">100+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in hidden md:block">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Placeholder for hero image/illustration */}
              <div className="w-full h-full bg-primary-600 rounded-3xl shadow-2xl shadow-primary-500/30 transform hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <p className="text-lg font-semibold">Replace with your hero image</p>
                  <p className="text-sm opacity-90 mt-2">Dashboard mockup or brand visual</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-dark-800 border border-primary-500/30 rounded-xl shadow-xl shadow-primary-500/20 p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-200">+250% ROI</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-dark-800 border border-accent-500/30 rounded-xl shadow-xl shadow-accent-500/20 p-4 animate-pulse delay-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-200">10M+ Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
