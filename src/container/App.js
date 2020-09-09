import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import PrincipalHeader from "../components/PrincipalHeader";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Navbar />
        <PrincipalHeader />
        <Projects />
        <AboutMe />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
