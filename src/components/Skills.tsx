"use client";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const skills = [
  { name: "React", image: "/reactlogo.png" },
  { name: "Nest.js", image: "/nestlogo.png" },
  { name: "Golang", image: "/gologo.png" },
  { name: "Docker", image: "/dockerlogo.png" },
  { name: "Python", image: "/pythonlogo.png" },
  { name: "Typescript", image: "/typescriptlogo.png" },
  { name: "Azure", image: "/azurelogo.png" },
  { name: "DotNet", image: "/dotnet.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "MySQL", image: "/mysqllogo.png" },
  { name: "Next.js", image: "/nextjs.png" },
  { name: "NodeJS", image: "/node.png" },
  { name: "Redis", image: "/redislogo.png" },
];

export default function Skills() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const logoSize = isXs ? 100 : 150;
  const gap = isXs ? 30 : 40;

  const scrollingSkills = [...skills, ...skills];

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 40, md: 64 },
          fontWeight: "bold",
          color: "text.primary",
          mb: 7,
          mt: "80px",
          textAlign: "center",
        }}
      >
        Skills
      </Typography>

      <div className="skills-track-wrapper">
        <div className="skills-track">
          {scrollingSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              style={{
                minWidth: logoSize,
                height: logoSize,
                marginRight: gap,
                position: "relative",
              }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-track-wrapper {
          overflow: hidden;
          width: 100%;

          /* Smooth fade using mask / gradient */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-repeat: no-repeat;
          mask-size: 100% 100%;
        }

        .skills-track {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .skills-track div {
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .skills-track {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </>
  );
}
