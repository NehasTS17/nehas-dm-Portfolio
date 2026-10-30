import { useEffect, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 120;
      let currentSection = 'home';

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section && section.offsetTop <= currentPosition) {
          currentSection = link.href.slice(1);
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 backdrop-blur-md animate-slide-down ${
      isDark ? 'bg-slate-950/80 border-b border-slate-800' : 'bg-white/80 border-b border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold transition-all duration-300">
              <span style={{ color: `rgb(var(--color-primary))` }}>Nehas</span>
              <span className={isDark ? 'text-white' : 'text-slate-900'}> TS</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-medium transition-all duration-300 hover:opacity-70 ${
                  activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-80'
                } ${isDark ? 'text-white' : 'text-slate-900'}`}
                style={activeSection === link.href.slice(1) ? {
                  color: `rgb(var(--color-primary))`
                } : undefined}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: `rgb(var(--color-primary))` }}
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{
                backgroundColor: mobileMenuOpen ? `rgba(var(--color-primary), 0.2)` : 'transparent'
              }}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                  mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                } />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block border-l-2 px-4 py-2 font-medium transition-all duration-300 hover:bg-opacity-50 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-opacity-10'
                    : 'border-transparent'
                } ${
                  isDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'
                }`}
                style={activeSection === link.href.slice(1) ? {
                  color: `rgb(var(--color-primary))`,
                  borderLeftColor: `rgb(var(--color-primary))`,
                  backgroundColor: `rgba(var(--color-primary), 0.1)`
                } : undefined}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
