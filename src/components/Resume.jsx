import React, { useState } from 'react';
import resumePDF from '../assets/Hamzadec2024.pdf';

const Resume = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const handleViewResume = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <section id="resume" className="min-h-screen w-full flex flex-col items-center justify-center text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>

      {!isResumeVisible && (
        <button 
          className="bg-transparent border border-white hover:bg-white hover:text-black py-3 px-6 rounded-lg transition-all duration-300" 
          onClick={handleViewResume}
        >
          View Resume
        </button>
      )}

      {isResumeVisible && (
        <>
          <div className="w-full max-w-4xl h-[600px] border-2 border-gray-700 overflow-hidden transition-all duration-500">
            <iframe 
              src={resumePDF} 
              className="w-full h-full" 
              title="Resume PDF" 
            />
          </div>
          <div className="flex justify-center mt-4"> 
            <a 
              href={resumePDF} 
              download 
              className="bg-transparent border border-white hover:bg-white hover:text-black py-2 px-4 rounded-lg transition-all duration-300 mx-2"
            >
              Download PDF
            </a>
            <button 
              className="bg-transparent border border-white hover:bg-white hover:text-black py-2 px-4 rounded-lg transition-all duration-300 mx-2" 
              onClick={handleViewResume}
            >
              Hide Resume
            </button>
          </div>
        </>
      )}

    </section>
  );
};

export default Resume;