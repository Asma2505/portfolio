import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    title: "Drug Review Analysis – Training & Preprocessing",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Machine_learning_flowchart.svg/800px-Machine_learning_flowchart.svg.png",
    content: `Drug review analysis involves analyzing user feedback on medications to understand sentiment or effectiveness.
The process begins with data cleaning such as removing stop words, punctuation, and handling missing values.
Text preprocessing includes tokenization, stemming/lemmatization, and vectorization using TF-IDF or embeddings.
The processed data is used to train models like Logistic Regression, SVM, or deep learning models
for sentiment analysis or classification tasks.`,
  },
  {
    title: "Spam Email Detection – NLP & Machine Learning",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spam_filtering_system_diagram.png/800px-Spam_filtering_system_diagram.png",
    content: `Spam email detection identifies and filters unwanted or harmful emails using machine learning and NLP techniques.
It analyzes email content, sender details, and behavioral patterns.
Preprocessing includes text cleaning, stop-word removal, and vectorization.
Models such as Naive Bayes and SVM are trained to classify emails as spam or not,
helping protect users from phishing, scams, and inbox clutter.`,
  },
  {
    title: "Rain Protective Shield – IoT & Sustainability",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rain_sensor_module_YL-83.jpg/800px-Rain_sensor_module_YL-83.jpg",
    content: `Rain Protective Shield is an automated system that activates a roof-like cover when rain is detected.
It protects crops, bricks, and outdoor events from unseasonal rainfall.
The system uses a rain sensor and servo motor for automatic operation.
Collected rainwater is directed toward groundwater recharge,
promoting sustainable rainwater harvesting.`,
  },
];

const fallbackImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/800px-No_image_available.svg.png";

const ProjectsExpandable: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-700">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto space-y-5 px-3 sm:px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 md:p-5 text-left"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600 text-sm md:text-base" />
              ) : (
                <FaChevronDown className="text-gray-600 text-sm md:text-base" />
              )}
            </button>
            {openIndex === index && (
              <div className="border-t p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) =>
                    (e.currentTarget.src = fallbackImage)
                  }
                  className="w-full h-44 sm:h-52 md:h-60 object-contain bg-gray-100 rounded-lg shadow-md p-2 md:p-3"
                />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsExpandable;
