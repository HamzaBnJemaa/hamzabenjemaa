import { useState } from "react";
import resumePDF from "../assets/Hamzadec2024.pdf";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowResume = () => {
    setIsVisible(true);
  };

  return (
    <section id="resume" className="min-h-screen w-full flex flex-col items-center justify-center text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>

      {/* Resume iframe */}
      <div
        className={`w-full max-w-4xl h-[600px] border-2 border-gray-700 overflow-hidden transition-all duration-500 ${
          isVisible ? "blur-0" : "blur-md opacity-50"
        }`}
      >
        <iframe
          src={resumePDF}
          className="w-full h-full"
          title="Resume PDF"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href={resumePDF}
        download
        onClick={handleShowResume}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
