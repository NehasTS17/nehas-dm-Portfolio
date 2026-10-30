import { useTheme } from '../context/ThemeContext';
import Aboutimg from '../assets/images/about.jpg';
const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    'Data-driven digital marketing strategies',
    'Performance optimization expertise',
    'Analytics and reporting proficiency',
    'Lead generation and conversion focus',
    'Cross-channel campaign management',
    'Continuous learning and innovation'
  ];

  return (
    <section 
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 animate-fade-in ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          About <span style={{ color: `rgb(var(--color-primary))` }}>Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div 
              className="relative w-80 h-full rounded-2xl overflow-hidden shadow-xl"
              style={{
                boxShadow: `0 0 40px rgba(var(--color-primary), 0.2)`
              }}
            >
              <img
                src={Aboutimg}
                alt="About Nehas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              With a passion for digital innovation and a data-driven mindset, I've spent years helping businesses navigate the complex world of digital marketing. My approach is rooted in understanding your audience, analyzing market trends, and executing strategies that deliver real, measurable results.
            </p>

            <p className={`text-lg leading-relaxed transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              I believe that great digital marketing is more than just tactics—it's about creating meaningful connections between brands and their audiences. Whether you're looking to increase brand awareness, generate qualified leads, or optimize your existing campaigns, I'm here to help you achieve your goals.
            </p>

            <div className="space-y-4">
              <h3 className={`text-xl font-bold transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                What I Bring to the Table
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: `rgb(var(--color-primary))` }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className={`text-base transition-all duration-300 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
