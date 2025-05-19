import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header"; // Use the Bootstrap Navbar here
import NavComponent from "./NavComponent";
import  './App.css'
import HeroSection from "./HeroSection";

import AboutComp from './AboutComp'
import Section from './Section'
import TestimonialsSection from './TestimonialsSection'
import LocationSection from './LocationSection'
import ContactSection from './ContactSection'
import FooterSection from "./FooterSection";
function App() {
  return (
    <div>
      <NavComponent />
      <HeroSection/>
      <AboutComp />
      <Section/>
      <TestimonialsSection/>
      <LocationSection/>
      <ContactSection/>
      <FooterSection/>
    </div>

  );
}

export default App;
