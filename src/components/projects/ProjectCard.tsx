import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      className="hover-card rounded-lg overflow-hidden shadow-md bg-white"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">{project.date}</span>
          <span className="text-sm font-medium text-teal-600">
            {project.client}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;