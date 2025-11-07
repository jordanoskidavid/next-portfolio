"use client";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnimatedName() {
  const name = "David Jordanoski";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
      <Image
        src="/cropped_circle_image.png"
        alt="circle-image"
        width={50}
        height={50}
      />

      <Typography
        sx={{
          fontWeight: "bold",
          transition: "all 0.4s ease",
          display: "inline-block",
          px: { xs: 2, sm: 2, md: 2, lg: 4 },
          py: { xs: 1, sm: 2, md: 3, lg: 6 },
          fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "28px" },
          "&:hover": { letterSpacing: "0.8px", cursor: "default" },
          "& span": {
            display: "inline-block",
            transition: "transform 0.3s ease",
          },
          "@keyframes jump": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-8px)" },
          },
        }}
      >
        {name.split("").map((letter, i) => (
          <span
            key={i}
            style={
              animate
                ? {
                    animationName: "jump",
                    animationDuration: "0.6s",
                    animationTimingFunction: "ease",
                    animationDelay: `${i * 0.08}s`,
                    animationFillMode: "backwards",
                  }
                : undefined
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.animationName = "jump";
              e.currentTarget.style.animationDuration = "0.6s";
              e.currentTarget.style.animationTimingFunction = "ease";
              e.currentTarget.style.animationDelay = "0s";
              e.currentTarget.style.animationFillMode = "backwards";
            }}
            onAnimationEnd={(e) => {
              e.currentTarget.style.animationName = "";
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </Typography>
    </Box>
  );
}
