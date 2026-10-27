import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export function FloatingChatButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating button once the user scrolls past 400px (out of the hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={scrollToHero}
            className="relative group flex items-center justify-center w-14 h-14 rounded-full gradient-bg text-white shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none"
            aria-label="Back to AI Chatbot"
          >
            {/* Ripple Pulse Animation Effect */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40 pointer-events-none"></span>

            <MessageSquare className="h-6 w-6 relative z-10" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-card-foreground border border-border text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl pointer-events-none">
              Chat with my AI Avatar
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}