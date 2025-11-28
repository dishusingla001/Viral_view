const About = () => {
  const skills = [
    'Brand Strategy',
    'Performance Marketing',
    'Content Marketing',
    'Social Media Management',
  ];

  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full h-[400px] bg-primary-600/20 border border-primary-500/20 rounded-3xl overflow-hidden shadow-xl shadow-primary-500/20">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-32 h-32 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm font-medium">Your professional photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-600 rounded-full opacity-30 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-600 rounded-full opacity-30 blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-300 font-semibold text-sm">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transforming Ideas Into{' '}
              <span className="text-gradient">Marketing Success</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in digital marketing and brand strategy, 
              I help businesses achieve their growth goals through innovative, data-driven campaigns.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My approach combines creative thinking with analytical rigor, ensuring every 
              campaign delivers measurable results and sustainable growth for your brand.
            </p>

            {/* Skills/Expertise Tags */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 rounded-full font-medium text-sm hover:bg-primary-500/30 hover:border-primary-400/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="btn-secondary inline-block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
