import { useState } from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./index.css";
import Index from "./Index";
import Project from "./Project";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":     return <Index navigate={navigate} />;
      case "skills":   return <Skills />;
      case "about":    return <About navigate={navigate} />;
      case "projects": return <Project />;
      case "contact":  return <Contact />;
      default:         return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} navigate={navigate} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

