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
              Climate intelligence studio building software infrastructure for water-stressed markets. We find business opportunities in regulatory fragmentation.
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 pl-6 mt-4 italic transition-colors duration-300">
              Targeting underserved mid-market segments in the American Southwest through systematic market validation and AI-powered development.
            </p>
          </div>
        </section>

        {/* Our Thesis Section */}
        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white transition-colors duration-300">
              Our <span className="text-electric">Thesis</span>
            </h2>

            <div className="space-y-8">
              {/* Core Insight */}
              <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-8 border border-electric/20 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4 text-electric font-mono">
                  REGULATORY FRAGMENTATION CREATES BUSINESS OPPORTUNITIES
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Water-stressed regions feature complex, overlapping regulatory frameworks that create compliance pain points for mid-market operators. Where large consulting firms serve Fortune 500 clients with $1M+ budgets, thousands of developers, agricultural operators, and regional lenders lack affordable water risk intelligence.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 hover:border-electric/30 transition-all duration-300">
                  <div className="text-electric font-mono text-sm mb-2">01</div>
                  <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Market Forensics</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    We gather information others don't bother to aggregate—fragmented regulatory data, district-specific compliance requirements, and climate model projections.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 hover:border-electric/30 transition-all duration-300">
                  <div className="text-electric font-mono text-sm mb-2">02</div>
                  <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Systematic Validation</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    Structured customer discovery interviews, competitive gap analysis, and go/no-go decision gates before committing capital to development.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 hover:border-electric/30 transition-all duration-300">
                  <div className="text-electric font-mono text-sm mb-2">03</div>
                  <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Bootstrap Efficiency</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    AI-assisted development on Google Cloud Platform, white-label partnerships for initial market entry, and focus on underserved segments with clear willingness to pay.
                  </p>
                </div>
              </div>

              {/* Competitive Advantage */}
              <div className="bg-gradient-to-r from-electric/5 to-transparent rounded-lg p-6 border-l-4 border-electric">
                <h4 className="font-bold mb-3 text-electric">Our Competitive Advantage</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  While large environmental consulting firms chase enterprise contracts and generic SaaS companies avoid regulatory complexity, we specialize in the intersection: <strong className="text-black dark:text-white">software infrastructure for fragmented compliance markets</strong>. Our research-intensive approach identifies business opportunities that require domain expertise to execute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Lab Section */}
        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Active Lab</h3>
            <div className="h-[1px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent flex-grow transition-colors duration-300"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* AridInsights Project Card */}
            <ProjectCard
              project={aridInsights}
              onAction={() => setIsModalOpen(true)}
            />

            {/* Vector Exploration Research */}
            <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-8 border border-electric/20 hover:border-electric/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white transition-colors duration-300">
                    Vector Exploration Research
                  </h3>
                  <p className="text-electric font-mono text-sm">
                    Status: Discovery Sprint | 6 Alternative Markets
                  </p>
                </div>
                <span className="px-3 py-1 bg-electric/10 text-electric rounded-full text-sm font-mono">
                  ACTIVE
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Parallel research sprint evaluating 6 water insecurity business vectors to validate whether AridInsights represents the optimal exit opportunity. Systematic customer discovery across agricultural lending, industrial water efficiency, ESG reporting, infrastructure finance, and precision irrigation markets.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-[#1a1a1a] rounded p-4 transition-colors duration-300">
                  <div className="text-electric font-mono text-xs mb-1">METHODOLOGY</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    18-20 customer interviews • Competitive gap analysis • Go/no-go decision gates
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] rounded p-4 transition-colors duration-300">
                  <div className="text-electric font-mono text-xs mb-1">TIMELINE</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    4-week sprint • Week 3 decision analysis • Final vector selection
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-white dark:bg-[#1a1a1a] rounded text-xs font-mono text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Agricultural Lending ($250B TAM)
                </span>
                <span className="px-3 py-1 bg-white dark:bg-[#1a1a1a] rounded text-xs font-mono text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Industrial Efficiency ($50B TAM)
                </span>
                <span className="px-3 py-1 bg-white dark:bg-[#1a1a1a] rounded text-xs font-mono text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  ESG Water Reporting ($3T ESG Market)
                </span>
                <span className="px-3 py-1 bg-white dark:bg-[#1a1a1a] rounded text-xs font-mono text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Infrastructure Finance ($100B Annual)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Orlando Section */}
        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white transition-colors duration-300">
              Why <span className="text-electric">Orlando</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 transition-colors duration-300">
                <div className="text-electric font-mono text-sm mb-3">TALENT ACCESS</div>
                <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">University of Central Florida Partnerships</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Engineering talent through senior design projects and graduate research assistants. Second-largest university in the U.S. with strong engineering programs.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 transition-colors duration-300">
                <div className="text-electric font-mono text-sm mb-3">GRANT FUNDING</div>
                <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Florida High Tech Corridor</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Access to matching grant programs, NSF SBIR support infrastructure, and USDA climate innovation funding without traditional VC dilution.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 transition-colors duration-300">
                <div className="text-electric font-mono text-sm mb-3">REMOTE-FIRST</div>
                <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Geographic Arbitrage</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Lower operational costs than Austin/Phoenix tech hubs while serving Southwest markets remotely. Florida S-Corp structure with no state income tax.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-electric/10 transition-colors duration-300">
                <div className="text-electric font-mono text-sm mb-3">CLIMATE TECH</div>
                <h4 className="font-bold mb-3 text-black dark:text-white transition-colors duration-300">Growing Climate Sector</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Florida's water management expertise (SFWMD), hurricane resilience focus, and increasing climate tech investment create aligned ecosystem.
                </p>
              </div>

            </div>

            <div className="mt-8 bg-gradient-to-r from-electric/5 to-transparent rounded-lg p-6 border-l-4 border-electric">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <strong className="text-black dark:text-white">Strategic positioning:</strong> We leverage Orlando's talent and capital advantages while serving water-stressed markets in Texas, Arizona, Nevada, and California. Our research shows regulatory fragmentation is geography-agnostic—the same systematic validation approach works across Southwest markets.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800/50 bg-white dark:bg-[#131313] z-10 relative transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Company Info */}
            <div>
              <h4 className="font-bold mb-3 text-electric">321Work Inc.</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-2 transition-colors duration-300">
                Climate intelligence studio focused on water-stressed markets in the American Southwest.
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs transition-colors duration-300">
                Florida S-Corporation
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-3 text-electric">Contact</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 transition-colors duration-300">
                <a href="mailto:hello@321work.com" className="hover:text-electric transition-colors">
                  hello@321work.com
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                100 E Pine St<br />
                Orlando, FL 32801
              </p>
            </div>

            {/* Focus Areas */}
            <div>
              <h4 className="font-bold mb-3 text-electric">Focus Areas</h4>
              <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-1 transition-colors duration-300">
                <li>→ Texas GCD Compliance</li>
                <li>→ ESG Water Reporting</li>
                <li>→ Water Infrastructure Finance</li>
                <li>→ Agricultural Water Risk</li>
              </ul>
            </div>

          </div>

          <div className="text-center text-gray-500 dark:text-gray-600 text-xs pt-8 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
            <p>© {currentYear} 321Work Inc. All rights reserved.</p>
            <p className="mt-2">
              Principal: Cortez Fields | Targeting 7-year exit strategy
            </p>
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