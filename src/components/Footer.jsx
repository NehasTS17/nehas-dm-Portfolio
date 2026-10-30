import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import facebook from '../assets/images/fb.png';
import youtube from '../assets/images/YT.png';
import instagram from '../assets/images/insta.png';
import mail from '../assets/images/mail.png';
import website from '../assets/images/website.png';
import linkedin from '../assets/images/linkedinLogo.png';
const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Courses', href: '#courses' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`transition-all duration-300 ${
      isDark ? 'bg-slate-950 border-t border-slate-800' : 'bg-slate-900 border-t border-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              <span style={{ color: `rgb(var(--color-primary))` }}>Nehas</span> TS
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digital Marketing Executive driving business growth through data-driven strategies and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Me */}
          <div>
            <h4 className="text-white font-bold mb-4">Reach Me</h4>
            <ul className="space-y-2">
              {[
                { label: 'Mail', value: 'negae13@gmail.com', icon: mail, href: 'mailto:negae13@gmail.com' },
                { label: 'Website', value: 'Portfolio Website', icon: website, href: 'https://athira-sb-personal-portfolio.vercel.app/' },
                { label: 'LinkedIn', value: 'LinkedIn Profile', icon: linkedin, href: 'https://www.linkedin.com/in/nehas-dm/' },
              ].map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 text-slate-400 text-sm transition-all duration-300 hover:text-white"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <img src={contact.icon} alt="" className="h-6 w-6 object-contain" />
                    <span>{contact.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Nehas TS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: facebook, link: 'https://www.facebook.com/profile.php?id=61583965953306', label: 'Facebook' },
              { icon: youtube, link: 'https://www.youtube.com/@PlanetBeautySalon-b1u', label: 'YouTube' },
              { icon: instagram, link: 'https://www.instagram.com/planetbeautysalon/?hl=en', label: 'Instagram' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-800 hover:bg-slate-700'
                }`}
                style={{
                  borderBottom: `2px solid rgb(var(--color-primary))`
                }}
                aria-label={social.label}
              >
                {/* {social.icon} */}
                <img src={social.icon} alt={social.label} className="w-6 h-6 object-contain" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full p-0 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
            }`}
            style={{ backgroundColor: `rgb(var(--color-primary))` }}
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
