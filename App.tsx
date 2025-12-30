import React from 'react';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">

      {/* Header Stamp - Top Left */}
      <header className="fixed top-0 left-0 p-6 md:p-8 z-50">
        <h1 className="text-sm font-bold tracking-tight">321work Inc.</h1>
      </header>

      {/* Main Grid - Desktop: Split Screen, Mobile: Stacked */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Left Column - The Manifesto */}
        <div className="flex flex-col p-6 md:p-16 pb-24 md:pb-32">

          {/* Negative Space (40% on desktop) */}
          <div className="hidden md:block h-[40vh] shrink-0" />

          {/* The Foundation Text */}
          <div className="max-w-md font-mono text-xs md:text-sm leading-relaxed space-y-6">

            <h2 className="text-base md:text-lg font-bold tracking-wider mb-6">
              THE FOUNDATION
            </h2>

            <p>
              321Work Inc. is a privately held venture operating company.
            </p>

            <p>
              We exist to incubate, operate, and house early-stage ventures, intellectual property, and experiments until they reach clarity.
            </p>

            <div className="space-y-1">
              <p>Some ventures graduate.</p>
              <p>Some remain internal.</p>
              <p>Some are shut down.</p>
            </div>

            <p className="font-bold">
              We are the wrapper. They are the work.
            </p>

            {/* Hidden Block for AI Clarity */}
            <div className="hidden">
              Entity Role: Venture holding and incubation company
              Function: Build, test, operate, and spin out ventures
              Structure: Florida S-Corporation
              Scope: Multi-venture, experimental, evolving
            </div>

            {/* Founder Data Block */}
            <div className="border-t border-gray-300 pt-6 mt-8 space-y-1 text-[11px] md:text-xs">
              <p className="font-bold">CORTEZ FIELDS</p>
              <p className="flex justify-between">
                <span>Principal, 321work Inc.</span>
                <span className="text-gray-500">Est. 2019</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - The CTA */}
        <div className="flex flex-col p-6 md:p-16 bg-white">

          {/* Negative Space to align with Left Column */}
          <div className="hidden md:block h-[40vh] shrink-0" />

          <div className="flex flex-col">
            <h2 className="text-base md:text-lg font-bold tracking-wider mb-6 font-mono hidden md:block">
              FEATURED VENTURES
            </h2>

            <div className="flex flex-col space-y-8 md:space-y-12 justify-center flex-grow">
              <a
                href="https://aridinsights.com"
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight hover:opacity-60 transition-opacity text-left leading-tight"
              >
                [ VISIT ARID<br />INSIGHTS → ]
              </a>

              <a
                href="https://darbonnegate.com"
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight hover:opacity-60 transition-opacity text-left leading-tight"
              >
                [ VISIT DARBONNE<br />GATE → ]
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Solid Black Footer - The S-Corp Flex */}
      <footer className="bg-black text-white py-6 md:py-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Desktop: 3-column grid, Mobile: Stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center md:text-left font-mono text-[10px] md:text-[11px]">

            {/* Left: HQ Address */}
            <div className="text-white">
              100 East Pine St. #110<br />
              Orlando, FL 32801
            </div>

            {/* Center: Privacy Policy */}
            <div className="text-white text-center">
              <a href="/privacy.html" className="underline hover:opacity-60 transition-opacity">
                Privacy Policy
              </a>
            </div>

            {/* Right: S-Corp Legal */}
            <div className="text-[#888888] md:text-right">
              © {currentYear} 321work Inc.<br />
              A Registered S-Corporation.
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;