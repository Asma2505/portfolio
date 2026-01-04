import React from "react";
import { FaChartLine, FaBriefcase, FaPython } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 bg-gray-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-blue-700">
        Experience
      </h2>
      <div className="max-w-6xl mx-auto space-y-14 md:space-y-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-3">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500 text-white flex items-center justify-center rounded-full">
                <FaChartLine className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                CODSOFT – Data Science
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              Jan 2024 – Feb 2024
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Worked on real-world data science projects involving classification,
              regression, and forecasting using Python.
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base text-gray-600">
              <li>Titanic Survival Prediction</li>
              <li>Movie Rating Prediction</li>
              <li>Sales Forecasting</li>
              <li>Credit Card Fraud Detection</li>
            </ul>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Tools: Python, Pandas, NumPy, Matplotlib
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Data Science"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-3">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaBriefcase className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                PANTECH E Learning – Data Analytics
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              Jun 2024 – Jul 2024
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Hands-on experience in analyzing and visualizing real-world data
              using Power BI.
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base text-gray-600">
              <li>Data cleaning and exploration</li>
              <li>Interactive dashboards</li>
              <li>Insightful reports & storytelling</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80"
              alt="Data Analytics"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-3">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500 text-white flex items-center justify-center rounded-full">
                <FaPython className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                CODSOFT – Python Programming
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              Dec 2024 – Jan 2025
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base text-gray-600">
              <li><strong>To-Do List:</strong> Add, update, delete tasks</li>
              <li><strong>Smart Calculator:</strong> Arithmetic operations</li>
              <li><strong>Contact Book:</strong> Manage contacts</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
              alt="Python Programming"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
