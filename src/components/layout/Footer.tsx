import { NavLink } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <img
              src="/SPwearcopy.png"
              alt="SPwear Limburg - Specialist in bedrijfskleding en textielbedrukking"
              className="h-10 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-slate-300 mt-4 max-w-xs">
              Bij SPwear leveren we hoogwaardige bedrijfskleding voor diverse sectoren, met de mogelijkheid tot personalisatie met uw logo of bedrijfsnaam.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                aria-label="Volg SPwear op LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 section-heading">Navigatie</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink
                to="/"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/projecten"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                Projecten
              </NavLink>
              <NavLink
                to="/contact"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 section-heading">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@spwear.nl"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300 flex items-center"
              >
                <Mail size={18} className="mr-2" />
                info@spwear.nl
              </a>
              <a
                href="tel:0630060745"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300 flex items-center"
              >
                <Phone size={18} className="mr-2" />
                +06-30060745
              </a>
              <div className="text-slate-300 flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Venlo, Limburg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <span>© {new Date().getFullYear()} SPwear. Alle rechten voorbehouden.</span>
            <span>
              Built by{' '}
              <a
                href="https://www.khcustomweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                KH Custom Web
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
