import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AmazonReviewSentimentAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-slate-800">
        <h1 className="text-2xl font-bold">Amazon Review Sentiment Analysis</h1>
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
          <h2 className="text-4xl font-bold mb-2">Amazon Review Sentiment Analysis</h2>
          <p className="text-gray-400 text-sm mb-4">October 27, 2023</p>
          <p className="text-gray-300 leading-relaxed">
            This project analyzes Amazon food reviews to determine whether a review conveys positive or negative sentiment. By
            leveraging text analysis and a linear regression model, the project predicts the likelihood of a review being positive,
            providing valuable insights into customer opinions and product feedback.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Project Overview */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Categorized Amazon food reviews as positive or negative using sentiment analysis techniques.</li>
              <li>Built a linear regression model to predict the likelihood of a review being positive.</li>
              <li>Summarized customer sentiment for individual products based on word frequency and sentiment scores.</li>
            </ul>
          </section>

          {/* Dataset */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Dataset</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong>Amazon Food Review Dataset</strong> contains reviews, ratings, and product identifiers. Due to computational 
              constraints, the dataset was reduced to 1,000 rows for analysis. Reviews were processed to extract sentiment keywords 
              and corresponding scores.
            </p>
          </section>

          {/* Methodology */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 leading-relaxed">
              <li>
                <strong>Data Preprocessing</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Reduced the dataset to 1,000 rows for computational efficiency.</li>
                  <li>Assigned unique variables to each product for tracking sentiment trends.</li>
                </ul>
              </li>
              <li>
                <strong>Sentiment Word Analysis</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Created positive (e.g., "Good", "Amazing") and negative (e.g., "Bad", "Worst") word lists.</li>
                  <li>Counted occurrences of these words in each review to calculate sentiment scores.</li>
                </ul>
              </li>
              <li>
                <strong>TF-IDF Vectorization and Linear Regression</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Applied TF-IDF vectorization to transform text into numerical features.</li>
                  <li>Developed a linear regression model to predict review sentiment based on vectorized features.</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Results</h3>
            <p className="text-gray-300 leading-relaxed">
              The model achieved reasonable accuracy in predicting review sentiment. It generated confidence intervals for each
              review, highlighting the likelihood of positivity or negativity based on textual features.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A sample review, “This cereal has no artificial sweeteners, is high in fiber, but has a great taste (A hard combination
              to find),” was analyzed. The model predicted a positive sentiment with high confidence, showcasing its effectiveness
              for unseen data.
            </p>
          </section>

          {/* Ethical Considerations */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Ethical Considerations</h3>
            <p className="text-gray-300 leading-relaxed">
              Computational constraints necessitated reducing the dataset size, which limits generalizability. Future improvements
              should focus on analyzing larger datasets and validating sentiment predictions across diverse review categories.
            </p>
          </section>

          {/* Installation and Usage */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Installation and Usage</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Prerequisites:</strong> Ensure Python 3.x is installed along with required libraries: pandas, sklearn, numpy.
            </p>
            <ol className="list-decimal list-inside text-gray-300 leading-relaxed">
              <li>
                <strong>Clone the Repository:</strong> Download the project from the{' '}
                <a
                  href="https://github.com/TateJett/Amazon-Review-Sentiment-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  GitHub Repository
                </a>
                .
              </li>
              <li>
                <strong>Install Dependencies:</strong> Run <code>pip install pandas sklearn numpy</code>.
              </li>
              <li>
                <strong>Run the Notebook:</strong> Execute <code>Amazon-Review-Sentiment-Analysis.ipynb</code> in Jupyter Notebook
                or Google Colab.
              </li>
            </ol>
          </section>
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/TateJett/Amazon-Review-Sentiment-Analysis"
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