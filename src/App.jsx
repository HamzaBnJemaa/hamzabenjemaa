import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import NotFound from "./components/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      const { effectiveType, downlink } = connection;

      if (effectiveType === "slow-2g" || effectiveType === "2g" || downlink < 1) {
        setIsLoading(true);
        NProgress.start();
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      NProgress.done();
    }, 3000);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  return (
    <Router>
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
        <div className="w-full h-full bg-black bg-[radial-gradient(ellipse_at_center,_#111827,_#000000)]"></div>
      </div>
{isLoading && (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <span className="text-white text-lg">Loading...</span>
  </div>
)}

      {/* Main Content */}
      <>
        <NavBar />
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Tech />
                  <Projects />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Contact />
      </>
    </Router>
  );
}

export default App;
