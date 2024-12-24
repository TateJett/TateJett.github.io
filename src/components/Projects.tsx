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
    description: 'Developed a Convolutional Neural Network (CNN) to recognize handwritten digits from the MNIST dataset, achieving an accuracy of nearly 98%.',
    type: 'ML',
    image: handwrittenDigitRecognitionImage, // Use the corresponding image here
    technologies: ['Python', 'PyTorch', 'MNIST Dataset'],
  },
  {
    title: 'Chromosomal Instability Detection',
    description: 'Working at MD Anderson on detection and quantification of biological markers in cellular images.',
    type: 'ML',
    image: chromosomalInstabilityImage, // Use the corresponding image here
    technologies: ['Python', 'Pytorch'],
  },
  {
    title: 'Wine Quality Prediction Using Deep Neural Network',
    description: 'Built a Deep Neural Network (DNN) to predict the quality of white wine based on various chemical properties, achieving an accuracy of 76.53%.',
    type: 'ML',
    image: wineQualityPredictionImage, // Use the corresponding image here
    technologies: ['Python', 'PyTorch', 'Wine Quality Dataset'],
  },
  {
    title: 'Amazon Review Sentiment Analysis',
    description: 'Analyzed Amazon product reviews to determine customer sentiment.',
    type: 'ML',
    image: amazonReviewImage, // Use the corresponding image here
    technologies: ['Python', 'Natural Language Processing', 'Amazon Product Reviews'],
  },
  {
    title: 'Optimal Airport Location Analysis',
    description: 'Conducted an analysis to determine the optimal location for a new airport.',
    type: 'ML',
    image: optimalAirportLocationImage, // Use the corresponding image here
    technologies: ['Python', 'Geospatial Analysis', 'Data Visualization'],
  },
  {
    title: 'Arcade Cabinet',
    description: 'Researched, designed, and fabricated a fully functional arcade cabinet. Developed software to emulate classic arcade games, integrating it with custom-built controls and a user interface. (Image is before painting and adding eletronics) ',
    type: 'robotics',
    image: arcadeCabinetImage, // Use the corresponding image here
    technologies: ['Woodworking', 'Raspberry Pi', 'Electronics'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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