import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </span>
        </h2>
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-300">Or reach out directly:</p>
            <a
              href="mailto:tatebreg@gmail.com"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mt-2"
            >
              <Mail className="w-5 h-5" />
              <span>tatebreg@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}