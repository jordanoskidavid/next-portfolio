"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { keyframes } from "@mui/system";
import { Link } from "@mui/material";

export default function Contact() {
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
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // <-- vertically center if heights differ

          gap: { xs: 4, md: 8 },
        }}
      >
        <Link
          href="https://www.linkedin.com/in/david-jordanoski-39047023a/"
          target="_blank"
          underline="none"
          sx={{ display: "inline-block" }}
        >
          <Box
            sx={{
              width: { xs: 75, md: 90, lg: 90, xl: 90 },
              height: { xs: 75, md: 90, lg: 90, xl: 90 },
              position: "relative",
            }}
          >
            <Image
              src="/linkedinlogo.png"
              alt="Linkedin"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Link>

        <Link
          href="mailto:jordanoski.david16@gmail.com"
          underline="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            sx={{
              width: { xs: 80, md: 100, lg: 100, xl: 100 },
              height: { xs: 80, md: 80, lg: 80, xl: 80 },
              position: "relative",
            }}
          >
            <Image
              src="/gmaillogo.png"
              alt="Gmail"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Link>

        <Link
          href="https://github.com/jordanoskidavid"
          target="_blank"
          underline="none"
          sx={{ display: "inline-block" }}
        >
          <Box
            sx={{
              width: { xs: 80, md: 100, lg: 100, xl: 100 },
              height: { xs: 80, md: 100, lg: 100, xl: 100 },
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/githublogo.png"
              alt="GitHub"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
}
