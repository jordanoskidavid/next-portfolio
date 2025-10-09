
import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./globals.css";
import theme from "../theme";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "David Jordanoski - Portfolio",
  description: "Portfolio site from David Jordanoski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
