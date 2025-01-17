import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HandwrittenDigitRecognition() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-slate-800">
        <h1 className="text-2xl font-bold">Handwritten Digit Recognition</h1>
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
          <h2 className="text-4xl font-bold mb-2">Handwritten Digit Recognition with CNN</h2>
          <p className="text-gray-400 text-sm mb-4">April 8, 2024</p>
          <p className="text-gray-300 leading-relaxed">
            This project leverages a powerful Convolutional Neural Network (CNN) to identify handwritten digits 
            with exceptional accuracy. By training on the MNIST dataset—a benchmark dataset of handwritten digit images—the model
            was able to classify numbers (0-9) with an impressive accuracy of 98%. This showcases the potential of machine learning
            in automating and improving image recognition tasks, offering both efficiency and precision.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Project Overview */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Designed and implemented a CNN optimized for image data by utilizing spatial relationships between pixels.</li>
              <li>Trained and evaluated the model to achieve high classification accuracy for handwritten digits.</li>
              <li>Explored the ethical implications of using machine learning in image recognition systems.</li>
            </ul>
          </section>

          {/* Dataset */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Dataset</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong>MNIST Dataset</strong> consists of 28x28 grayscale images of handwritten digits (0-9). It is widely used
              as a benchmark dataset in image processing and deep learning, providing a comprehensive foundation for training and
              evaluating models in image classification tasks.
            </p>
          </section>

          {/* Methodology */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 leading-relaxed">
              <li>
                <strong>Data Preprocessing</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Added a channel dimension for compatibility with CNN layers.</li>
                  <li>Normalized pixel values to a range of 0 to 1 by dividing by 255.</li>
                  <li>Used PyTorch's TensorDataset and DataLoader to batch and shuffle the data for efficient processing.</li>
                </ul>
              </li>
              <li>
                <strong>Model Architecture</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Two convolutional layers with ReLU activation and max-pooling to extract and detect features from the image data.
                  </li>
                  <li>
                    Three fully connected layers, with the final layer producing 10 output units corresponding to the digits 0-9.
                  </li>
                  <li>
                    Loss function: CrossEntropyLoss for classification.
                  </li>
                  <li>
                    Optimizer: Stochastic Gradient Descent (SGD) with a learning rate of 0.001 and momentum of 0.9.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Training Process</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Trained the model for 10 epochs using mini-batch gradient descent.</li>
                  <li>Printed loss every 200 mini-batches to monitor progress.</li>
                </ul>
              </li>
              <li>
                <strong>Evaluation</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Achieved an accuracy of 98% on the test dataset, validating the effectiveness of the model.</li>
                  <li>Used <code>torch.no_grad()</code> to ensure computational efficiency during evaluation.</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Results</h3>
            <p className="text-gray-300 leading-relaxed">
              The CNN model achieved an accuracy of 98% on the MNIST test set, demonstrating its capability in handling 
              image classification tasks with high precision. While this project focused on handwritten digits, similar 
              models could be adapted for more complex image recognition tasks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Ethical Considerations:</strong> While CNNs offer immense potential in automating visual recognition, 
              they raise important ethical questions. Applications like facial recognition, for instance, must address 
              concerns around privacy, biases, and potential misuse.
            </p>
          </section>

          {/* Installation and Usage */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Installation and Usage</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Prerequisites:</strong> Ensure Python 3.x is installed, along with the following libraries: pandas, numpy, torch, matplotlib.
            </p>
            <ol className="list-decimal list-inside text-gray-300 leading-relaxed">
              <li>
                <strong>Download the Notebook:</strong> Clone or download <code>AML_project_2.ipynb</code> from the repository.
              </li>
              <li>
                <strong>Install Dependencies:</strong> Run <code>pip install pandas numpy torch matplotlib</code>.
              </li>
              <li>
                <strong>Run the Notebook:</strong> Open the notebook in Jupyter Notebook, JupyterLab, or Google Colab to execute 
                the full workflow, including data visualization, model training, and evaluation.
              </li>
            </ol>
          </section>
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/TateJett/Handwritten-Digit-Recognition-with-CNN"
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