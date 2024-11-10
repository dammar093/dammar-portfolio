import Expereince from "@/components/Expereince";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Expereince />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
