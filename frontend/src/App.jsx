import { Navbar } from "./components/Navbar";
import { FlickeringGrid } from "./components/magicui/FlickeringGrid";
import { Home } from "./components/sections/Home";
import { Contact } from "./components/sections/Contact";
import "./index.css";
import { About } from "./components/sections/About";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Languages } from "./components/sections/Languages";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink relative">
        <FlickeringGrid
          className="absolute inset-x-0 top-0 h-[100px] overflow-hidden z-0"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }}
        />
        <main className="relative z-10 max-w-2xl mx-auto py-12 pb-28 sm:py-24 px-6 flex flex-col gap-14">
          <Home />
          <About />
          <Projects />
          <Certifications />
          <Languages />
          <Contact />
        </main>
        <Navbar />
      </div>
    </LanguageProvider>
  );
}

export default App;
