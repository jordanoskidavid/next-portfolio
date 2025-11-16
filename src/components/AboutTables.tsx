import CustomEduTable from "./custom-ui/edutable";
import CustomTable from "./custom-ui/table";
import { Box } from "@mui/material";

export default function WorkHistory() {
  const rows = [
    {
      logo: "/iwconnectlogo.png",
      company: "IWConnect > Mentorship",
      role: "Software Engineer",
      period: "12.2024 — 06.2025",
    },
    {
      logo: "/xgatelogo.png",
      company: "XGate > Intern",
      role: "Software Engineer",
      period: "03.2025 — 04.2025",
    },
    {
      logo: "/grabitlogo.png",
      company: "GrabIT > Intern",
      role: "Software Engineer",
      period: "07.2024 — 09.2024",
    },
    {
      logo: "/grabitlogo.png",
      company: "GrabIT > Intern",
      role: "Software Engineer",
      period: "07.2023 — 09.2023",
    },
    {
      logo: "/endavalogo.jpg",
      company: "Endava > Mentorship",
      role: "Data Engineer",
      period: "03.2023 — 07.2023",
    },
  ];

  const edurows = [
    {
      logo: "/fikt_logo.png",
      company: "FICT",
      role: "MSc | Computer Science",
      period: "2025 — Now",
    },
    {
      logo: "/fikt_logo.png",
      company: "FICT",
      role: "BSc | Computer Science",
      period: "2021 — 2025",
    },
    {
      logo: "/logogim.jpg",
      company: "Gymnasium Mirche Acev",
      role: "Math & Science",
      period: "2017 — 2021",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 0, lg: 10, md: 5 },
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <CustomEduTable title="Education" edurows={edurows} />
      </Box>
      <Box>
        <CustomTable title="Work" rows={rows} />
      </Box>
    </Box>
  );
}
