import React from 'react';
import resumePDF from '../assets/hamzaavl2025.pdf';

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
            Contact me?
          </p>
          <p className="text-center text-lg font-semibold text-gray-500">
            Send me an E-mail through this button and I'll respond whenever I can.
          </p>

          {/* Contact Me Button */}
          <a
            href="mailto:benjemaahamza09@gmail.com"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-slate-500 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-slate-600 transition-all"
          >
            Contact Me
          </a>
          {/* Resume Download Button */}
          <a
            href={resumePDF}
            download
            className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-slate-500 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-slate-600 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
      <span className="block text-sm text-gray-500 text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#home" className="hover:text-white">
            Hamza Ben Jemaa
          </a>
          . All Rights Reserved.
        </span>
    </section>
  );
};

export default Contact;