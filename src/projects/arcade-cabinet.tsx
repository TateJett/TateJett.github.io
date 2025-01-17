import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArcadeCabinet() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-slate-800">
        <h1 className="text-2xl font-bold">Arcade Cabinet</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-8">
        {/* Page Title and Description */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Arcade Cabinet</h2>
          <p className="text-gray-300 leading-relaxed">
            This page is a work in progress.
          </p>
        </div>
      </div>
    </div>
  );
}