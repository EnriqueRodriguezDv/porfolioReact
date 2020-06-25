import React from 'react';
import Navbar from '../components/Navbar';
import PrincipalHeader from '../components/PrincipalHeader';
import Projects from '../components/Projects';
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrincipalHeader />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
