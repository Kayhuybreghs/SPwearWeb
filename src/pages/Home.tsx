import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Partners from '../components/home/Partners';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bedrukte Werkkleding op Maat | SPwear Nederland</title>
        <meta name="description" content="SPwear is specialist in het bedrukken van werkkleding voor bedrijven in Nederland. Maatwerk, topkwaliteit en scherpe prijzen voor elke sector." />
      </Helmet>
      <Hero />
      <About />
      
      {/* Services Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center items-center h-auto mb-8">
  <h2 className="text-3xl font-bold text-slate-800 section-heading">
    Specialist in Textielbedrukking
  </h2>
</div>
            <div className="grid md:grid-cols-2 gap-8">
  <div className="bg-transparent backdrop-blur-sm rounded-lg p-6">
    <h3 className="text-xl font-semibold text-slate-800 mb-4">Bedrijfskleding Bedrukken</h3>
    <p className="text-slate-600 mb-6">
      Bij SPwear zijn we gespecialiseerd in het bedrukken van diverse soorten bedrijfskleding. Van t-shirts en hoodies tot werkbroeken en veiligheidskleding - wij zorgen voor een professionele uitstraling van uw team.
    </p>
    <ul className="space-y-3 text-slate-600">
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        T-shirts bedrukken met uw logo
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Werkkleding personaliseren
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Veiligheidskleding met bedrijfsnaam
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Custom werkbroeken en jassen
      </li>
    </ul>
  </div>
  <div className="bg-transparent backdrop-blur-sm rounded-lg p-6">
    <h3 className="text-xl font-semibold text-slate-800 mb-4">Promotionele Artikelen</h3>
    <p className="text-slate-600 mb-6">
      Naast werkkleding bedrukken we ook diverse promotionele artikelen om uw merk te versterken:
    </p>
    <ul className="space-y-3 text-slate-600">
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Mutsen bedrukken met logo
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Waterflessen personaliseren
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Sportkleding bedrukken
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Tassen en accessoires
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 mr-2">✓</span>
        Powerbank met logo
      </li>
    </ul>
  </div>
</div>

          </motion.div>
        </div>
      </section>
      
      <Partners />
    </>
  );
};

export default Home;