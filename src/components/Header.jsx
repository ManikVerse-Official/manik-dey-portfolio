import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <a
            href="#home"
            className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            {siteConfig.name}
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-7 lg:space-x-8">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors text-[13px] sm:text-sm font-medium min-h-[44px] flex items-center px-1"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white h-11 w-11 flex items-center justify-center rounded-lg active:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden"
            style={{ backgroundColor: 'rgba(11, 16, 32, 0.95)', borderTop: '1px solid var(--color-border-subtle)' }}>
            <div className="px-4 py-4 space-y-1">
              {siteConfig.navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-white rounded-lg px-4 py-3.5 transition-colors text-[15px] font-medium min-h-[48px]"
                  style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
