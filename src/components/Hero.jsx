import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Helping Brands Grow with Strategic Marketing';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950"
    >
      <div className="container-custom px-6 md:px-12 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              {displayText.split('Grow').map((part, index) => {
                if (index === 0) return <span key={index}>{part}</span>;
                return <span key={index}><span className="text-gradient">Grow</span>{part}</span>;
              })}
              <span className="animate-pulse">|</span>
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
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in hidden md:block">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Hero Image */}
              <div className="w-full h-full rounded-3xl shadow-2xl shadow-white/10 transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                <img
                  src="https://cdn.corporatefinanceinstitute.com/assets/marketing-strategy-1024x683.jpeg"
                  alt="Marketing Strategy"
                  className="w-full h-full object-cover"
                />
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
