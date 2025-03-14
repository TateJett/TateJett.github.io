import React from 'react';
import { useNavigate } from 'react-router-dom';
import OwlDineImage from '../assets/OwlDineHompage.png'; // Ensure the screenshot is saved in your assets folder

export default function OwlDine() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black">
        <h1 className="text-2xl font-bold">OwlDine</h1>
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
          <h2 className="text-4xl font-bold mb-2">OwlDine</h2>
          <p className="text-gray-400 text-sm mb-4">January 26, 2025</p>
          <p className="text-gray-300 leading-relaxed">
            OwlDine was built to address a common pain point faced by students at Rice University—staying informed about
            dining options on campus. The platform provides real-time updates on dining hall statuses, menus, and user ratings
            to create a more seamless dining experience. Today, <strong>25-50% of Rice students use OwlDine at least once a week</strong>
            to check menus, meal schedules, and dining hall availability. <strong>
            This amounts to 1000 to 2000 students using OwlDine Weekly!</strong>
          </p>
        </div>

        {/* Screenshot Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">User Interface</h3>
          <div className="mt-4">
            <img
              src={OwlDineImage}
              alt="OwlDine Homepage Screenshot"
              className="rounded shadow-md w-3/4 mx-auto"
            />
            <p className="text-gray-400 text-sm mt-2 text-center">
              OwlDine Homepage: Displaying real-time dining options and meal menus.
            </p>
          </div>
        </section>

        {/* The Why and the Process */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">The Why and the Process</h3>
          <p className="text-gray-300 leading-relaxed">
            The idea for OwlDine originated from student feedback about the inefficiency of existing dining information systems.
            We wanted to create a solution that not only provided accurate and up-to-date information but also improved the
            overall user experience. By integrating real-time data and intuitive design, OwlDine ensures students spend less time
            wondering about dining options and more time enjoying their meals.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            The development process started with defining key features—real-time dining hall statuses, menu filtering, and user
            ratings. After several brainstorming sessions, we decided on a tech stack that would support scalability and fast
            deployment:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
            <li>
              <strong>Frontend:</strong> We chose React with TypeScript to create a responsive and interactive interface. The
              frontend is hosted on{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                Vercel
              </a>, ensuring fast page loads and seamless user experience.
            </li>
            <li>
              <strong>Backend:</strong> Flask was used to build a RESTful API that handles requests from the frontend. Flask's
              lightweight nature allowed for quick iteration and integration with the database.
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL stores all dining hall data, including schedules, menu items, and user ratings.
              The backend and database are deployed on{' '}
              <a
                href="https://render.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                Render
              </a>.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            To improve operational flexibility, we **created an admin page that allows for last-minute schedule changes** without 
            requiring direct code modifications. This ensures that unexpected menu updates and dining hall closures can be reflected
            instantly, reducing student frustration and improving the platform's reliability.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            We worked iteratively, incorporating user feedback throughout the development process to refine the design and
            functionality. The result is a platform that students can rely on to plan their meals effectively.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li>Real-time updates on dining hall operating statuses and meal times.</li>
            <li>User ratings and reviews for menu items to enhance dining choices.</li>
            <li>Integrated meal filtering based on dietary preferences.</li>
            <li>Admin page for quick schedule updates without code changes.</li>
            <li>Responsive design for seamless use on desktops and mobile devices.</li>
          </ul>
        </section>

        {/* Link to Website */}
        <div className="mt-12 text-center">
          <a
            href="https://owldine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded shadow hover:bg-blue-500-400 transition"
          >
            Visit OwlDine
          </a>
        </div>
      </div>
    </div>
  );
}