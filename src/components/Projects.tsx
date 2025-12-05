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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const projects = [
    {
      title: "GoGrab",
      image: "/GoGrab.png",
      description:
        "GoGrab is a Go-based web scraping backend that implements JWT-secured user authentication, concurrent web crawling, and CRUD APIs for managing extracted datasets.",
      github: "#",
    },
    {
      title: "Weathero",
      image: "/Weathero.jpg",
      description:
        "WeatherApp is an Android application built with Kotlin, Jetpack Compose, Room, and Firebase, providing real-time weather data, multi-provider authentication, and GPS-based location services.",
      github: "https://github.com/jordanoskidavid/weathero-kotlin",
    },
    {
      title: "OneTimeSecret",
      image: "/OneTimeSecret.png",
      description:
        "OneTimeSecret is a clone to the real application and it is a PHP and MySQL-based secret-sharing app that encrypts sensitive data, generates one-time access links, and automatically deletes secrets after viewing or expiry.",
      github: "https://github.com/jordanoskidavid/one-time-secret-php",
    },
    {
      title: "GoStock",
      image: "/GoStock.png",
      description:
        "GoStock is a full-stack inventory and order management system built with Go, MySQL, Docker, and a React/TypeScript frontend that includes authentication, product/category management, order handling, reporting, and a modern responsive UI.",
      github: "https://github.com/jordanoskidavid/go-stock-react",
    },
    {
      title: "Roomie",
      image: "/Roomie.png",
      description:
        "Roomie is a roommate-matching platform built with React.js and .NET, allowing users to find compatible roommates based on personalized preferences and filters.",
      github:
        "https://www.softwaretestinghelp.com/wp-content/qa/uploads/2023/10/GitHub-Private-Repository-FI.png",
    },
    {
      title: "MyCal",
      image: "/MyCal.png",
      description:
        "MyCal is a full-stack MEAN application that provides calorie intake calculations, user input processing, and dynamic nutrition tracking using MongoDB, Express, Angular, and Node.js.",
      github: "https://github.com/jordanoskidavid/my-cal-angular-express",
    },

    {
      title: "Purple Kingdom",
      image: "/PurpleKingdom.png",
      description:
        "Purple Kingdom is a Unity-based 2D game developed in C#, implementing custom game logic, physics interactions, and a tile-based world with sprite animation.",
      github: "https://github.com/jordanoskidavid/purple-kingdom-csharp",
    },
    {
      title: "CineMatch",
      image: "/CineMatch.png",
      description:
        "A Python movie recommendation app that uses fuzzy string matching and a Tkinter GUI to filter movies by genre, language, and director from a local JSON dataset.",
      github: "https://github.com/jordanoskidavid/movieRecommend-python",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [centerIndex, setCenterIndex] = useState(
    Math.floor(projects.length / 2)
  );

  const prev = () => setCenterIndex((prev) => Math.max(prev - 1, 0));
  const next = () =>
    setCenterIndex((prev) => Math.min(prev + 1, projects.length - 1));

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
          mt: "100px",
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={prev}
            disabled={centerIndex === 0}
            sx={{
              position: "absolute",
              left: -45,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {projects.map((p, i) => {
            const isCenter = i === centerIndex;
            return (
              <Card
                key={p.title}
                sx={{
                  display: isCenter ? "flex" : "none",
                  width: "75vw",
                  maxWidth: 320,
                  height: 450,
                  borderRadius: 4,
                  boxShadow: 3,
                  flexDirection: "column",
                  overflow: "hidden",
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
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: 14,
                      textAlign: "justify",
                      textAlignLast: "left",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    {p.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={p.github}
                    target="_blank"
                    sx={{ textTransform: "none", mt: "-15px" }}
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
            sx={{
              position: "absolute",
              right: -45,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      ) : (
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
                <Box key={i} sx={{ width: { sm: "25%" }, minWidth: 250 }} />
              );

            const isCenter = i === 1;
            return (
              <Card
                key={p.title}
                sx={{
                  width: isCenter ? "30%" : "30%",
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
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: 14,
                      textAlign: "justify",
                    }}
                  >
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
      )}
    </>
  );
}
