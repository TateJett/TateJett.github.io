import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Portfolio</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <HashLink to="/#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">About</HashLink>
              <HashLink to="/#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">Projects</HashLink>
              <HashLink to="/#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">Contact</HashLink>
              <div className="flex space-x-4 ml-4">
                <a href="https://github.com/TateJett" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/tatejettbregman/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:tatebreg@gmail.com" className="text-gray-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white z-50 relative">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-slate-900/90 p-4 space-y-4 z-40">
          <HashLink
            to="/#about"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            About
          </HashLink>
          <HashLink
            to="/#projects"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Projects
          </HashLink>
          <HashLink
            to="/#contact"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Contact
          </HashLink>
          <div className="flex space-x-4">
            <a
              href="https://github.com/TateJett"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tatejettbregman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tatebreg@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}