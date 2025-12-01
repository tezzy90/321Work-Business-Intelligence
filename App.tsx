import React, { useState, useEffect } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { Modal } from './components/Modal';
import { Project } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme based on system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const aridInsights: Project = {
    id: 'arid',
    name: 'AridInsights',
    sector: 'Water Scarcity & Climate Tech',
    status: 'In Development',
    description: 'Leveraging data-driven insights to solve critical water scarcity infrastructure gaps.',
    launchDate: 'Q1 2026'
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal text-gray-900 dark:text-offwhite font-sans selection:bg-electric selection:text-black flex flex-col relative overflow-x-hidden transition-colors duration-500">
      
      {/* Navigation / Header */}
      <header className="w-full max-w-4xl mx-auto px-6 py-10 md:py-16 flex justify-between items-baseline animate-fade-in z-10">
        <h1 className="text-3xl font-bold tracking-tighter lowercase text-black dark:text-white transition-colors duration-300">321work</h1>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
              <span className="font-mono text-xs text-gray-400 dark:text-gray-600 tracking-widest">EST. {currentYear}</span>
          </nav>
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="font-mono text-[10px] uppercase tracking-widest border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 hover:border-electric hover:text-electric dark:hover:border-electric transition-all"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 flex flex-col justify-center pb-24 z-10">
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-10 text-black dark:text-white tracking-tight transition-colors duration-300">
            Structured Intelligence.<br />
            <span className="text-gray-400 dark:text-gray-600 transition-colors duration-300">Sustainable Outcomes.</span>
          </h2>
          
          <div className="max-w-xl pl-1 border-l-2 border-electric/30">
             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed pl-6 transition-colors duration-300">
              321work acts as the operational and analytical infrastructure for high-impact technology projects. We apply business intelligence and market forensics to validate and accelerate climate solutions.
            </p>
          </div>
        </section>

        {/* Ventures / Incubator Section */}
        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Active Lab</h3>
            <div className="h-[1px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent flex-grow transition-colors duration-300"></div>
          </div>
          
          <ProjectCard 
            project={aridInsights} 
            onAction={() => setIsModalOpen(true)}
          />
        </section>
      </main>

      {/* Footer / Bridge Signature */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800/50 bg-white dark:bg-[#131313] z-10 relative transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* The Bridge Signature */}
                <div className="font-mono text-sm text-gray-500 dark:text-gray-400 space-y-6">
                    <div>
                        <p className="text-black dark:text-white font-bold transition-colors duration-300">Cortez Fields</p>
                        <p className="text-gray-600 dark:text-gray-500">Principal, 321work</p>
                        <p className="text-gray-500 dark:text-gray-600 text-xs mt-1">Analytics & Venture Development</p>
                    </div>

                    <div className="pl-4 border-l border-electric/40 py-1">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Currently Incubating:</p>
                        <p className="text-electric font-medium">AridInsights <span className="text-gray-300 dark:text-gray-600 font-normal">|</span> Water Scarcity Solutions</p>
                    </div>
                </div>

                {/* Contact / Location */}
                <div className="font-mono text-xs text-gray-500 dark:text-gray-500 leading-loose md:text-right">
                    <p>📍 100 East Pine St. Suite 110, Orlando, FL 32801</p>
                    <p>🌐 <span className="text-gray-400 dark:text-gray-300">321work.com</span></p>
                    <p>✉️ <a href="mailto:hello@321work.com" className="hover:text-electric transition-colors">hello@321work.com</a></p>
                    <p className="mt-8 text-gray-400 dark:text-gray-700">© {currentYear} 321work. All rights reserved.</p>
                </div>
            </div>
        </div>
      </footer>

      {/* Interactive Elements */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Request Access" 
      />

      {/* Decorative Background Texture - Adapts to Light/Dark */}
      <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-0 dark:opacity-100" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 50% 0%, #222222 0%, #1a1a1a 70%)',
           }}>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-100 dark:opacity-0 bg-gray-50"></div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
    </div>
  );
};

export default App;