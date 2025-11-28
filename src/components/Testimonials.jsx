import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with this marketing expert was a game-changer for our startup. The strategic approach and attention to detail resulted in a 300% increase in qualified leads within just 3 months.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Exceptional results across all channels. The data-driven campaigns and creative strategies helped us achieve our best quarter yet. Highly recommend for any business looking to scale.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      content: 'The brand positioning work was phenomenal. Our social media presence went from zero to 100K+ engaged followers, and our revenue doubled. A true marketing professional.',
      avatar: '👩‍🎨',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'VP of Sales, Enterprise Solutions',
      content: 'The lead generation campaigns exceeded all expectations. We saw a consistent flow of high-quality B2B leads that converted at rates we had never seen before.',
      avatar: '👨‍💼',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-300 font-semibold text-sm">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Don't just take my word for it. Here's what clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Display */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-100">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden relative">
            <div className="card p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic text-center">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="text-5xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-center">
                  <div className="font-bold text-gray-100">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-dark-800 border border-primary-500/30 rounded-full shadow-md hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 flex items-center justify-center text-primary-400 hover:bg-dark-700 hover:border-primary-400/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-dark-800 border border-primary-500/30 rounded-full shadow-md hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 flex items-center justify-center text-primary-400 hover:bg-dark-700 hover:border-primary-400/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary-400 w-8' : 'bg-dark-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
