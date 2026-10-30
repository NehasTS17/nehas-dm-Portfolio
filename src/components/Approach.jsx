import { useTheme } from '../context/ThemeContext';

const Approach = () => {
  const { isDark } = useTheme();

  const approachSteps = [
    {
      number: '01',
      title: 'Research & Competitor Analysis',
      description: 'I start by conducting in-depth research and analyzing your competitors to understand market trends and opportunities.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Based on insights, I develop a customized strategy aligned with your business objectives and target audience.'
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description: 'I implement the strategy with precision, managing all channels and ensuring consistent brand messaging.'
    },
    {
      number: '04',
      title: 'Continuous Optimization',
      description: 'Monitoring performance metrics and making data-driven adjustments to maximize ROI and results.'
    },
    {
      number: '05',
      title: 'Transparent Reporting',
      description: 'Regular reports and updates keep you informed about campaign performance and progress towards goals.'
    },
  ];

  return (
    <section 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          My <span style={{ color: `rgb(var(--color-primary))` }}>Approach</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className={`text-lg text-center transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            I believe in data-backed decisions and consistent optimization for long-term growth. Every strategy is built on research, insights, and a commitment to delivering measurable results.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {approachSteps.map((step, index) => (
            <div key={index} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Number */}
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                  style={{
                    backgroundColor: `rgba(var(--color-primary), 0.7)`,
                    boxShadow: `0 0 20px rgba(var(--color-primary), 0.3)`
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-lg transition-all duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < approachSteps.length - 1 && (
                <div
                  className="absolute left-8 w-1 h-20 -ml-8"
                  style={{
                    background: `linear-gradient(180deg, rgba(var(--color-primary), 0.5) 0%, rgba(var(--color-primary), 0.1) 100%)`,
                    marginTop: '80px',
                    display: 'none'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Key Point */}
        <div className={`mt-16 p-8 rounded-xl text-center border-l-4 transition-all duration-300 ${
          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
        }`}
        style={{ borderLeftColor: `rgb(var(--color-primary))` }}
        >
          <p className={`text-xl font-semibold transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            💡 <span style={{ color: `rgb(var(--color-primary))` }}>Success is a partnership</span>
          </p>
          <p className={`mt-2 transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Your success is my success. I work closely with you at every step to ensure we're moving towards your goals together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
