"use client";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

export default function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        },
        pt: { xs: 6, sm: 8, md: 8, lg: 10 },
        gap: { xs: 4, sm: 6, md: 6, lg: "48px" },
        textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          },
          gap: { xs: 2, sm: 4, md: 4, lg: "24px" },
        }}
      >
        <Box
          sx={{
            mt: { xs: 0, sm: 0, md: 0, lg: "50px" },
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
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
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
            gap: { xs: 3, sm: 4, md: 4, lg: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "55px", sm: "80px", md: "100px", lg: "96px" },
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
            <Link
              href="mailto:jordanoski.david16@gmail.com"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                sx={{
                  backgroundColor: "#00ADB5",
                  textTransform: "none",
                  color: "text.primary",
                  borderRadius: "24px",
                  py: "10px",
                  px: { xs: "24px", sm: "28px", md: "28px", lg: "32px" },
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "17px", md: "17px", lg: "18px" },
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
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: 0, sm: 0, md: 0, lg: -3 },
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          },
          width: { xs: "80%", sm: "70%", md: "400px", lg: "400px" },
        }}
      >
        <Image
          src="/side_image_doodles.png"
          alt="doodles"
          priority
          width={440}
          height={440}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
