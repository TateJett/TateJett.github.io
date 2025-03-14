import React from 'react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  title: string;
  description: string;
  type: string;
  image: string;
  technologies: string[];
  link: string; // Link to the project page
}

export default function PokemonCard({
  title,
  description,
  type,
  image,
  technologies,
  link,
}: PokemonCardProps) {
  const typeColors = {
    'full-stack': 'from-purple-500 via-purple-400 to-purple-600',
    'web-app': 'from-blue-500 via-blue-400 to-blue-600',
    'ML': 'from-green-500 via-green-400 to-green-600',
    'mobile-app': 'from-orange-500 via-orange-400 to-orange-600',
    'robotics': 'from-red-500 via-red-400 to-red-600',
  };

  // Truncate description to prevent overflow
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <Link
      to={link}
      className="block h-full w-full"
    >
      <div className="flex flex-col h-full bg-gray-800 rounded-xl relative">
        {/* Type Badge in top right */}
        <div
          className={`absolute top-0 right-0 px-4 py-1 text-white text-sm font-bold rounded-bl-lg bg-gradient-to-r ${typeColors[type as keyof typeof typeColors]}`}
        >
          {type}
        </div>

        {/* Title at top */}
        <h3 className="text-xl font-bold text-white px-4 pt-4 pb-2">
          {title}
        </h3>

        {/* Image section */}
        <div className="px-4 mb-3">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="px-4 flex-grow">
          <p className="text-gray-300 text-sm leading-relaxed">
            {truncateDescription(description, 110)}
          </p>
        </div>

        {/* Technologies */}
        <div className="px-4 pb-4 pt-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-gray-700 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}