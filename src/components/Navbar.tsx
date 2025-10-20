"use client";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomNavbarButton from "./custom-ui/nav-button";
import AnimatedName from "./custom-ui/animated-name";

export default function Navbar() {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
        textTransform: "none",
        borderColor: "red",
        backgroundColor: "transparent",
      }}
    >
      <AnimatedName />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          px: "96px",
          py: "48px",
        }}
        color="text.primary"
      >
        <CustomNavbarButton sx={{ color: "inherit" }}>Home</CustomNavbarButton>
        <CustomNavbarButton sx={{ color: "inherit" }}>
          Projects
        </CustomNavbarButton>
        <CustomNavbarButton sx={{ color: "inherit" }}>About</CustomNavbarButton>
        <CustomNavbarButton sx={{ color: "inherit" }}>
          Contact Me
        </CustomNavbarButton>
      </Box>
    </Toolbar>
  );
}
