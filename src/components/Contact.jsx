import React from 'react';
import resumePDF from '../assets/Hamzadec2024.pdf';

const Contact = () => {
  return (
    <section id="contact-and-resume" className="flex min-h-screen w-full flex-col items-center justify-center text-white px-8 py-16">
     
      <div className="flex flex-col gap-8">
        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
          <h1 className="text-center text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-slate-300 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
          </h1>
          <p className="text-center text-lg font-semibold text-gray-500">
            Want to chat or contact me?
          </p>
          <p className="text-center text-lg font-semibold text-gray-500">
            Send me an E-mail through this button and I'll respond whenever I can.
          </p>
          <a
            href="mailto:benjemaahamza09@gmail.com"
            className="bg-transparent border border-white hover:bg-white hover:text-black py-2 px-4 rounded-lg transition-all duration-300 mx-2"
          >
            Contact Me
          </a>

          {/* Resume Download Button under Contact Me */}
          <a
            href={resumePDF}
            download
            className="bg-transparent border border-white hover:bg-white hover:text-black py-3 px-6 rounded-lg transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
