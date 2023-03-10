import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Projetc";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import { ToastContainer } from "react-toastify";
import { Slide } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ToastContainer position="bottom-right" pauseOnHover={true} autoClose={3000} closeButton={true} transition={Slide} />
    </>
  );
}

export default App;
