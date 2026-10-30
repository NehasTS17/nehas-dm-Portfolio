import { useTheme } from '../context/ThemeContext';

const Specializations = () => {
  const { isDark } = useTheme();

const specializations = [
  { title: 'SEO & Organic Growth', icon: '🔍' },
  { title: 'Lead Generation', icon: '🎯' },
  { title: 'Content Creation', icon: '✍️' },
  { title: 'Campaign Coordination', icon: '📢' },
  { title: 'Social Media Management', icon: '📲' },
  { title: 'Performance Monitoring', icon: '📈' },
  { title: 'Email Marketing', icon: '📧' },
];

  return (
    <section 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          I <span style={{ color: `rgb(var(--color-primary))` }}>Specialize</span> In
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer animate-zoom-in ${
                isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                borderLeft: `4px solid rgb(var(--color-primary))`
              }}
            >
              <div className="text-5xl mb-4">{spec.icon}</div>
              <h3 className={`text-xl font-bold transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {spec.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
