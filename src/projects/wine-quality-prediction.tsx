import React from 'react';
import { useNavigate } from 'react-router-dom';
import WineGraph1 from '../assets/WineGraph1.png';
import WineGraph2 from '../assets/WineGraph2.png';
import WineGraph3 from '../assets/WineGraph3.png';

export default function WineQualityPrediction() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-slate-800">
        <h1 className="text-2xl font-bold">Wine Quality Prediction</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-8">
        {/* Project Title and Overview */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Wine Quality Prediction Using Deep Neural Network</h2>
          <p className="text-gray-400 text-sm mb-4">April 15, 2024</p>
          <p className="text-gray-300 leading-relaxed">
            This project utilizes a Deep Neural Network (DNN) to predict wine quality based on various chemical
            properties. By leveraging advanced machine learning techniques, the model achieves a prediction accuracy
            of 76.53%, providing valuable insights into the relationship between chemical compositions and wine quality.
          </p>
        </div>

        {/* Visualizations */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Exploratory Data Analysis</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Visualizations were created to better understand the dataset's distribution and relationships between
            features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={WineGraph1} alt="Histogram of Features" className="rounded shadow-md" />
              <p className="text-gray-400 text-sm mt-2 text-center">Histograms of Various Features</p>
            </div>
            <div>
              <img src={WineGraph2} alt="Boxplot of Wine Quality" className="rounded shadow-md" />
              <p className="text-gray-400 text-sm mt-2 text-center">Boxplot of Wine Quality</p>
            </div>
            <div className="col-span-2">
              <img src={WineGraph3} alt="Scatter Matrix" className="rounded shadow-md" />
              <p className="text-gray-400 text-sm mt-2 text-center">Scatter Matrix of Selected Features</p>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Project Overview */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Developed a DNN model to predict wine quality using chemical features.</li>
              <li>Visualized data distributions and feature correlations to understand key factors.</li>
              <li>Optimized the model for structured data and explored feature importance.</li>
            </ul>
          </section>

          {/* Dataset */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Dataset</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong>Wine Quality Dataset</strong> contains chemical properties of wine samples such as pH, acidity,
              and alcohol content, labeled with quality scores ranging from 0 to 10. This dataset is commonly used for
              classification and regression tasks in machine learning.
            </p>
          </section>

          {/* Methodology */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 leading-relaxed">
              <li>
                <strong>Data Preprocessing</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Normalized chemical property values to ensure uniform feature scaling.</li>
                  <li>Split the dataset into training and testing sets for evaluation.</li>
                </ul>
              </li>
              <li>
                <strong>Model Architecture</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Input layer with dimensions matching the number of features.</li>
                  <li>Three hidden layers with ReLU activation for feature interaction.</li>
                  <li>Output layer with a single node for regression, predicting quality scores.</li>
                  <li>Loss function: Mean Squared Error (MSE) to minimize prediction errors.</li>
                  <li>Optimizer: Adam optimizer for efficient convergence.</li>
                </ul>
              </li>
              <li>
                <strong>Training Process</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Trained for 50 epochs with a batch size of 32.</li>
                  <li>Evaluated performance using R-squared and Mean Absolute Error (MAE).</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Results</h3>
            <p className="text-gray-300 leading-relaxed">
              The model achieved an accuracy of 76.53% in predicting wine quality. This demonstrates the potential of
              neural networks in handling structured tabular data. Further enhancements, such as feature engineering and
              hyperparameter optimization, could improve the model's generalization ability.
            </p>
          </section>

          {/* Installation and Usage */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Installation and Usage</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Prerequisites:</strong> Python 3.x with the following libraries installed: pandas, numpy, torch,
              matplotlib, scikit-learn.
            </p>
            <ol className="list-decimal list-inside text-gray-300 leading-relaxed">
              <li>
                <strong>Clone the Repository:</strong> Download the project from the{' '}
                <a
                  href="https://github.com/TateJett/Wine-Quality-Prediction-Using-Deep-Neural-Network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  GitHub Repository
                </a>
                .
              </li>
              <li>
                <strong>Install Dependencies:</strong> Run <code>pip install pandas numpy torch matplotlib scikit-learn</code>.
              </li>
              <li>
                <strong>Run the Notebook:</strong> Execute <code>Wine_Quality_Prediction.ipynb</code> in Jupyter Notebook,
                JupyterLab, or Google Colab to view the complete workflow.
              </li>
            </ol>
          </section>
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/TateJett/Wine-Quality-Prediction-Using-Deep-Neural-Network"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-400 transition"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}