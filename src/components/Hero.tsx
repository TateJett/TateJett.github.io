import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import { Brain, Terminal } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // List of phrases to cycle through
  const phrases = [
    'Building intelligent systems that learn and adapt',
    'Turning data into meaningful insights',
    'Creating AI solutions for real-world problems',
    'Exploring the frontiers of machine learning',
    'Developing algorithms that transform industries'
  ];

  // Speed settings (in milliseconds)
  const typingSpeed = 60;      // Speed when typing
  const deletingSpeed = 30;    // Speed when deleting
  const pauseDuration = 10000; // 10 seconds pause when phrase is complete
  
  // Keep track of current phrase
  const currentPhrase = phrases[currentPhraseIndex];
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // If paused, wait for pause duration then start deleting
    if (isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    // Handle typing animation
    if (!isDeleting && displayText === currentPhrase) {
      // Full phrase typed, start pause
      setIsPaused(true);
      return;
    }

    // Handle deleting animation
    if (isDeleting && displayText === '') {
      // Fully deleted, move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }

    // Set the timeout for the next character
    timeoutRef.current = window.setTimeout(() => {
      setDisplayText(prev => {
        if (isDeleting) {
          // Delete the last character
          return prev.substring(0, prev.length - 1);
        } else {
          // Add the next character
          return currentPhrase.substring(0, prev.length + 1);
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup timeout
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentPhrase, isPaused, currentPhraseIndex, phrases]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Background Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <Brain className="w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] md:w-[36rem] md:h-[36rem]" />
          </div>
          {/* Hero Content */}
          <div className="relative space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Hello, I'm Tate
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              ML/AI Enthusiast & Computer Science Student
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <span className="typing-text text-base sm:text-lg text-center sm:text-left break-words min-h-[28px] md:min-h-[32px]">
                {displayText}
                <span className={`inline-block w-0.5 h-5 ml-0.5 bg-white ${isPaused ? 'opacity-0' : 'animate-blink'}`}></span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <HashLink
                to="#projects"
                className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                View Projects
              </HashLink>
              <HashLink
                to="#contact"
                className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Contact Me
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}