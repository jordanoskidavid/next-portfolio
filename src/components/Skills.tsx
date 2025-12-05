"use client";

import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const skills = [
  { name: "React", image: "/reactlogo.png" },
  { name: "Nest.js", image: "/nestlogo.png" },
  { name: "Golang", image: "/gologo.png" },
  { name: "Docker", image: "/dockerlogo.png" },
  { name: "Python", image: "/pythonlogo.png" },
  { name: "Typescript", image: "/typescriptlogo.png" },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // toggle fade in/out
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const logosToShow = isXs ? 3 : 4;
  const logoSize = isXs ? 80 : 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + logosToShow) % skills.length);
        setFade(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [logosToShow]);

  let visible = skills.slice(index, index + logosToShow);
  if (visible.length < logosToShow) {
    visible = [...visible, ...skills.slice(0, logosToShow - visible.length)];
  }

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
        Skills
      </Typography>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            width: `${logosToShow * (logoSize + 20)}px`,
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out", // fading effect
          }}
        >
          {visible.map((skill, i) => (
            <div
              key={skill.name}
              className="float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={logoSize}
                height={logoSize}
                style={{ display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .float {
          animation: drifting 4s ease-in-out infinite;
        }

        @keyframes drifting {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -5px);
          }
          50% {
            transform: translate(-10px, 5px);
          }
          75% {
            transform: translate(8px, -3px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </>
  );
}
