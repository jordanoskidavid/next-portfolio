"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <>
          <Navbar />
          <Landing />
          <About />
          <Projects />
          <Footer />
        </>
      </Container>
    </Box>
  );
}
