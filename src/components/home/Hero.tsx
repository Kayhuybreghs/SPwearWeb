import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('Webstie-background.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Professionele bedrukte werkkleding van SPwear - Specialisten in maatwerk bedrijfskleding"
      >
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="Webstie-background-mobile-412x824.webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="Webstie-background-tablet.webp"
          />
          <img
            src="Webstie-background.webp"
            alt="Professionele werkkleding"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl text-white"
          initial={isFirstLoad ? false : { opacity: 0, y: 30 }}
          animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ❌ Removed Framer Motion from <h1> to improve LCP */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Professionele <span className="text-teal-400">Werkkleding</span> Met Uw Eigen Identiteit
          </h1>

          <motion.p
            className="mt-6 text-xl text-slate-200 max-w-2xl"
            initial={isFirstLoad ? false : { opacity: 0, y: 20 }}
            animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Bij SPwear leveren we hoogwaardige bedrijfskleding voor diverse sectoren.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={isFirstLoad ? false : { opacity: 0, y: 20 }}
            animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/contact">
              <Button size="lg" className="flex items-center">
                Neem Contact Op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projecten">
              <Button variant="outline" size="lg">
                Bekijk Projecten
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 1 },
        }}
      >
        <div className="w-6 h-9 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;