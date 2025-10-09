"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
        textTransform: "none",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        sx={{ fontSize: "24px", px: "96px", py: "48px", fontWeight: "bold" }}
      >
        David Jordanoski
      </Typography>

      <Box
        sx={{ display: "flex", gap: 2, px: "96px", py: "48px" }}
        color="text.primary"
      >
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Home
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Projects
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          About
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Contact Me
        </Button>
      </Box>
    </Toolbar>
  );
}
