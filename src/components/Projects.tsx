"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "A personal website built with Next.js, MUI, and TypeScript. Fully responsive with smooth animations and clean UI.",
      github: "#",
    },
    {
      title: "Stock Management App",
      image: "/stockapp.png",
      description:
        "Fullstack inventory system using Go, MySQL, Docker, and React. Includes full auth, pagination, and analytics.",
      github: "#",
    },
    {
      title: "React UI Components",
      image: "/uikit.png",
      description:
        "A reusable set of UI components designed with MUI and Tailwind. Focus on accessibility and flexibility.",
      github: "#",
    },
    {
      title: "Next.js Dashboard",
      image: "/dashboard.png",
      description: "Admin dashboard template using Next.js + MUI.",
      github: "#",
    },
    {
      title: "API Wrapper",
      image: "/api.png",
      description: "TypeScript wrapper for external APIs.",
      github: "#",
    },
  ];

  // Start from the middle
  const [centerIndex, setCenterIndex] = useState(
    Math.floor(projects.length / 2)
  );

  const prev = () => setCenterIndex((prev) => Math.max(prev - 1, 0));
  const next = () =>
    setCenterIndex((prev) => Math.min(prev + 1, projects.length - 1));

  // Prepare visible projects with null placeholders
  const visibleProjects = [
    projects[centerIndex - 1] || null,
    projects[centerIndex],
    projects[centerIndex + 1] || null,
  ];

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 40, md: 64 },
          fontWeight: "bold",
          color: "text.primary",
          mb: 4,
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={prev}
          disabled={centerIndex === 0}
          sx={{ position: "absolute", left: 0, zIndex: 2 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {visibleProjects.map((p, i) => {
          if (!p)
            return (
              <Box
                key={i}
                sx={{ width: { xs: "70%", sm: "25%" }, minWidth: 250 }}
              />
            );

          const isCenter = i === 1;
          return (
            <Card
              key={p.title}
              sx={{
                width: { xs: "70%", sm: isCenter ? "30%" : "25%" },
                minWidth: 250,
                height: 450,
                borderRadius: 4,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                opacity: isCenter ? 1 : 0.5,
                transform: isCenter ? "scale(1)" : "scale(0.9)",
                transition: "all 0.5s",
              }}
            >
              <CardMedia
                component="img"
                image={p.image}
                alt={p.title}
                sx={{ height: 180, objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  {p.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={p.github}
                  target="_blank"
                  sx={{ textTransform: "none" }}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          );
        })}

        <IconButton
          onClick={next}
          disabled={centerIndex === projects.length - 1}
          sx={{ position: "absolute", right: 0, zIndex: 2 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </>
  );
}
