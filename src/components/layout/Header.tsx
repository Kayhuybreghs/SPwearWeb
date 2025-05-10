import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (window.innerWidth >= 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }

    setScrolled(currentScrollY > 20);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => `
    nav-link font-medium transition-all duration-300
    ${isActive ? 'text-teal-400' : isHomePage && !scrolled ? 'text-white' : 'text-slate-800'}
    hover:text-teal-400
  `;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) => `
    mobile-nav-link text-3xl font-medium text-white hover:text-teal-400 transition-all duration-300
    ${isActive ? 'text-teal-400' : ''}
  `;

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled || !isHomePage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : ''}
          ${!isVisible && !isOpen ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="relative z-50 transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/SPwearcopy.png" 
                alt="SPwear Logo"
                className="h-10 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/projecten" className={navLinkClasses}>
                Projecten
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden relative z-50 ${isHomePage && !scrolled && !isOpen ? 'text-white' : 'text-slate-800'} ${isOpen ? 'text-white' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Sluit menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <nav className="flex flex-col items-center space-y-8">
              <NavLink 
                to="/" 
                className={mobileNavLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/projecten" 
                className={mobileNavLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Projecten
              </NavLink>
              <NavLink 
                to="/contact" 
                className={mobileNavLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;