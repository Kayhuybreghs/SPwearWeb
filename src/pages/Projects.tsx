import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projectsData } from '../data/projects';
import { Plus, Minus, Shirt, Users, Gift } from 'lucide-react';

const faqData = [
  {
    question: "Hoe lang duurt het productieproces?",
    answer: "De gemiddelde levertijd is 10-15 werkdagen na goedkeuring van het ontwerp. Bij spoed kunnen we vaak sneller leveren, neem contact op voor de mogelijkheden."
  },
  {
    question: "Kan ik samples bestellen voor we een grote order plaatsen?",
    answer: "Ja, het is mogelijk om eerst één sample te bestellen tegen 50% van de reguliere prijs. Zo kunt u de kwaliteit, pasvorm en bedrukking beoordelen voordat u overgaat tot een grotere bestelling."
  },
  {
    question: "Welke bedrukking en borduurtechnieken gebruiken jullie?",
    answer: "We bieden diverse technieken waaronder zeefdruk, borduren, digitale transfer en DTG (Direct to Garment) printing. De beste techniek hangt af van uw specifieke wensen en het type kledingstuk."
  },
  {
    question: "Kunnen we de werkkleding personaliseren met ons bedrijfslogo of ontwerp?",
    answer: "Ja, je kunt de werkkleding volledig personaliseren met je bedrijfslogo of ontwerp. We bieden verschillende bedrukking en borduurtechnieken aan, zodat je kleding precies voldoet aan jouw wensen."
  },
  {
    question: "Wat gebeurt er als we een defect of probleem hebben met de werkkleding?",
    answer: "Als er een defect of probleem is met de werkkleding, kun je het product naar ons terugsturen. Na inspectie bepalen we of het defect onder onze garantie valt. In dat geval ontvang je een nieuw product of het betaalde bedrag terug."
  }
];


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const categories = [...new Set(projectsData.map(project => project.category))];

  useEffect(() => {
    if (activeCategory === 'Alle') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Projecten & Bedrukte Kledingoplossingen | SPwear</title>
        <meta name="description" content="Bekijk onze projecten in bedrukte werkkleding, sportkleding en promotieartikelen. Maatwerkoplossingen voor elk team en elke sector." />
      </Helmet>
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Onze Projecten & Productoplossingen" 
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-slate-600">
              Bij SPwear draait elk project om maatwerk, kwaliteit en zichtbaarheid. We werken met bedrijven, verenigingen en instellingen door heel Nederland, van lokale bouwbedrijven tot sportclubs en zorgorganisaties, en leveren gepersonaliseerde kleding en promotionele artikelen die écht passen bij hun identiteit.
            </p>
          </motion.div>

          <ProjectFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12 p-8 bg-white rounded-lg shadow-sm"
            >
              <p className="text-slate-600">Geen projecten gevonden in deze categorie.</p>
            </motion.div>
          )}

          {/* Product Categories Grid */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* Bedrijfskleding Section */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Shirt className="text-teal-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Bedrijfskleding & Werkkleding op Maat</h3>
                  <p className="text-slate-600 mb-4">
                    Voor diverse sectoren realiseren wij complete kledingoplossingen. Of het nu gaat om robuuste kleding voor de bouw of representatieve outfits voor horecapersoneel.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      T-shirts met bedrijfsnaam
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Hoodies en sweaters in huisstijlkleuren
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Slijtvaste werkbroeken en jassen
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Veiligheidskleding met reflectie
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sportkleding Section */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <Users className="text-teal-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Sportkleding voor Teams en Events</h3>
                  <p className="text-slate-600 mb-4">
                    Voor sportclubs, sportevenementen of bedrijfsteams verzorgen wij kleding die presteert én communiceert.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Sportshirts met rugnummer en logo
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Bedrukte trainingspakken
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Teamkleding voor wedstrijden
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-600 mr-2">✔</span>
                      Accessoires zoals sporttassen
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Promotional Items Section - Full Width */}
          <motion.div 
            className="mt-8 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Gift className="text-teal-600 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Promotionele Artikelen die Blijven Hangen</h3>
                <p className="text-slate-600 mb-4">
                  Wil je je merk laten spreken buiten de werkvloer? Met onze gepersonaliseerde promotieartikelen vergroot je je zichtbaarheid op events, beurzen of in relatiegeschenken.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">✔</span>
                    Mutsen bedrukken voor een warme branding
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">✔</span>
                    Herbruikbare waterflessen met je logo
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">✔</span>
                    Bedrukte tassen voor klanten en personeel
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">✔</span>
                    Unieke custom items zoals sleutelhangers
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Seasonal Banner with Logo */}
          <motion.div 
            className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 items-center">
  <div className="p-8">
    <h2 className="text-3xl font-bold text-slate-800 mb-4">
      Ga de zomer tot aan de winter goed in met SPwear bedrukte kleding
    </h2>
    <p className="text-lg text-slate-600">
      Van lichte zomershirts tot warme winterjassen - wij zorgen voor de perfecte bedrukte kleding voor elk seizoen.
    </p>
  </div>
  <div className="h-full flex justify-center items-center p-8 bg-gradient-to-r from-gray-900 to-gray-700">
    <img 
      src="/SPwearcopy.png" 
      alt="SPwear Logo" 
      className="h-20 w-auto"
    />
  </div>
</div>

          </motion.div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-slate-800">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-slate-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-slate-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 rounded-xl p-12 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(240, 253, 250, 0.8) 0%, rgba(204, 251, 241, 0.8) 100%)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Klaar om uw eigen project te starten?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Laat uw team stralen met hoogwaardige, gepersonaliseerde werkkleding van SPwear.
            </p>
            <Link to="/contact">
              <motion.button
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Uw Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;