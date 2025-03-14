import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';  // Import Experience Section
import Projects from './components/Projects';
import Contact from './components/Contact';
import HandwrittenDigitRecognition from './projects/HandwrittenDigitRecognition';
import WineQualityPrediction from './projects/wine-quality-prediction';
import AmazonReviewSentimentAnalysis from './projects/amazon-review-sentiment-analysis';
import OptimalAirportLocationAnalysis from './projects/optimal-airport-location-analysis';
import ArcadeCabinet from './projects/arcade-cabinet';
import ChromosomalInstabilityDetection from './projects/chromosomal-instability-detection';
import OwlDine from './projects/owldine';

function App() {
  const location = useLocation();

  const hideNavbarPaths = [
    '/projects/handwritten-digit-recognition',
    '/projects/wine-quality-prediction',
    '/projects/amazon-review-sentiment-analysis',
    '/projects/optimal-airport-location-analysis',
    '/projects/arcade-cabinet',
    '/projects/chromosomal-instability-detection',
    '/projects/owldine',
  ];

  return (
    <div className="bg-black min-h-screen">
      <ScrollToTop />
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience /> {/* 👈 Added Experience Section Here */}
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/projects/handwritten-digit-recognition" element={<HandwrittenDigitRecognition />} />
          <Route path="/projects/wine-quality-prediction" element={<WineQualityPrediction />} />
          <Route path="/projects/amazon-review-sentiment-analysis" element={<AmazonReviewSentimentAnalysis />} />
          <Route path="/projects/optimal-airport-location-analysis" element={<OptimalAirportLocationAnalysis />} />
          <Route path="/projects/arcade-cabinet" element={<ArcadeCabinet />} />
          <Route path="/projects/chromosomal-instability-detection" element={<ChromosomalInstabilityDetection />} />
          <Route path="/projects/owldine" element={<OwlDine />} />
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