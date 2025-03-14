import React from 'react';
import { Code, Brain, Laptop, Terminal } from 'lucide-react';
import profileImage from '../assets/BRG05983 2.png'; // Adjust the relative path

export default function About() {
  const skills = [
    { icon: <Code className="w-6 h-6" />, title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++'] },
    { icon: <Brain className="w-6 h-6" />, title: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP'] },
    { icon: <Laptop className="w-6 h-6" />, title: 'Web Dev', items: ['React', 'Node.js', 'Next.js', 'Flask'] },
    { icon: <Terminal className="w-6 h-6" />, title: 'Tools', items: ['Git', 'Docker', 'AWS', 'PostgreSQL'] },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Computer Science and Mathematics student at Rice University with experience building ML systems at MD Anderson Cancer Center and LEONIS CAPITAL. I develop machine learning algorithms for cancer research and create AI-powered applications for investment analysis.
            </p>
            <p className="text-gray-300 text-lg">
              My passion lies in building intelligent systems that can learn and adapt. Whether working on cancer detection algorithms, investment tools, or educational platforms, I'm focused on creating technology that solves real problems.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {skills.map((skill) => (
                <div key={skill.title} className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4 text-gray-400">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* Explicitly set the size */}
            <div
              className="overflow-hidden border-4 border-white"
              style={{
                width: '400px', // Set the width to 200px
                height: '500px', // Set the height to 200px
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}