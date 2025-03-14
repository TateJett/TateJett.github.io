import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChromosomalInstabilityDetection() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black">
        <h1 className="text-2xl font-bold">Chromosomal Instability Detection</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-8">
        {/* Page Title and Description */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Chromosomal Instability Detection</h2>
          <p className="text-gray-300 leading-relaxed">
            This page is a work in progress.
          </p>
        </div>
      </div>
    </div>
  );
}