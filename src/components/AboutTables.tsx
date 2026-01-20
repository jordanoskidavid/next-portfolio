import CustomEduTable from "./custom-ui/edutable";
import CustomTable from "./custom-ui/table";
import { Box } from "@mui/material";

export default function WorkHistory() {
  const rows = [
    {
      logo: "/teamliftlogo.png",
      company: "TeamLift",
      role: "Software Engineer",
      period: "01.2026 — Now",
      location: "Brooklyn, New York - Remote",
    },
    {
      logo: "/iwlogo.png",
      company: "IWConnect",
      role: "Software Engineering Mentorship",
      period: "12.2024 — 06.2025",
      location: "Bitola, Macedonia - Remote",
    },
    {
      logo: "/xgatelogo.png",
      company: "XGate",
      role: "Software Engineering Intern",
      period: "03.2025 — 04.2025",
      location: "Prilep, Macedonia - On Site",
    },
    {
      logo: "/grabitlogo.png",
      company: "GrabIT",
      role: "Software Engineering Intern",
      period: "07.2024 — 09.2024",
      location: "Prilep, Macedonia - Hybrid",
    },
    {
      logo: "/grabitlogo.png",
      company: "GrabIT",
      role: "Software Engineering Intern",
      period: "07.2023 — 09.2023",
      location: "Prilep, Macedonia - On Site",
    },
    {
      logo: "/endavalogo.jpg",
      company: "Endava",
      role: "Data Engineering Mentorship",
      period: "03.2023 — 07.2023",
      location: "Bitola, Macedonia - Remote",
    },
  ];

  const edurows = [
    {
      logo: "/fikt_logo.png",
      company: "FICT",
      role: "MSc | Computer Science",
      period: "11.2025 — Now",
      location: "Bitola, Macedonia",
    },
    {
      logo: "/fikt_logo.png",
      company: "FICT",
      role: "BSc | Computer Science",
      period: "09.2021 — 09.2025",
      location: "Bitola, Macedonia",
    },
    {
      logo: "/logogim.jpg",
      company: "Gymnasium Mirche Acev",
      role: "Math & Science",
      period: "09.2017 — 06.2021",
      location: "Prilep, Macedonia",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 0, lg: 10, md: 5 },
        justifyContent: "center",
        alignItems: "stretch",
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
