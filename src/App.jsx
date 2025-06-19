import React from "react";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Industrise from "./components/Industrise";
import Company from "./components/Company";
import Careers from "./components/Careers";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import OurSolutions from "./components/OurSolutions";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Firstpage />
      <OurSolutions />

      <Routes>
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Industrise" element={<Industrise />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
    </>
  );
};

export default App;
