"use client";
import About from "@/components/About";
import AboutTables from "@/components/AboutTables";
import Footer from "@/components/Footer";
import Landing from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
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
          <Navbar />
          <Landing />
          <About />
          <AboutTables />
          <Projects />
          <Skills />
          <Footer />
        </>
      </Container>
    </Box>
  );
}
