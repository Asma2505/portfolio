import React from "react";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 md:py-16 bg-gray-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-blue-700">
        Educational Qualifications
      </h2>
      <div className="max-w-6xl mx-auto space-y-14 md:space-y-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-2">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <FaUniversity className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                B.Tech – Artificial Intelligence & Data Science
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              RMK College of Engineering and Technology
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              CGPA: 7.98
            </p>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              2022 – 2026
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
              alt="College"
              className="rounded-xl shadow-md w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-2">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaGraduationCap className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                HSC
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Our Lady Higher Secondary School
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Percentage: 83.33%
            </p>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              2020 – 2022
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="HSC"
              className="rounded-xl shadow-md w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="md:w-1/2 space-y-2">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500 text-white flex items-center justify-center rounded-full">
                <FaSchool className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                SSLC
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Our Lady Higher Secondary School
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Percentage: 68.4%
            </p>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
              2019 – 2020
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
              alt="School"
              className="rounded-xl shadow-md w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
