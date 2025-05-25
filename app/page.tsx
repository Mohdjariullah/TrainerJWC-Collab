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
          className="h-screen bg-black flex items-center justify-center overflow-hidden"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto text-center px-4"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold text-white tracking-tight mb-12">
                Train Like a Pro Evaluation
              </h1>
              
              {/* Two trainers side by side */}
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-8">
                {/* JC Basketball */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[280px] mx-auto rounded-[32px] overflow-hidden" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                    <Image
                      src="/form-wizard/public/jc-basketball-player.JPG"
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
                </div>

                {/* Tyler Basketball */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[280px] mx-auto rounded-[32px] overflow-hidden" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                    <Image
                      src="/form-wizard/public/tyler-basketball.jpg"
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
                </div>
              </div>

              {/* Centered description */}
              <div className="mb-12">
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
                  Take the 3-minute evaluation to find the exact gaps in your game—and get a custom action plan from Skills Trainer Tyler Matthews.
                </p>
              </div>

              {/* Get Started Button and Text */}
              <div className="space-y-6">
                <motion.button 
                  onClick={() => setStarted(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Get Started
                </motion.button>
                <p className="text-gray-500">
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