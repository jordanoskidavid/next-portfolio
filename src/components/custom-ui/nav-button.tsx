"use client";

import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
const RoundedButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "all 0.5s ease",

  [theme.breakpoints.up("lg")]: {
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.default,
      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    },
  },

  [theme.breakpoints.down("md")]: {
    "&:hover": {
      backgroundColor: "inherit", // keep the same
      color: "inherit",
      boxShadow: "none",
    },
  },
}));

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function CustomNavbarButton({
  children,
  ...props
}: CustomButtonProps) {
  return <RoundedButton {...props}>{children}</RoundedButton>;
}
