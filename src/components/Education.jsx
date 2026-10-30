import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Arul Anandar College',
      level: 'Postgraduate',
      score: '87%',
      year: '2022',
      description: 'Advanced studies in computer science with focus on software development and database management.',
    },
    {
      degree: 'Bachelor of Science - Computer Science (BSc)',
      institution: "St. Jude's College",
      level: 'Undergraduate',
      score: '76%',
      year: '2020',
      description: 'Foundation in computer science covering programming, data structures, and algorithms.',
    },
    {
      degree: '12th Standard - Computer Science',
      institution: 'ABC Matriculation Higher Secondary School',
      level: 'Higher Secondary',
      score: '76%',
      year: '2017',
      description: 'Higher secondary education with focus on computer science fundamentals.',
    },
    {
      degree: '10th Standard (SSLC)',
      institution: 'SR Matriculation School',
      level: 'Secondary',
      score: '72%',
      year: '2015',
      description: 'Secondary school education with focus on general subjects and foundational knowledge.',
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span style={{ color: `rgb(var(--color-primary))` }}>Qualifications</span>
          </h2>
          <p className={`text-lg transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            My academic journey in computer science and technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <article
              key={`${item.degree}-${item.year}`}
              className={`rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                isDark ? 'border-slate-800 bg-slate-900 hover:bg-slate-800' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: `rgba(var(--color-primary), 0.12)`,
                    color: `rgb(var(--color-primary))`
                  }}
                >
                  {item.level}
                </span>
                <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {item.year}
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {item.degree}
              </h3>

              <p className={`text-base font-semibold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.institution}
              </p>

              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>
                  {item.score}
                </span>
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Score
                </span>
              </div>

              <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
