import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Get In Touch
          </span>
        </h2>
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-gray-300 mb-6">
            I’d love to hear from you! Click the button below to send me an email.
          </p>
          <a
            href="mailto:tatebreg@gmail.com"
            className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}