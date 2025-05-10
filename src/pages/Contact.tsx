import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    const steps = [
  {
    title: "Stap 1: Neem contact op",
    description: "U neemt contact met ons op om uw wensen, het aantal producten en de specifieke vereisten voor uw project te bespreken.",
    icon: "📞"
  },
  {
    title: "Stap 2: Inventarisatie",
    description: "Wij verzamelen alle details en bespreken uw wensen verder om alles goed te begrijpen.",
    icon: "📋"
  },
  {
    title: "Stap 3: Materiaal Selectie",
    description: "Samen kiezen we de perfecte stof en materialen die passen bij uw gebruik en budget.",
    icon: "🧵"
  },
  {
    title: "Stap 4: Controle & Feedback",
    description: "We lopen samen alle specificaties en keuzes na zodat alles volledig naar wens is voordat we starten.",
    icon: "✔️"
  },
  {
    title: "Stap 5: Drukken maar!",
    description: "Na uw goedkeuring starten we met de productie van uw bestelling.",
    icon: "🏭"
  },
  {
    title: "Stap 6: Levering",
    description: "Na grondige kwaliteitscontrole zorgen wij voor een snelle en zorgvuldige levering van uw bestelling.",
    icon: "🚚"
  }
];

  return (
    <>
      <Helmet>
        <title>Contact SPwear | Werkkleding in Limburg & Nederland</title>
        <meta name="description" content="Neem contact op met SPwear voor al uw bedrukte werkkleding en textiel. ✓ Persoonlijk advies ✓ Snelle reactie ✓ Professionele service" />
      </Helmet>
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Neem Contact Op met SPwear
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Neem contact op met SPwear voor bedrukte werkkleding in Limburg én daarbuiten. Persoonlijk advies, snelle service en maatwerk voor elk bedrijf.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
              {/* Left Column - Process Steps */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg shadow-md p-8 sticky top-28">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-8 section-heading">Zo werken wij</h2>
                  <div className="space-y-8">
                    {steps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-3xl flex-shrink-0">{step.icon}</div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                          <p className="text-slate-600 text-sm">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Info and Form */}
              <div className="lg:col-span-8 space-y-8">
                {/* Contact Information */}
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center w-full">
  Contact gegevens
</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                      <Mail className="text-teal-600 mr-4" />
                      <div>
                     <h3 className="font-medium text-slate-800">E-mail</h3>
<span
  onClick={() => window.location.href = "mailto:" + "info" + "@" + "spwear.nl"}
  className="text-slate-600 hover:text-teal-600 transition-colors duration-300 cursor-pointer"
>
  info@spwear.nl
</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="text-teal-600 mr-4" />
                      <div>
                        <h3 className="font-medium text-slate-800">Telefoon</h3>
                        <a 
                          href="tel:+31630060745" 
                          className="text-slate-600 hover:text-teal-600 transition-colors duration-300"
                        >
                          +06-30060745
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="text-teal-600 mr-4" />
                      <div>
                        <h3 className="font-medium text-slate-800">Locatie</h3>
                        <p className="text-slate-600">
                          Venlo, Limburg
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Waarom SPwear?</h3>
                    <ul className="grid md:grid-cols-2 gap-4 text-slate-600">
                      <li className="flex items-center">
                        <ArrowRight className="text-teal-600 mr-3" />
                        Snelle reacties en duidelijke communicatie
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="text-teal-600 mr-3" />
                        Kwaliteit en maatwerk gegarandeerd
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="text-teal-600 mr-3" />
                        Transparante offertes zonder verrassingen
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="text-teal-600 mr-3" />
                        Oplossingen voor elk seizoen en branche
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center w-full">
  Stuur ons een bericht
</h2>
                  <ContactForm />
                </motion.div>

             {/* Why Contact Section */}
<motion.div
  className="bg-transparent border-none outline-none shadow-none p-8"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  style={{
    boxShadow: 'none', // Explicitly remove any box shadow if applied from elsewhere
  }}
>
  <h2 className="text-2xl font-semibold text-slate-800 mb-6 section-heading">
    Waarom contact opnemen met SPwear?
  </h2>
  <div className="text-slate-600 space-y-4">
    <p>
      Onze service gaat verder dan het leveren van bedrijfskleding. Wij bieden persoonlijk advies bij het kiezen van de juiste materialen, pasvormen en bedrukkingstechnieken, afgestemd op uw branche, werkomstandigheden en specifieke wensen. Dankzij onze jarenlange ervaring in onder meer de bouw, logistiek, zorg en sport weten wij precies wat werkt op het gebied van draagcomfort, uitstraling en duurzaamheid.
    </p>
    <p>
      SPwear is gevestigd in de regio Venlo, in Limburg, en bedient zowel lokale ondernemers als landelijke organisaties. U profiteert van snelle service in combinatie met persoonlijke betrokkenheid. Ook voor grotere bestellingen of spoedaanvragen kunt u rekenen op een betrouwbare en flexibele aanpak.
    </p>
    <p>
      Vul gerust het contactformulier in of neem direct contact met ons op. U ontvangt binnen één tot twee werkdagen een voorstel op maat, ongeacht of uw bedrijf in Limburg is gevestigd of elders in Nederland.
    </p>
  </div>
</motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;