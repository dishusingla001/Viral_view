const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Growth Campaign',
      category: 'Performance Marketing',
      result: '+250% ROAS',
      description: 'Scaled Facebook & Google Ads for fashion brand, achieving 2.5x return on ad spend.',
      tags: ['Paid Ads', 'E-Commerce', 'Conversion Optimization'],
      image: '🛍️',
    },
    {
      title: 'SaaS Lead Generation',
      category: 'Content Marketing',
      result: '500+ Qualified Leads',
      description: 'Built content strategy that generated over 500 MQLs in 6 months for B2B SaaS.',
      tags: ['SEO', 'Content Strategy', 'Lead Gen'],
      image: '💼',
    },
    {
      title: 'Brand Repositioning',
      category: 'Brand Strategy',
      result: '3x Brand Awareness',
      description: 'Complete brand overhaul that tripled brand recognition and improved market positioning.',
      tags: ['Branding', 'Strategy', 'Market Research'],
      image: '🎯',
    },
    {
      title: 'Social Media Turnaround',
      category: 'Social Media',
      result: '150K+ Followers',
      description: 'Grew Instagram following from 5K to 150K+ with engaging content and influencer partnerships.',
      tags: ['Instagram', 'Community', 'Influencer Marketing'],
      image: '📱',
    },
    {
      title: 'Email Automation Success',
      category: 'Email Marketing',
      result: '+180% Revenue',
      description: 'Implemented email automation flows that increased email revenue by 180%.',
      tags: ['Automation', 'Retention', 'Lifecycle Marketing'],
      image: '✉️',
    },
    {
      title: 'Startup Launch Campaign',
      category: 'Full-Service Marketing',
      result: '$1M+ ARR Year 1',
      description: 'End-to-end marketing strategy for tech startup, reaching $1M+ ARR in first year.',
      tags: ['Go-to-Market', 'Growth', 'Multi-Channel'],
      image: '🚀',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-300 font-semibold text-sm">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Projects That <span className="text-gradient">Delivered Impact</span>
          </h2>
          <p className="text-lg text-gray-300">
            Real results from real campaigns. Here's a selection of successful projects I've led.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-600 via-accent-600 to-cyan-500 flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary-400">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-accent-500/20 border border-accent-500/30 text-accent-300 rounded-full text-xs font-bold">
                    {project.result}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-dark-700 border border-dark-600 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more detailed case studies and results?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
