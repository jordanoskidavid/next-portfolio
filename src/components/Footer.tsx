import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgba(57, 62, 70, 0.4)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        p: 2,
        textAlign: "center",
        borderTopLeftRadius: { xs: 400, sm: 500, md: 500 },
        borderTopRightRadius: { xs: 400, sm: 500, md: 500 },

        boxShadow: 3,
        width: { xs: "100%", sm: 500, md: 600, lg: 600, xl: 600 },
        mx: "auto",
        mt: 6,
      }}
    >
      <Typography variant="subtitle2" sx={{ fontSize: { xs: 12, sm: 14 } }}>
        © {new Date().getFullYear()} David Jordanoski. All rights reserved.
      </Typography>
    </Box>
  );
}
