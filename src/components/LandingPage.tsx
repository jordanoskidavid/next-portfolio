"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

export default function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "space-between",
        pt: { xs: 6, md: 10 },
        gap: { xs: 4, md: "48px" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: "24px" },
        }}
      >
        <Box
          sx={{
            mt: { xs: 0, sm: "50px" },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            src="/vector_arrow.png"
            alt="arrow"
            width={85}
            height={240}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: { xs: 3, md: "48px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "50px", sm: "64px", md: "96px" },
              fontWeight: "bold",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Software <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              Engineer
            </Box>
          </Typography>

          <Box sx={{ display: "flex", gap: "24px" }}>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#00ADB5",
                textTransform: "none",
                borderRadius: "24px",
                py: "10px",
                px: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontSize: { xs: "16px", md: "18px" },
                gap: "10px",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.background.paper,
                  letterSpacing: "0.2px",
                  boxShadow: "0px 1px 1px rgba(0,0,0,0.2)",
                },
              }}
            >
              Let's talk
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: -3 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/doodles.png"
          alt="doodles"
          width={440}
          height={440}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
