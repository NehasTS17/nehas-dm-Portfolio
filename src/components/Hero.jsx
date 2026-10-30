import { useTheme } from '../context/ThemeContext';
import Profile from '../assets/images/profile.png';
const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section 
      id="home"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center animate-float order-first md:order-none">
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: `0 0 40px rgba(var(--color-primary), 0.3)`
              }}
            >
              <img
                src={Profile}
                alt="Nehas TS - Digital Marketing Specialist"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 opacity-20"
                // style={{ backgroundColor: `rgb(var(--color-primary))` }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm{' '}
                <span style={{ color: `rgb(var(--color-primary))` }}>Nehas TS</span>
              </h1>
              <p className={`text-xl transition-all duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Digital Marketing Executive
              </p>
            </div>

            <p className={`text-lg leading-relaxed transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              As a Digital Marketing Executive, I help businesses grow through targeted and data-driven online marketing strategies. I focus on improving brand visibility, attracting qualified leads, and increasing revenue through effective digital marketing solutions. My expertise includes SEO, paid advertising, content marketing, and social media strategy to create impactful campaigns. By combining analytics, creativity, and continuous optimization, I deliver measurable results and sustainable business growth. 
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                style={{ backgroundColor: `rgb(var(--color-primary))` }}
              >
                Get Started
              </a>
              <a
                href="#about"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:shadow-lg ${
                  isDark 
                    ? 'border-slate-600 text-white hover:bg-slate-900' 
                    : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                }`}
                style={{ borderColor: `rgb(var(--color-primary))`, color: `rgb(var(--color-primary))` }}
              >
                Learn More
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-300 dark:border-slate-700">
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                  style={{ color: `rgb(var(--color-primary))` }}>
                  1+
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                  style={{ color: `rgb(var(--color-primary))` }}>
                  15+
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                  style={{ color: `rgb(var(--color-primary))` }}>
                  100%
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
