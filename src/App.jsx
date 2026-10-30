import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <Home />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
