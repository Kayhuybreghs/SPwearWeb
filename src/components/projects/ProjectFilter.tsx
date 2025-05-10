import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilter = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {['Alle', ...categories].map((category) => (
        <FilterButton 
          key={category}
          active={category === activeCategory}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </FilterButton>
      ))}
    </div>
  );
};

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ children, active, onClick }: FilterButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
        active 
          ? 'bg-teal-600 text-white' 
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default ProjectFilter;