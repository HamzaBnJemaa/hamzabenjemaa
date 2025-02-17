import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
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
  const { t, i18n } = useTranslation(); // Use the useTranslation hook

  // Function to change language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
        <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full h-full"></div>
      </div>

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={() => changeLanguage('en')} className="mr-2">EN</button>
        <button onClick={() => changeLanguage('ar')} className="mr-2">AR</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
      </div>

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