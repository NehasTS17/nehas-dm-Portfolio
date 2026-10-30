import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GoogleAds from '../assets/images/Google Ads.png'
import MetaAds from '../assets/images/Meta Ads.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import Youtube from '../assets/images/Youtube.png'

const Campaigns = () => {
  const { isDark } = useTheme();
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCampaign(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const campaigns = [
    {
      id: 1,
      name: 'Google Ads',
      icon: '🔍',
      image: GoogleAds,
      link: '',
      description: 'Optimized search campaigns for maximum ROI'
    },
    {
      id: 2,
      name: 'Meta Ads',
      icon: '📱',
      image: MetaAds,
      link: '',
      description: 'Engaging social media campaigns across Meta platforms'
    },
    {
      id: 3,
      name: 'Facebook',
      icon: '📘',
      image: Facebook,
      link: 'https://www.facebook.com/profile.php?id=61583965953306',
      description: 'Community-focused content and promotions to build brand awareness and connect with your audience.'
    },
    {
      id: 4,
      name: 'Instagram',
      icon: '📸',
      image: Instagram,
      link: 'https://www.instagram.com/planetbeautysalon/?hl=en',
      description: 'Visually engaging posts, reels, and stories that showcase services and attract new customers.'
    },
    {
      id: 5,
      name: 'YouTube',
      icon: '▶️',
      image: Youtube,
      link: 'https://www.youtube.com/@PlanetBeautySalon-b1u',
      description: 'Video marketing that highlights tutorials, transformations, and brand storytelling.'
    },
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
          Featured <span style={{ color: `rgb(var(--color-primary))` }}>Campaigns</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => {
            const CampaignCard = campaign.link ? 'a' : 'button';
            const cardProps = campaign.link
              ? {
                href: campaign.link,
                target: '_blank',
                rel: 'noopener noreferrer'
              }
              : {
                type: 'button',
                onClick: () => setSelectedCampaign(campaign),
                'aria-label': `View ${campaign.name} campaign image`
              };

            return (
            <CampaignCard
              key={campaign.id}
              {...cardProps}
              className={`group w-full text-left rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 animate-slide-up ${
                isDark ? 'bg-slate-900' : 'bg-slate-100'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-90"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: `rgb(var(--color-primary))` }}
                >
                  <svg className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{campaign.icon}</span>
                  <h3 className={`text-xl font-bold transition-all duration-300 group-hover:text-blue-500 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {campaign.name}
                  </h3>
                </div>
                <p className={`text-sm transition-all duration-300 mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {campaign.description}
                </p>
                <div className="flex items-center gap-2 font-semibold"
                  style={{ color: `rgb(var(--color-primary))` }}>
                  <span>View Campaign</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </CampaignCard>
            );
          })}
        </div>
      </div>

      {selectedCampaign && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCampaign.name}
          onClick={() => setSelectedCampaign(null)}
        >
          <div
            className="relative max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedCampaign.image}
              alt={selectedCampaign.name}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedCampaign(null)}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-slate-900 shadow-lg transition-transform duration-300 hover:scale-110"
              aria-label="Close campaign preview"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Campaigns;
