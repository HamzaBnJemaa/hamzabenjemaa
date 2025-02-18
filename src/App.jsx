import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NProgress from "nprogress"; // Import nprogress
import "nprogress/nprogress.css"; // Import nprogress styles
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

      // Show loading screen if network is slow
      if (effectiveType === "slow-2g" || effectiveType === "2g" || downlink < 1) {
        setIsLoading(true);
        NProgress.start(); // Start progress bar
      }
    }

    // Simulate page load delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after page is loaded
      NProgress.done(); // Stop progress bar
    }, 3000); // Adjust the delay as needed

    return () => {
      clearTimeout(timer); // Cleanup timer
      NProgress.done(); // Ensure progress bar is stopped
    };
  }, []);

  return (
    <Router>
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
        <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full h-full"></div>
      </div>

      {/* Main Content */}
      <>
        {/* NavBar (visible on all pages) */}
        <NavBar />

        {/* Main Content with Routing */}
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Routes>
            {/* Home Page */}
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

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* 404 Page (Catch-all Route) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Contact Section */}
        <Contact />
      </>
    </Router>
  );
}

export default App;