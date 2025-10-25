"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import CustomNavbarButton from "./custom-ui/nav-button";
import AnimatedName from "./custom-ui/animated-name";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          py: { xs: 2, sm: 4, md: 4, lg: 1 },
          px: { xs: 1, sm: 4 },
        }}
      >
        <AnimatedName />

        {isMobile ? (
          <IconButton
            color="inherit"
            sx={{ borderRadius: "20px" }}
            onClick={handleOpen}
          >
            <MenuIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              px: { md: "48px", lg: "96px" },
              color: "text.primary",
            }}
          >
            <CustomNavbarButton sx={{ color: "inherit" }}>
              Home
            </CustomNavbarButton>
            <CustomNavbarButton sx={{ color: "inherit" }}>
              Projects
            </CustomNavbarButton>
            <CustomNavbarButton sx={{ color: "inherit" }}>
              About
            </CustomNavbarButton>
            <CustomNavbarButton sx={{ color: "inherit" }}>
              Contact Me
            </CustomNavbarButton>
          </Box>
        )}
      </Toolbar>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        slots={{ paper: Box }}
        slotProps={{
          paper: {
            sx: {
              display: "flex",
              flexDirection: "column",
              backgroundColor: "background.default",
              borderRadius: 5,
              border: "1px solid",
              borderColor: "background.paper",
              width: "90%",
              maxWidth: "90%",
              gap: 2,
              p: 3,
              position: "absolute",
              mt: 3,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            },
          },
          backdrop: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(5px)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "default",
              color: "text.primary",
              textTransform: "uppercase",
              fontSize: 15,
            }}
          >
            Navigation
          </Typography>

          <ClearIcon
            onClick={handleClose}
            sx={{
              color: "text.primary",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              cursor: "pointer",
              width: 25,
              height: 25,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.05)",
              },
            }}
          ></ClearIcon>
        </Box>

        <CustomNavbarButton
          fullWidth
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            fontSize: 20,
            color: "text.primary",
            p: 0,
            minHeight: 0,
            lineHeight: 1,
          }}
        >
          Home
        </CustomNavbarButton>
        <Divider
          sx={{ width: "100%", m: 0, borderColor: "rgba(81, 81, 81, 0.3)" }}
        />

        <CustomNavbarButton
          fullWidth
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            fontSize: 20,
            color: "text.primary",
            p: 0,
            minHeight: 0,
            lineHeight: 1,
          }}
        >
          Projects
        </CustomNavbarButton>
        <Divider
          sx={{ width: "100%", m: 0, borderColor: "rgba(81, 81, 81, 0.3)" }}
        />

        <CustomNavbarButton
          fullWidth
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            fontSize: 20,
            color: "text.primary",
            p: 0,
            minHeight: 0,
            lineHeight: 1,
          }}
        >
          About
        </CustomNavbarButton>
        <Divider
          sx={{ width: "100%", m: 0, borderColor: "rgba(81, 81, 81, 0.3)" }}
        />

        <CustomNavbarButton
          fullWidth
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            fontSize: 20,
            color: "text.primary",
            p: 0,
            minHeight: 0,
            lineHeight: 1,
          }}
        >
          Contact Me
        </CustomNavbarButton>
      </Dialog>
    </>
  );
}
