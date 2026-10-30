import { useTheme } from '../context/ThemeContext';
import GoogleAnalytics from '../assets/images/Google-Analytics.png'
import GoogleAds from '../assets/images/Google Ads logo.png'
import MetaAds from '../assets/images/metaAdsLogo.png'
import SEMrusg from '../assets/images/semrush.png'
import Ahrefs from '../assets/images/Ahrefs.png'
import HubSpot from '../assets/images/HubSpot.png'
import Mailchimp from '../assets/images/Mailchim.png'
import Canva from '../assets/images/canva.png'
import Inshot from '../assets/images/inshot.png'
import Photoshop from '../assets/images/photoshop.png'
import Capcut from '../assets/images/capcut.png'
import Claude from '../assets/images/claude.png'
import Elementor from '../assets/images/elementor.png'
import WordPress from '../assets/images/Wordpress.png'
import LovableAI from '../assets/images/LovableAI.png'
import ChatGPT from '../assets/images/ChatGPT.png'
import GoogleGemini from '../assets/images/GoogleGemini.png'

const Tools = () => {
  const { isDark } = useTheme();

  const tools = [
    { name: 'Google Analytics', emoji: GoogleAnalytics },
    { name: 'Google Ads', emoji: GoogleAds },
    { name: 'Meta Ads Manager', emoji: MetaAds },
    { name: 'SEMrush', emoji: SEMrusg },
    { name: 'Ahrefs', emoji: Ahrefs },
    { name: 'HubSpot', emoji: HubSpot },
    { name: 'Mailchimp', emoji: Mailchimp },
    { name: 'Canva', emoji: Canva },
    { name: 'WordPress', emoji: WordPress },
    { name: 'InShot', emoji: Inshot },
    { name: 'Photoshop', emoji: Photoshop },
    { name: 'CapCut', emoji: Capcut },
    { name: 'Elementor', emoji: Elementor },
    { name: 'Claude', emoji: Claude },
    { name: 'Lovable AI', emoji: LovableAI },
    { name: 'ChatGPT', emoji: ChatGPT },
    { name: 'Google Gemini', emoji: GoogleGemini },
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
          Tools & <span style={{ color: `rgb(var(--color-primary))` }}>Platforms</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-2 animate-scale-in ${
                isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200'
              }`}
              style={{
                animationDelay: `${index * 0.05}s`,
                borderTop: `3px solid rgb(var(--color-primary))`
              }}
            >
              <img src={tool.emoji} alt={tool.name} className="w-16 h-16 mx-auto mb-3 object-contain" />
              <h3 className={`font-semibold transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-8 rounded-xl transition-all duration-300 ${
          isDark ? 'bg-slate-900' : 'bg-slate-100'
        }`}>
          <p className={`text-center text-lg transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            I'm proficient with industry-leading tools and platforms to deliver comprehensive digital marketing solutions. Constantly learning and adapting to new technologies to stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
