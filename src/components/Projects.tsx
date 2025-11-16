import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Projects() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 40, md: 64 },
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Projects
      </Typography>
    </>
  );
}
