import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptimalAirport1 from '../assets/OptimalAirport1.png';
import OptimalAirport2 from '../assets/OptimalAirport2.png';
import OptimalAirport3 from '../assets/OptimalAirport3.png';
import OptimalAirport4 from '../assets/OptimalAirport4.png';

export default function OptimalAirportLocationAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black">
        <h1 className="text-2xl font-bold">Optimal Airport Location Analysis</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-8">
        {/* Project Title and Overview */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Optimal Airport Location Analysis</h2>
          <p className="text-gray-400 text-sm mb-4">November 1, 2023</p>
          <p className="text-gray-300 leading-relaxed">
            This project examines the placement of airports to optimize accessibility and minimize travel time for densely
            populated areas across the United States. By using hierarchical clustering algorithms and geographic data, we
            propose new airport locations to serve underserved areas more effectively.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Project Overview */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              Airports play a critical role in connecting cities and supporting economic growth. However, existing airport
              infrastructure may leave some areas underserved, leading to increased travel times and reduced accessibility for
              large populations. This project aims to identify optimal airport placements by analyzing:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Population density data to locate underserved regions.</li>
              <li>Proximity between cities and existing airports.</li>
              <li>Spatial clustering to group cities into regional hubs.</li>
            </ul>
          </section>

          {/* Methodology */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 leading-relaxed">
              <li>
                <strong>Data Preparation and Preprocessing</strong>
                <p className="text-gray-300 leading-relaxed">
                  The dataset included U.S. city geographic coordinates and population data. Cities with extreme outliers,
                  such as those in Alaska or Hawaii, were carefully analyzed to ensure meaningful results. Population density
                  values were scaled and visualized using scatter plots, with point sizes representing population.
                </p>
                <div className="mt-4">
                  <img
                    src={OptimalAirport1}
                    alt="Population Density Scatter Plot"
                    className="rounded shadow-md w-3/4 mx-auto"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Population Density Scatter Plot: U.S. cities sized by population density.
                  </p>
                </div>
              </li>
              <li>
                <strong>Hierarchical Clustering</strong>
                <p className="text-gray-300 leading-relaxed">
                  Agglomerative clustering was applied to divide U.S. cities into groups based on spatial proximity and
                  population density. Ward's method minimized variance within clusters, ensuring meaningful regional groupings.
                  The resulting clusters were color-coded to reflect distinct population hubs, which helped identify regional
                  needs for airports.
                </p>
                <div className="mt-4">
                  <img
                    src={OptimalAirport2}
                    alt="Clustered Cities Scatter Plot"
                    className="rounded shadow-md w-3/4 mx-auto"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Clustered Cities: Hierarchical clustering groups cities into population-based regions.
                  </p>
                </div>
              </li>
              <li>
                <strong>Centroid Calculation</strong>
                <p className="text-gray-300 leading-relaxed">
                  For each cluster, the centroid (average latitude and longitude) was calculated as the potential airport
                  location. This approach ensures that the suggested airport minimizes the average distance for people in
                  the cluster, improving accessibility for densely populated areas.
                </p>
                <div className="mt-4">
                  <img
                    src={OptimalAirport3}
                    alt="Cluster Centroids"
                    className="rounded shadow-md w-3/4 mx-auto"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Cluster Centroids: Red markers indicate proposed airport locations.
                  </p>
                </div>
              </li>
              <li>
                <strong>Validation</strong>
                <p className="text-gray-300 leading-relaxed">
                  To validate the model, the suggested centroids were compared with existing large airports using the
                  Haversine formula to calculate distances. The results indicated that the new locations reduce travel
                  times for underserved regions while aligning well with existing infrastructure.
                </p>
                <div className="mt-4">
                  <img
                    src={OptimalAirport4}
                    alt="Large Airports in the U.S."
                    className="rounded shadow-md w-3/4 mx-auto"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Large Airports in the United States: Existing airports overlaid on population clusters.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Results</h3>
            <p className="text-gray-300 leading-relaxed">
              The model identified several optimal airport locations that reduced average travel times for underserved regions by
              an average of 236.28 kilometers. The clustering approach ensured maximum population coverage while avoiding
              redundancy with existing airports. This analysis provides a foundational framework for infrastructure planning.
            </p>
          </section>

          {/* Installation and Usage */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Installation and Usage</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Prerequisites:</strong> Python 3.x with the following libraries installed: pandas, numpy, matplotlib, scikit-learn.
            </p>
            <ol className="list-decimal list-inside text-gray-300 leading-relaxed">
              <li>
                <strong>Clone the Repository:</strong> Download the project from the{' '}
                <a
                  href="https://github.com/TateJett/Optimal-Airport-Location-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 underline"
                >
                  GitHub Repository
                </a>
                .
              </li>
              <li>
                <strong>Install Dependencies:</strong> Run <code>pip install pandas numpy matplotlib scikit-learn</code>.
              </li>
              <li>
                <strong>Run the Notebook:</strong> Execute <code>Optimal-Airport-Location-Analysis.ipynb</code> in Jupyter Notebook or Google Colab.
              </li>
            </ol>
          </section>
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/TateJett/Optimal-Airport-Location-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}