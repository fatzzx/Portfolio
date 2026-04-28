import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Contact } from "./components/sections/Contact";
import "./index.css";
import { useState } from "react";
import { About } from "./components/sections/About";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Languages } from "./components/sections/Languages";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F9F7F5] text-[#3E2B1E]">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Languages />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
