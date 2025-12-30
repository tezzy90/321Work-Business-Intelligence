import React from 'react';

const DarbonneGate: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0c0a09] text-[#a8a29e] font-serif flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Vignette Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

            {/* Tag */}
            <div className="z-10 mb-8 border border-[#78350f]/30 bg-[#78350f]/10 px-4 py-1 rounded-full">
                <span className="text-xs uppercase tracking-[0.2em] text-[#d6d3d1]">Strategic Land Acquisition</span>
            </div>

            {/* Main Content */}
            <div className="z-10 text-center max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl text-[#fafaf9] tracking-tight leading-tight">
                    PRESERVING THE<br />
                    <span className="italic text-[#d6d3d1]">SPORTSMAN'S PARADISE</span>
                </h1>

                <p className="text-sm md:text-base font-sans tracking-wide max-w-lg mx-auto leading-relaxed opacity-80">
                    Where 135,000+ acres of public hunting land meets Northeast Louisiana's only Hunter-Angler RV Resort.
                    <br />
                    <span className="text-[#d6d3d1]/60 text-xs mt-2 block">Pre-seed Development</span>
                </p>

                <div className="pt-8 flex flex-col items-center space-y-6">
                    <div className="inline-block border border-[#d6d3d1]/20 px-8 py-3 bg-white/5 backdrop-blur-sm text-[#d6d3d1] font-sans text-xs tracking-[0.2em] uppercase">
                        Coming Soon
                    </div>

                    <a href="mailto:cortez@321work.com?subject=Darbonne%20Gate%20Inquiry" className="text-[#78350f] hover:text-[#a8a29e] transition-colors text-[10px] uppercase tracking-[0.15em] border-b border-[#78350f]/30 pb-1">
                        Operator & Investor Inquiries
                    </a>
                </div>
            </div>

            {/* Footer Element */}
            <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] opacity-40 font-sans">
                Darbonne Gate Holdings
            </div>
        </div>
    );
};

export default DarbonneGate;
