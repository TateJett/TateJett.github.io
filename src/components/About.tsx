import React from 'react';
import { Code, Brain, Laptop, Terminal } from 'lucide-react';
import profileImage from '../assets/BRG05983 2.png'; // Adjust the relative path

export default function About() {
  const skills = [
    { icon: <Code className="w-6 h-6" />, title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript'] },
    { icon: <Brain className="w-6 h-6" />, title: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn'] },
    { icon: <Laptop className="w-6 h-6" />, title: 'Web Dev', items: ['React', 'Node.js', 'Next.js'] },
    { icon: <Terminal className="w-6 h-6" />, title: 'Tools', items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a Computer Science student at Rice University, Currently working at MD Anderson developing machine learning algorithms to automate the detection and quantification of biological
              markers in cellular images, focusing on chromosomal instability (CIN) as a key indicator of cancer progression. 
            </p>
            <p className="text-gray-300 text-lg">
              My interests span across various domains including artificial intelligence, web development, and software engineering. 
              I enjoy tackling complex problems and turning ideas into reality through code.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {skills.map((skill) => (
                <div key={skill.title} className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4 text-blue-400">
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
              className="rounded-full overflow-hidden border-4 border-blue-500"
              style={{
                width: '400px', // Set the width to 200px
                height: '600px', // Set the height to 200px
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