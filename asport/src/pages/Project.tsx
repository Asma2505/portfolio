import  { useState } from 'react';
import certi1 from '../certificates/noimage.png';
import certi2 from '../certificates/noimage.png';
import certi3 from '../certificates/noimage.png';
import certi5 from '../certificates/noimage.png';
import certi6 from '../certificates/noimage.png';
import certi7 from '../certificates/noimage.png';
import certi8 from '../certificates/noimage.png';
import certi9 from '../certificates/noimage.png';
import certi10 from '../certificates/noimage.png';
import certi11 from '../certificates/noimage.png';
import certi12 from '../certificates/noimage.png';
import certi4 from '../certificates/noimage.png'; 
import resumeFile from '../assets/resume.pdf'; 

function Project() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const certificates = [
    certi1, certi2, certi3, certi5, certi6, certi7,
    certi8, certi9, certi10, certi11, certi12,
  ];

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile; 
    link.download = 'Resume_Asma_R.pdf'; 
    link.click(); 
  };

  return (
    <div className="p-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((certi, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-2 hover:border-blue-500 hover:cursor-pointer"
          >
            <img
              src={certi}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
        <div className="w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex justify-center items-center">
          <button
            onClick={handleOpenPopup}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            View More
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl relative w-10/12 sm:w-8/12 md:w-6/12">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
            >
              ×
            </button>
            <img
              src={certi4}
              alt="Certificate 4"
              className="w-1/4 h-auto mx-auto rounded-md" 
            />
          </div>
        </div>
      )}
      <div className="flex justify-center mt-20">
        <button
          onClick={handleResumeDownload}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Project;
