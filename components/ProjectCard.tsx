import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onAction: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onAction }) => {
  return (
    <div className="group relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] p-6 md:p-10 transition-all duration-500 hover:border-electric/50 hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.15)] max-w-3xl w-full mx-auto">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-300 dark:border-gray-600 group-hover:border-electric transition-colors duration-500"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-300 dark:border-gray-600 group-hover:border-electric transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-300 dark:border-gray-600 group-hover:border-electric transition-colors duration-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-300 dark:border-gray-600 group-hover:border-electric transition-colors duration-500"></div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div>
            <div className="flex items-center gap-3 mb-2">
                <span className="text-electric animate-pulse text-xs">●</span>
                <h3 className="text-2xl font-sans font-bold text-black dark:text-white tracking-tight group-hover:text-electric transition-colors duration-300">{project.name}</h3>
            </div>
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
             {project.sector}
          </p>
        </div>
        <div className="self-start font-mono text-[10px] text-electric bg-electric/5 dark:bg-electric/10 border border-electric/20 px-3 py-1 uppercase tracking-wider">
          {project.status}
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl transition-colors duration-300">
        {project.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-8 gap-6 transition-colors duration-300">
        <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
          <span className="w-2 h-px bg-gray-400 dark:bg-gray-600"></span>
          TARGET LAUNCH: <span className="text-black dark:text-white font-medium">{project.launchDate}</span>
        </div>
        <button 
          onClick={onAction}
          className="w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-mono text-xs font-bold hover:bg-electric hover:border-electric hover:text-black transition-all duration-300 uppercase tracking-widest"
        >
          Request Access
        </button>
      </div>
    </div>
  );
};