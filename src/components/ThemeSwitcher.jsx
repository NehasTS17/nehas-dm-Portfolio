import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
const ThemeSwitcher = () => {
  const { isDark, toggleDarkMode, colorTheme, setTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = [
    { name: 'blue', label: 'Blue' },
    { name: 'purple', label: 'Purple' },
    { name: 'green', label: 'Green' },
    { name: 'orange', label: 'Orange' },
    { name: 'pink', label: 'Pink' },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg transition-all duration-300 hover:shadow-md"
        style={{ 
          backgroundColor: isDark ? 'rgba(var(--color-primary), 0.2)' : 'rgba(var(--color-primary), 0.1)',
        }}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <MdLightMode/>
        ) : (
          <MdDarkMode/>
        )}
      </button>

      {/* Theme Switcher Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-white hover:shadow-md"
          style={{ backgroundColor: `rgb(var(--color-primary))` }}
          aria-label="Open theme selector"
        >
          Theme
        </button>

        {showThemeMenu && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-xl z-50 backdrop-blur-sm"
            style={{
              backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              border: `1px solid rgba(var(--color-primary), 0.2)`
            }}
          >
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => {
                  setTheme(theme.name);
                  setShowThemeMenu(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-opacity-80 transition-all duration-200 flex items-center gap-2 ${
                  colorTheme === theme.name ? 'font-bold' : ''
                }`}
                style={{
                  backgroundColor: colorTheme === theme.name ? `rgba(var(--color-primary), 0.2)` : 'transparent',
                  color: isDark ? '#fff' : '#000'
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `rgb(var(--color-primary))` }}
                />
                {theme.label}
                {colorTheme === theme.name && ' ✓'}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
