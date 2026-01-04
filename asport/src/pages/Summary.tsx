import React from "react";
import ProfileImg from "../assets/profile.png";

const Summary: React.FC = () => {
  return (
    <section
      id="summary"
      className="w-full py-4 px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <div className="md:w-1/2 space-y-1 text-center md:text-left">
        <p className="text-gray-700 font-semi-bold text-sm sm:text-2xl leading-relaxed font-modern">
      "I aim to use my skills in Artificial Intelligence and Data Science to create meaningful solutions that solve real problems, make technology more accessible, and positively impact people's lives."
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-90 h-3/4 object-cover rounded-full shadow-2xl border-4 border-blue-300 transform transition-transform duration-700 hover:rotate-12 hover:scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default Summary;
