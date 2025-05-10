import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';
import { Info, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const partnerData = [
  {
    id: 1,
    name: "New Wave Textiles",
    logo: "/cropped-new_wave_textiles_logo.webp",
    website: "https://www.newwavetextiles.nl/",
    alt: "New Wave Textiles logo - Hoogwaardige textiel leverancier van bedrijfskleding"
  },
  {
    id: 2,
    name: "Tricorp Workwear",
    logo: "/cropped-Tricorp-logo.webp",
    website: "https://www.tricorpstore.com/",
    alt: "Tricorp Workwear logo - Professionele werkkleding - diverse sectoren"
  },
  {
    id: 3,
    name: "Santino Kleding",
    logo: "/cropped-santino_42c0c1c2-92b6-4f97-90f0-06cbd555b95a.webp",
    website: "https://www.unishoreworkwear.com/collections/santino",
    alt: "Santino Kleding logo - Kwaliteitsvolle bedrijfskleding en werkkleding"
  }
];

const faqData = [
  {
    question: "Wat zijn de voordelen van samenwerking met deze partners?",
    answer: "Onze partners zijn toonaangevende fabrikanten in de branche. Dit garandeert niet alleen hoogwaardige kwaliteit, maar zorgt ook voor betrouwbare levertijden en concurrerende prijzen. Bovendien hebben zij een breed assortiment dat perfect aansluit bij diverse sectoren."
  },
  {
    question: "Hoe wordt de kwaliteit van de werkkleding gegarandeerd?",
    answer: "Al onze partners hanteren strenge kwaliteitsnormen en gebruiken hoogwaardige materialen. Elk kledingstuk ondergaat uitgebreide kwaliteitscontroles voordat het wordt geleverd. Daarnaast bieden we garantie op al onze producten."
  },
  {
    question: "Kan ik samples aanvragen van de werkkleding?",
    answer: "Ja, het is mogelijk om samples aan te vragen van specifieke kledingstukken. Dit helpt u bij het maken van de juiste keuze qua pasvorm, materiaal en kwaliteit. Neem contact met ons op voor de mogelijkheden."
  },
  {
    question: "Wat zijn de minimale bestelhoeveelheden?",
    answer: "De minimale bestelhoeveelheden verschillen per product en type bedrukking. We denken graag met u mee om tot een passende oplossing te komen, ook voor kleinere orders. Neem contact op voor een persoonlijk advies."
  },
  {
    question: "Bieden jullie ook maatwerk oplossingen aan?",
    answer: "Ja, we bieden uitgebreide maatwerk mogelijkheden. Of het nu gaat om specifieke maten, kleuren, of speciale bedrukkingstechnieken - we kunnen de werkkleding volledig aanpassen aan uw wensen en bedrijfsidentiteit. Vraag naar de mogelijkheden voor uw specifieke situatie."
  }
];

const Partners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Onze Partners" 
            center
          />
          
          <motion.p
            className="text-slate-600 text-lg text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Wij werken samen met toonaangevende fabrikanten om de beste kwaliteit te garanderen.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10" ref={ref}>
            {partnerData.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover-card bg-white rounded-lg overflow-hidden shadow-md w-full flex flex-col"
                >
                  <div className="h-64 overflow-hidden flex items-center justify-center p-8 bg-white">
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="w-full h-full object-contain partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 mt-auto">
                    <h3 className="text-xl font-semibold text-slate-800">{partner.name}</h3>
                    <p className="mt-2 text-slate-600">Bekijk website</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl flex items-start gap-4">
              <Info className="text-teal-600 h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-slate-600">
                Dankzij onze nauwe samenwerking met deze toonaangevende fabrikanten kunnen wij u een breed scala aan hoogwaardige werkkleding aanbieden tegen concurrerende prijzen.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <div className="mt-20">
            <SectionHeading 
              title="Veelgestelde Vragen" 
              center
            />
            
            <div className="max-w-3xl mx-auto mt-12">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-slate-50 transition-colors duration-300"
                  >
                    <span className="font-medium text-slate-800">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-teal-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-teal-600" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white rounded-b-lg">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-xl p-12 text-center bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Klaar voor professionele werkkleding?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ontdek ons assortiment en laat uw team stralen met hoogwaardige, gepersonaliseerde werkkleding.
            </p>
            <div className="space-x-4">
              <Link to="/projecten">
                <motion.button
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-300 mr-4 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bekijk Projecten
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Neem Contact Op
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partners;