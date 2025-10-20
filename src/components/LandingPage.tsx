"use client";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import theme from "@/theme";

export default function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        pt: 10,
        gap: "48px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            mt: "50px",
            mr: "-5px",
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
            alignItems: "flex-start",
            gap: "48px",
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

          <Box sx={{ display: "flex", gap: "24px" }}>
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

      <Box sx={{ mt: -3 }}>
        <Image src="/doodles.png" alt="doodles" width={440} height={440} />
      </Box>
    </Box>
  );
}
