import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Activities from "./components/Activties";
import Registration from "./components/Registration";
import Location from "./components/Location";
import Supporters from "./components/Supporters";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Registration />
        <Location />
        <Supporters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
