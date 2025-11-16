import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import WorkIcon from "@mui/icons-material/Work";

interface WorkItem {
  logo: string;
  company: string;
  role: string;
  period: string;
}

interface CustomTableProps {
  title: string;
  rows: WorkItem[];
}

export default function CustomTable({ title, rows }: CustomTableProps) {
  return (
    <Box
      sx={{
        mt: 5,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 7,
        p: { xs: 1, sm: 1 },
        maxWidth: { xs: 500, sm: 650 },
        mx: "auto",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: 1.5,
          mt: 2,
          ml: 2,
          display: "flex",
          alignItems: "center",
          fontSize: { xs: 20, sm: 20 },
          gap: 1,
        }}
      >
        <WorkIcon fontSize="large" />
        {title}
      </Typography>

      <Table sx={{ minWidth: 0 }}>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} sx={{ "& td, & th": { borderBottom: "none" } }}>
              <TableCell sx={{ py: { xs: 1, sm: 1 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 2, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={row.logo}
                      alt="logo"
                      width={35}
                      height={35}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: 15, sm: 15 },
                      }}
                    >
                      {row.company}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: { xs: 11, sm: 13 },
                        color: "text.secondary",
                      }}
                    >
                      <Box>{row.role}</Box>
                      <Box sx={{ marginLeft: "50px", mb: "2px" }}>
                        {row.period}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
