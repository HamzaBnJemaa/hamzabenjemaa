import React from 'react';
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1]"> 
        <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full h-full"></div> 
      </div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar/> 
        <Hero/>
        <Tech/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App;