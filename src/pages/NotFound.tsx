import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Phone, Mail, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Pagina Niet Gevonden | SPwear</title>
        <meta name="description" content="Deze pagina bestaat niet. Ga terug naar de homepage of neem contact met ons op." />
      </Helmet>

      <div className="min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/SPwearcopy.png" 
                alt="SPwear Logo - Specialist in bedrijfskleding en textielbedrukking"
                className="h-16 mx-auto mb-8"
              />
              
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Oeps! Pagina Niet Gevonden
              </h1>
              
              <p className="text-lg text-slate-600 mb-8">
                De pagina die u zoekt bestaat niet of is verplaatst. 
                Geen zorgen, we helpen u graag verder!
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <Link 
                  to="/"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Home className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-slate-800">Ga naar Homepage</span>
                </Link>
                
                <Link 
                  to="/contact"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Mail className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-slate-800">Neem Contact Op</span>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  Populaire Pagina's
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/projecten"
                      className="flex items-center text-slate-600 hover:text-teal-600 transition-colors duration-300"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Bekijk onze projecten
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact"
                      className="flex items-center text-slate-600 hover:text-teal-600 transition-colors duration-300"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Contact opnemen
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 p-6 bg-slate-900 text-white rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Direct Contact
                </h2>
                <div className="space-y-3">
                  <a 
                    href="tel:0101234567"
                    className="flex items-center justify-center text-slate-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +06-30060745
                  </a>
                  <a 
                    href="mailto:info@spwear.nl"
                    className="flex items-center justify-center text-slate-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    info@spwear.nl
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;