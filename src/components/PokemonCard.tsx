import React from 'react';

interface PokemonCardProps {
  title: string;
  description: string;
  type: string;
  image: string;
  technologies: string[];
}

export default function PokemonCard({
  title,
  description,
  type,
  image,
  technologies,
}: PokemonCardProps) {
  const typeColors = {
    'full-stack': 'from-purple-400 to-purple-600',
    'web-app': 'from-blue-400 to-blue-600',
    'ML': 'from-green-400 to-green-600',
    'mobile-app': 'from-orange-400 to-orange-600',
    'robotics': 'from-red-400 to-red-600',
  };

  return (
    // Wrap the card in an anchor tag pointing to GitHub
    <a
      href="https://github.com/TateJett"
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-all duration-300 hover:scale-105 hover:rotate-1"
    >
      <div className="relative w-80 h-[28rem] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl overflow-hidden border-2 border-slate-700">
        {/* Type Badge */}
        <div
          className={`absolute top-0 right-0 px-4 py-1 text-white text-sm rounded-tl-lg bg-gradient-to-l ${typeColors[type as keyof typeof typeColors]}`}
        >
          {type
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </div>

        <div className="p-4">
          {/* Project Title - Adjusted margin-top */}
          <h3 className="text-xl font-bold text-white mt-2.5 mb-2">{title}</h3>

          {/* Project Image */}
          <div className="relative mt-2 mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Project Info */}
          <p className="text-gray-300 text-sm mb-2">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-slate-700 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}