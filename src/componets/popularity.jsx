import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    websites: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });

  const finalValues = {
    websites: 15425,
    clients: 237,
    awards: 11,
    experience: 4
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    // Custom sequence with delays (in milliseconds)
    const animationSequence = [
      { key: 'websites', delay: 0 },      // Start immediately
      { key: 'clients', delay: 300 },     // Start after 300ms
      { key: 'awards', delay: 600 },      // Start after 600ms
      { key: 'experience', delay: 900 }   // Start after 900ms
    ];

    const timeouts = [];
    const intervals = {};

    animationSequence.forEach(({ key, delay }) => {
      const timeout = setTimeout(() => {
        const finalValue = finalValues[key];
        const increment = finalValue / steps;
        let currentStep = 0;

        intervals[key] = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.round(increment * currentStep), finalValue);
          
          setCounts(prev => ({
            ...prev,
            [key]: currentValue
          }));

          if (currentStep >= steps) {
            clearInterval(intervals[key]);
          }
        }, stepDuration);
      }, delay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="w-full bg-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Websites Powered */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {formatNumber(counts.websites)}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
              WEBSITE POWERED
            </div>
          </div>

          {/* Clients Supported */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {formatNumber(counts.clients)}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
              CLIENTS SUPPORTED
            </div>
          </div>

          {/* Awards Winning */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {formatNumber(counts.awards)}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
              AWARDS WINNING
            </div>
          </div>

          {/* Years Experience */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {formatNumber(counts.experience)}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
              YEARS EXPERIENCE
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsCounter;