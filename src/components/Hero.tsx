import React from 'react';
import { Brain, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Background Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <Brain className="w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] md:w-[36rem] md:h-[36rem]" />
          </div>
          {/* Hero Content */}
          <div className="relative space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
                Hello, I'm Tate
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              ML/AI Enthusiast & Computer Science Student
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="typing-text text-base sm:text-lg text-center sm:text-left break-words">
                Building intelligent systems that learn and adapt
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}