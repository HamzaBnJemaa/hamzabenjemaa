import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <>
   <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      
<NavBar/>
<Contact/>
<Hero/>
<Projects/>
<Tech/>
    </main>
    </>
  )
}
export default App
