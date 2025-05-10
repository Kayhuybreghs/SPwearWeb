import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Shield, Award, TestTube, DollarSign, Recycle, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Kleding die Opvalt" 
          subtitle="Vanuit Limburg lever ik maatwerk in bedrukte werkkleding aan bedrijven door heel Nederland. Met oog voor kwaliteit en uitstraling zorg ik dat jouw team professioneel voor de dag komt."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-1/2">
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="Oprichter-SPwear.webp" 
                  alt="Simon Penturij - Oprichter SPwear Limburg, expert in textielbedrukking en bedrijfskleding"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg flex flex-col">
                <p className="font-medium">Sinds 2010</p>
                <a 
                  href="https://www.linkedin.com/in/simon-penturij-bb855a153/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/90 hover:text-white transition-colors duration-300 mt-1 underline"
                >
                  LinkedIn Profiel
                </a>
              </div>
              <div className="absolute -top-4 -left-4 bg-slate-800 text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-medium">Simon Penturij</p>
                <p className="text-sm text-white/90">Oprichter SPwear</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Hoogwaardige werkkleding in iedere sector
            </h3>
            <div className="space-y-4 text-slate-600">
              <p>
                Bij SPwear streven we ernaar om elke klant te voorzien van de beste bedrijfskleding die perfect past bij hun specifieke behoeften en branche. Wij geloven dat goede werkkleding niet alleen functioneel moet zijn, maar ook bijdraagt aan de professionele uitstraling van uw bedrijf.
              </p>
              <p>
                Onze kleding is niet alleen duurzaam en comfortabel, maar wordt ook volledig naar uw wensen gepersonaliseerd. Door uw logo of bedrijfsnaam erop te bedrukken, zorgen we ervoor dat uw merk altijd zichtbaar is.
              </p>
              <p>
                We werken samen met toonaangevende fabrikanten zoals New Wave Textiles, Tricorp Workwear en Santino Kleding om de hoogste kwaliteit te garanderen.
              </p>
            </div>
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-12 section-heading inline-block">
          Waarom SPwear
        </h2>

        {/* Feature Blocks */}
        <div className="space-y-16">
          {/* Hoge Kwaliteit & Product Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -5 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Hoge Kwaliteit</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mb-6">
                  Wij werken uitsluitend met premium materialen en gerenommeerde fabrikanten om de hoogste kwaliteit werkkleding te garanderen. Elk kledingstuk wordt zorgvuldig geselecteerd op duurzaamheid, comfort en uitstraling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">Onze werkkleding is slijtvast en bestand tegen intensief gebruik.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">We werken samen met gecertificeerde fabrikanten die voldoen aan strenge kwaliteitsnormen.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TestTube className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">Elk kledingstuk wordt grondig getest op pasvorm en duurzaamheid.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <Link to="/projecten" className="block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="bedrukte-teamkleding.webp" 
                  alt="Tiger Throwdown teamkleding Limburg - Hoogwaardige sportkleding bedrukking"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Breed Assortiment & Persoonlijke Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Breed Assortiment</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Van bouw tot horeca, en van zorg tot logistiek - ons uitgebreide assortiment biedt passende werkkleding voor elke sector. Met diverse stijlen, maten en kleuren vindt u altijd wat u zoekt.
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Persoonlijke Service</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Wij bieden persoonlijk advies en maatwerk oplossingen voor uw specifieke behoeften. Onze experts denken met u mee en zorgen voor een soepel proces van begin tot eind.
              </p>
            </motion.div>
          </div>

          {/* Scherpe Prijzen & Product Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Link to="/projecten" className="block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="bedrukken-werkkledingv.webp" 
                  alt="Bedrukte werkkleding Limburg - Professionele kwaliteit tegen scherpe prijzen"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -5 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Scherpe Prijzen</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mb-6">
                  Door onze directe samenwerking met fabrikanten en efficiënte werkprocessen kunnen wij hoogwaardige werkkleding aanbieden tegen concurrerende prijzen, zonder in te leveren op kwaliteit.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Timer className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">Efficiënte productieprocessen minimaliseren verspilling en maximaliseren waarde, waardoor jij de beste prijs krijgt.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Recycle className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">Duurzame materialen zorgen voor een langere levensduur van de kleding, wat op de lange termijn kosten bespaart.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="text-teal-600 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-600">Bulkvoordeel grotere bestellingen profiteren van extra scherpe tarieven, ideaal voor bedrijven met grotere teams.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Milieubewust & Ervaring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Milieubewust</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                We kiezen bewust voor duurzame materialen en productiemethoden om onze ecologische voetafdruk te minimaliseren. Zo dragen we bij aan een betere toekomst.
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-lg hover:bg-white/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Ervaring en Vakmanschap</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Met jaren ervaring in de branche combineren we traditioneel vakmanschap met moderne technieken voor het beste resultaat in bedrukte werkkleding.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;