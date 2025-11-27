const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Deep dive into your business, target audience, competitors, and current marketing efforts to identify opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Create a comprehensive marketing strategy aligned with your goals, complete with clear KPIs and timelines.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Execute',
      description: 'Launch campaigns across chosen channels with continuous monitoring, A/B testing, and creative optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Analyze performance data, refine strategies, and scale what works to maximize ROI and drive sustained growth.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-300 font-semibold text-sm">
            How I Work
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            A Proven <span className="text-gradient">Process</span> For Success
          </h2>
          <p className="text-lg text-gray-300">
            My structured approach ensures consistent results and transparent collaboration every step of the way.
          </p>
        </div>

        {/* Process Steps - Desktop Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-400"></div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto bg-dark-800 border-4 border-primary-500/50 rounded-full shadow-xl shadow-primary-500/20 flex items-center justify-center hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-110 group">
                      <div className="text-center">
                        <div className="text-primary-400 mb-2 transform group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                        <div className="text-5xl font-bold text-dark-700 group-hover:text-primary-600 transition-colors">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-cyan-400 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="card p-6">
                  <div className="text-primary-400 mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-100">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            Ready to start your growth journey?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
