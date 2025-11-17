import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function About() {
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
        justifyContent: "space-between",
        pt: { xs: "150px", md: "160px" },
        px: { xs: "20px", md: "96px" },
        gap: { xs: "40px", md: "80px" },
      }}
    >
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 40, md: 64 },
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          About{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Me
          </Box>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            color: "text.secondary",
            mt: 2,
            textAlign: "justify",
          }}
        >
          Hi, I’m David. I love building software that feels thoughtful at every
          step, the kind of stuff that just works and makes sense. What excites
          me most is finding the balance between logic and creativity, figuring
          out tricky problems while shaping something people enjoy using.
          <br />
          <br />
          I pay attention to the little things, how things move, how they feel,
          and how smoothly the code runs behind the scenes. Every project is a
          chance to experiment, learn, and leave it a bit better than I found
          it.
          <br />
          <br />
          I’m driven by curiosity and simplicity. Good code should do its job
          quietly while letting the experience speak for itself.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 40%" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "flex-start",
        }}
      >
        <Image
          src="/landing_page_me.jpg"
          alt="me"
          width={350}
          height={400}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            transform: "rotate(5deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
}
