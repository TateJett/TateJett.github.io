import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HandwrittenDigitRecognition from './projects/HandwrittenDigitRecognition';
import WineQualityPrediction from './projects/wine-quality-prediction';
import AmazonReviewSentimentAnalysis from './projects/amazon-review-sentiment-analysis';
import OptimalAirportLocationAnalysis from './projects/optimal-airport-location-analysis';
import ArcadeCabinet from './projects/arcade-cabinet';
import ChromosomalInstabilityDetection from './projects/chromosomal-instability-detection';

function App() {
  const location = useLocation();

  // Define paths where the main navbar should be hidden
  const hideNavbarPaths = [
    '/projects/handwritten-digit-recognition',
    '/projects/wine-quality-prediction',
    '/projects/amazon-review-sentiment-analysis',
    '/projects/optimal-airport-location-analysis',
    '/projects/arcade-cabinet',
    '/projects/chromosomal-instability-detection',
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Conditionally Render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <main>
        <Routes>
          {/* Default homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          {/* Project pages */}
          <Route
            path="/projects/handwritten-digit-recognition"
            element={<HandwrittenDigitRecognition />}
          />
          <Route
            path="/projects/wine-quality-prediction"
            element={<WineQualityPrediction />}
          />
          <Route
            path="/projects/amazon-review-sentiment-analysis"
            element={<AmazonReviewSentimentAnalysis />}
          />
          <Route
            path="/projects/optimal-airport-location-analysis"
            element={<OptimalAirportLocationAnalysis />}
          />
          <Route
            path="/projects/arcade-cabinet"
            element={<ArcadeCabinet />}
          />
          <Route
            path="/projects/chromosomal-instability-detection"
            element={<ChromosomalInstabilityDetection />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}