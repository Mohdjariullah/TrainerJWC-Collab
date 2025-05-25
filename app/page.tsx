'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import FormWizard from '@/components/FormWizard';

export default function Home() {
  const [started, setStarted] = useState(false);
  
  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div 
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-black flex items-center justify-center overflow-hidden py-8 px-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto text-center w-full"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 sm:mb-12 px-4">
                Train Like a Pro Evaluation
              </h1>
              
              {/* Two trainers side by side */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center mb-6 sm:mb-8 w-full">
                {/* JC Basketball */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden mb-3 sm:mb-4" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                    <Image
                      src="/jc-basketball-player.JPG"
                      alt="JC Basketball"
                      width={280}
                      height={350}
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                      priority
                      onError={(e) => {
                        console.error('Failed to load JC Basketball image');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider">Jake Cioe</h2>
                </div>

                {/* Tyler Basketball */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden mb-3 sm:mb-4" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                    <Image
                      src="/tyler-basketball.jpg"
                      alt="Tyler Basketball"
                      width={280}
                      height={350}
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                      priority
                      onError={(e) => {
                        console.error('Failed to load Tyler Basketball image');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider">Tyler Matthews</h2>
                </div>
              </div>

              {/* Centered description */}
              <div className="mb-8 sm:mb-12 px-4">
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
                 Take the 3-minute evaluation to find the exact gaps in your game—and get a custom action plan from former D-1 guard Jake Cioe and Skills Trainer Tyler Matthews.
                </p>
              </div>

              {/* Get Started Button and Text */}
              <div className="space-y-4 sm:space-y-6 px-4">
                <motion.button 
                  onClick={() => setStarted(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-blue-500 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
                >
                  Get Started
                </motion.button>
                <p className="text-gray-500 text-sm sm:text-base">
                  Takes only 3 minutes. Get instant results.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen bg-black flex items-center justify-center overflow-hidden"
        >
          <FormWizard />
        </motion.div>
      )}
    </AnimatePresence>
  );
}