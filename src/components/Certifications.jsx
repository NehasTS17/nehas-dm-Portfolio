import { useTheme } from '../context/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();

  const certifications = [
    {
      id: 1,
      name: 'Digital Marketing Internship',
      issuer: 'Infocuz Technologies',
      period: '04/2026 – 09/2026',
      status: 'Completed',
      description: 'Worked on SEO, social media marketing (SMM), WordPress website content management, and creative marketing tasks using Canva and InShot to improve brand visibility and audience engagement.',
      tags: ['SEO', 'SMM', 'WordPress', 'Canva', 'InShot']
    },
    {
      id: 2,
      name: 'Diploma in Computer Application (DCA)',
      issuer: 'Trinity Software Technologies (ISO 9001-2008 Certified)',
      period: '2017',
      status: 'Second Class',
      description: 'Six-month diploma program covering essential computer applications. Secured Second Class with a score of 176/200 in the examination conducted by Trinity Software Technologies, Nithiravilai.',
      tags: ['MS Office', 'Photoshop', 'Illustrator', 'InDesign', 'Tally', 'Tamil Typing', 'English Typing']
    },
    {
      id: 3,
      name: 'Certificate of Merit - 52nd College Day',
      issuer: 'Arul Anandar College (Autonomous)',
      period: '2021',
      status: 'Distinction',
      description: 'Merit certificate awarded for outstanding achievement during the academic year 2020-2021 on the occasion of the 52nd College Day.',
      tags: ['Academic Excellence', 'Merit Award', '1st Rank Holder']
    }
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
          Certifications & <span style={{ color: `rgb(var(--color-primary))` }}>Credentials</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.01] animate-fade-in ${
                isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl font-bold text-lg shadow-md"
                  style={{
                    backgroundColor: `rgba(var(--color-primary), 0.12)`,
                    color: `rgb(var(--color-primary))`
                  }}
                >
                  {cert.name.charAt(0)}
                </div>

                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: `rgba(var(--color-primary), 0.12)`,
                    color: `rgb(var(--color-primary))`
                  }}
                >
                  {cert.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className={`text-xl font-bold transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {cert.name}
                </h3>

                <p className={`text-sm font-semibold transition-all duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`} 
                style={{ color: `rgb(var(--color-primary))` }}>
                  {cert.issuer}
                </p>

                <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {cert.period}
                </p>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        isDark ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>3</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Key Credentials</p>
          </div>
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>20+</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Core Skills</p>
          </div>
          <div className={`text-center p-8 rounded-xl transition-all duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-100'
          }`}>
            <p className="text-4xl font-bold" style={{ color: `rgb(var(--color-primary))` }}>100%</p>
            <p className={`mt-2 font-semibold transition-all duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>Dedicated to Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
