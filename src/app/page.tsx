'use client';
import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  );
}
