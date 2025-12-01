import React, { useState } from 'react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // -------------------------------------------------------------------------
    // WEB3FORMS SETUP (Instant, Free, No Account Required)
    // -------------------------------------------------------------------------
    const ACCESS_KEY = "0b04c81e-bf39-4abb-9e60-db4134fb1ada"; 

    // Append the access key to the form data
    formData.append("access_key", ACCESS_KEY);
    
    // Optional: Spam protection (Honeypot) - handled automatically by Web3Forms if using their libraries,
    // but for raw fetch, we rely on their backend spam filtering.
    formData.append("subject", "New Request Access from 321work Site");
    formData.append("from_name", "321work Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form Error:", data);
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("There was an error connecting to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 dark:bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-300">
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 p-8 max-w-md w-full relative shadow-2xl animate-fade-in ring-1 ring-black/5 dark:ring-white/10 transition-colors duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-electric transition-colors font-mono"
          aria-label="Close modal"
        >
          [CLOSE]
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm font-mono leading-relaxed transition-colors duration-300">
              Enter your email to receive updates on development milestones and early access availability.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honey Pot for Spam Bots (Hidden) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="name@company.com"
                  // NOTE: text-base prevents iOS from zooming in when focusing the input
                  className="w-full bg-gray-50 dark:bg-[#111] border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-3 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/50 font-mono text-base transition-all placeholder-gray-400 dark:placeholder-gray-600"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black dark:bg-offwhite text-white dark:text-black hover:bg-electric hover:text-black font-bold py-3 px-4 transition-all duration-300 uppercase text-xs tracking-[0.2em] ${isSubmitting ? 'opacity-50 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Processing...' : 'Notify Me'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <div className="text-electric text-4xl mb-4">●</div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Request Received</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-8">
              We have logged your interest in AridInsights. We will be in touch as we approach Q1 2026.
            </p>
            <button 
              onClick={handleClose}
              className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white uppercase tracking-widest border-b border-transparent hover:border-black dark:hover:border-white transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};