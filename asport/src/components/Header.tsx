import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-shimmer bg-[length:200%_auto] bg-[position:0_0] drop-shadow-md tracking-wide">
          Asma R
        </h1>

          <p className="text-sm md:text-lg text-blue-700 font-semi-bold font-modern font-display">
            AIDS
          </p>
        </div>

        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
