import React from "react";
import Slider from "react-slick";
import {
  FaCode,
  FaGlobe,
  FaLayerGroup,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const skills = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-blue-600" />,
    items: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Web Development",
    icon: <FaGlobe className="text-green-600" />,
    items: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup className="text-purple-600" />,
    items: ["Spring Boot", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Data Science & AI",
    icon: <FaBrain className="text-indigo-600" />,
    items: ["Machine Learning", "Deep Learning", "Power BI"],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-orange-600" />,
    items: ["SQL"],
  },
  {
    title: "Core Concepts",
    icon: <FaProjectDiagram className="text-red-600" />,
    items: ["Data Structures", "Algorithms"],
  },
];

const PrevArrow = (props: any) => (
  <button
    {...props}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = (props: any) => (
  <button
    {...props}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
  >
    <FaChevronRight />
  </button>
);

const Skills: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="skills" className="py-12 px-4 bg-gray-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 text-blue-700">
        Skills
      </h2>
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 p-6 h-72 sm:h-64 md:h-72 hover:scale-105 transition-transform">
                <div className="text-4xl sm:text-5xl md:text-5xl">{skill.icon}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
                  {skill.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0 mt-1"></span>
                      <span className="text-xs sm:text-sm md:text-base text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
