"use client";
import About from "@/components/About";
import AboutTables from "@/components/AboutTables";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useRef } from "react";

export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTablesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (
    section:
      | "home"
      | "about"
      | "aboutTables"
      | "projects"
      | "skills"
      | "contact"
  ) => {
    const map = {
      home: landingRef,
      about: aboutRef,
      aboutTables: aboutTablesRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    map[section].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        mt: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mt: 0,
          pt: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <>
          <div ref={landingRef}>
            <Navbar scrollToSection={scrollToSection} />
          </div>
          <Landing />
          <div ref={aboutRef}>
            <About />
          </div>
          <AboutTables />
          <div ref={projectsRef}>
            <Projects />
          </div>
          <Skills />
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </>
      </Container>
    </Box>
  );
}
