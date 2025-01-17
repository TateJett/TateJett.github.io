import React from 'react';
import PokemonCard from './PokemonCard';
// Import images from your assets folder
import handwrittenDigitRecognitionImage from '../assets/handwritten digit recognition.png';
import chromosomalInstabilityImage from '../assets/chromosomal instability detection.png';
import wineQualityPredictionImage from '../assets/wine quality prediction.png';
import amazonReviewImage from '../assets/Amazon Review.png';
import optimalAirportLocationImage from '../assets/optimal airport location.png';
import arcadeCabinetImage from '../assets/Arcade Cabinet.png';

const projects = [
  {
    title: 'Handwritten Digit Recognition with CNN',
    description:
      'Developed a Convolutional Neural Network (CNN) to recognize handwritten digits from the MNIST dataset, achieving an accuracy of nearly 98%.',
    type: 'ML',
    image: handwrittenDigitRecognitionImage,
    technologies: ['Python', 'PyTorch', 'MNIST Dataset'],
    link: '/projects/handwritten-digit-recognition', // Link to project page
  },
  {
    title: 'Chromosomal Instability Detection',
    description:
      'Working at MD Anderson on detection and quantification of biological markers in cellular images.',
    type: 'ML',
    image: chromosomalInstabilityImage,
    technologies: ['Python', 'Pytorch'],
    link: '/projects/chromosomal-instability-detection', // Add project-specific link
  },
  {
    title: 'Wine Quality Prediction Using Deep Neural Network',
    description:
      'Built a Deep Neural Network (DNN) to predict the quality of white wine based on various chemical properties, achieving an accuracy of 76.53%.',
    type: 'ML',
    image: wineQualityPredictionImage,
    technologies: ['Python', 'PyTorch', 'Wine Quality Dataset'],
    link: '/projects/wine-quality-prediction', // Add project-specific link
  },
  {
    title: 'Amazon Review Sentiment Analysis',
    description:
      'Analyzed Amazon product reviews to determine customer sentiment.',
    type: 'ML',
    image: amazonReviewImage,
    technologies: ['Python', 'Natural Language Processing', 'Amazon Product Reviews'],
    link: '/projects/amazon-review-sentiment-analysis', // Add project-specific link
  },
  {
    title: 'Optimal Airport Location Analysis',
    description:
      'Conducted an analysis to determine the optimal location for a new airport.',
    type: 'ML',
    image: optimalAirportLocationImage,
    technologies: ['Python', 'Geospatial Analysis', 'Data Visualization'],
    link: '/projects/optimal-airport-location-analysis', // Add project-specific link
  },
  {
    title: 'Arcade Cabinet',
    description:
      'Researched, designed, and fabricated a fully functional arcade cabinet. Developed software to emulate classic arcade games, integrating it with custom-built controls and a user interface. (Image is before painting and adding electronics)',
    type: 'robotics',
    image: arcadeCabinetImage,
    technologies: ['Woodworking', 'Raspberry Pi', 'Electronics'],
    link: '/projects/arcade-cabinet', // Add project-specific link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <PokemonCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}