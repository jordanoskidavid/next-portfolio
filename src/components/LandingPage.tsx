"use client";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // align left
        gap: "48px",
        p: 0, // no padding
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "96px",
          fontWeight: "bold",
          textAlign: "left",
          display: "inline-block",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Software <br />
        <Box component="span" sx={{ color: "primary.main" }}>
          Engineer
        </Box>
      </Typography>
      <Box color="text.primary" sx={{ gap: "24px", display: "flex" }}>
        <Button
          color="inherit"
          sx={{
            backgroundColor: "#00ADB5",
            textTransform: "none",
            borderRadius: "24px",
            py: "10px",
            px: "32px",
            fontWeight: "bold",
            gap: "10px",
            fontSize: "18px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hire Me
        </Button>
        <Button
          color="inherit"
          sx={{
            backgroundColor: "#393E46",
            textTransform: "none",
            borderRadius: "24px",
            py: "10px",
            px: "32px",
            fontWeight: "bold",
            fontSize: "18px",
            gap: "10px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Download CV
          <DownloadIcon
            sx={{ width: "24px", height: "24px", color: "#EEEEEE" }}
          />
        </Button>
      </Box>
      <Typography sx={{ fontSize: "18px", color: "text.secondary" }}>
        Slika so neshto uredeno ovde
      </Typography>
    </Box>
  );
}
