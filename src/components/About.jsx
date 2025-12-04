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
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl shadow-white/10">
                {/* Professional photo */}
                <img
                  src="/main.png"
                  alt="Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm">
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
                    className="px-5 py-2 bg-white/20 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/30 hover:border-white/50 transition-colors duration-300"
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
