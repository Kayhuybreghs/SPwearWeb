import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/Webstie-background-mobile-640w.webp" />
        <source media="(max-width: 1024px)" srcSet="/Webstie-background-tablet-1024w.webp" />
        <img
          src="/Webstie-background-1920w.webp"
          alt="Professionele bedrukte werkkleding van SPwear"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
      </picture>
      <div className="absolute inset-0 hero-overlay z-10" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          className="max-w-3xl text-white"
          initial={isFirstLoad ? {} : { opacity: 0, y: 30 }}
          animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Professionele <span className="text-teal-400">Werkkleding</span> Met Uw Eigen Identiteit
          </h1>
          <motion.p
            className="mt-6 text-xl text-slate-200 max-w-2xl"
            initial={isFirstLoad ? {} : { opacity: 0, y: 20 }}
            animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Bij SPwear leveren we hoogwaardige bedrijfskleding voor diverse sectoren.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={isFirstLoad ? {} : { opacity: 0, y: 20 }}
            animate={isFirstLoad ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/contact">
              <Button size="lg" className="flex items-center">
                Neem Contact Op<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projecten">
              <Button variant="outline" size="lg">Bekijk Projecten</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
