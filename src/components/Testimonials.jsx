import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import user from '../assets/images/user.png';
const Testimonials = () => {
  const { isDark } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: '"Nehas helped us scale our ad campaigns profitably and improved our lead quality significantly. Her data-driven approach and strategic insights made all the difference."',
      clientName: 'John Doe',
      clientTitle: 'CEO, E-commerce Brand',
      clientImage: user,
      rating: 5
    },
    {
      id: 2,
      text: '"Working with Nehas on our SEO strategy was transformative. Our organic traffic increased by 250% in just 6 months. Highly recommended!"',
      clientName: 'Suriya',
      clientTitle: 'Marketing Director, SaaS Company',
      clientImage: user,
      rating: 5
    },
    {
      id: 3,
      text: '"Nehas\'s content marketing strategy helped us establish authority in our niche and build genuine connections with our audience."',
      clientName: 'Athira',
      clientTitle: 'Founder, Digital Agency',
      clientImage: user,
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          What Clients <span style={{ color: `rgb(var(--color-primary))` }}>Say</span>
        </h2>

        {/* Testimonial Card */}
        <div
          className={`p-10 rounded-2xl transition-all duration-500 animate-slide-up ${
            isDark ? 'bg-slate-800' : 'bg-white'
          }`}
          style={{
            borderTop: `4px solid rgb(var(--color-primary))`,
            boxShadow: `0 10px 40px rgba(var(--color-primary), 0.1)`
          }}
        >
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5" style={{ color: `rgb(var(--color-primary))` }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className={`text-lg leading-relaxed mb-8 transition-all duration-300 ${
            isDark ? 'text-slate-200' : 'text-slate-800'
          }`}>
            {testimonial.text}
          </p>

          {/* Client Info */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-300 dark:border-slate-700">
            <img
              src={testimonial.clientImage}
              alt={testimonial.clientName}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className={`font-bold transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {testimonial.clientName}
              </p>
              <p className={`text-sm transition-all duration-300 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {testimonial.clientTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevTestimonial}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-8' 
                    : ''
                }`}
                style={{
                  backgroundColor: index === currentTestimonial 
                    ? `rgb(var(--color-primary))` 
                    : isDark ? '#475569' : '#cbd5e1'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
