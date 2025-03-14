import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Title with Black and White Gradient */}
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Experience
          </span>
        </h2>

        {/* Main Timeline Container with spacing */}
        <div className="relative border-l-4 border-white ml-6 mt-4 space-y-6">
          {/* Leonis Capital (Engineering Fellow) */}
          <div className="relative pl-8 pb-6 group hover:bg-gray-900 transition-colors duration-300 p-4 rounded-lg">
            {/* Centered Circle (White) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full"></div>
            <h3 className="text-2xl font-semibold text-white">
              Engineering Fellow <span className="text-gray-300">@Leonis Capital</span>
            </h3>
            <p className="text-gray-400">March 2025 – Present</p>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
              <li>
                Developing an ML model and full-stack application to rank and review startups, integrating data analysis on startup metrics, market trends, and financial indicators to enhance investment decisions.
              </li>
              <li>
                Building front-end and back-end infrastructure for a scalable tool, gaining VC experience through deal evaluations, and researching emerging industries to support investment thesis.
              </li>
            </ul>
          </div>

          {/* ACT RICE (Tech Solutions Associate) */}
          <div className="relative pl-8 pb-6 group hover:bg-gray-900 transition-colors duration-300 p-4 rounded-lg">
            {/* Centered Circle (White) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full"></div>
            <h3 className="text-2xl font-semibold text-white">
              Tech Solutions Associate <span className="text-gray-300">@ACT RICE</span>
            </h3>
            <p className="text-gray-400">January 2025 - Present</p>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
              <li>
                Developing a health-focused application for Hope Clinic to assist users in their weight loss journey by collecting biometric data.
              </li>
              <li>
                Calculating a weighted health score (0–100) and applying machine learning techniques for personalized insights and recommendations.
              </li>
            </ul>
          </div>

          {/* MD Anderson Cancer Center (Machine Learning Research Assistant) */}
          <div className="relative pl-8 pb-6 group hover:bg-gray-900 transition-colors duration-300 p-4 rounded-lg">
            {/* Centered Circle (White) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full"></div>
            <h3 className="text-2xl font-semibold text-white">
              Machine Learning Research Assistant{" "}
              <span className="text-gray-300">@MD Anderson Cancer Center, Akkemik Lab</span>
            </h3>
            <p className="text-gray-400">October 2024 - Present</p>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
              <li>
                Designing and testing ML algorithms to automate detection and quantification of biological markers in cellular images, focusing on chromosomal instability (CIN).
              </li>
              <li>
                Collaborating with interdisciplinary teams to optimize Python-based image analysis workflows for large-scale biomedical research.
              </li>
            </ul>
          </div>

          {/* Stanford Pacific Fund LLP (Summer Investment Research Intern) */}
          <div className="relative pl-8 group hover:bg-gray-900 transition-colors duration-300 p-4 rounded-lg">
            {/* Centered Circle (White) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full"></div>
            <h3 className="text-2xl font-semibold text-white">
              Summer Investment Research Intern{" "}
              <span className="text-gray-300">@Stanford Pacific Fund LLP</span>
            </h3>
            <p className="text-gray-400">June 2022 - August 2023</p>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
              <li>
                Developed custom Python scripts for automated data extraction and cleaning from financial APIs.
              </li>
              <li>
                Integrated DCF models and performed data-driven forecasting to generate strategic investment recommendations.
              </li>
              <li>
                Presented findings to key stakeholders, driving data-backed investment decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;