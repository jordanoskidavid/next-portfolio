import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./globals.css";
import theme from "../theme";
import EmotionRegistry from "@/lib/EmotionRegistry";
import ClientOnly from "@/lib/ClientOnly";
import SmoothScrollProvider from "@/lib/smoothScroll";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const PREVIEW_IMAGE = "/landingpagedavid.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidjordanoski.dev"),
  title: "David Jordanoski - Software Engineer",
  description: "Portfolio Site - David Jordanoski - Software Engineer",
  openGraph: {
    title:
      "David Jordanoski - Fullstack & Software Engineer | North Macedonia | Давид Јорданоски | Софтвер Инженер | Македонија",
    description:
      "Portfolio site of David Jordanoski - Software Engineer from Macedonia, specializing in Web Development - Frontend, Backend, Fullstack, AI | Портфолио на Давид Јорданоски - Софтвер Инженер - Македонија",
    url: "https://davidjordanoski.dev",
    siteName: "David Jordanoski",
    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: "David Jordanoski Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#222831" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Jordanoski",
              alternateName: "Давид Јорданоски",
              url: "https://davidjordanoski.dev",
              image: "https://davidjordanoski.dev/landingpagedavid.png",
              jobTitle: "Software Engineer",
              address: {
                addressRegion: "North Macedonia",
                addressCountry: "MK",
              },
              sameAs: [
                "https://github.com/jordanoskidavid",
                "https://www.linkedin.com/in/david-jordanoski-39047023a/",
              ],
              knowsAbout: [
                "Software Engineering",
                "Fullstack Development",
                "Next.js",
                "React",
                "NestJS",
                "Go",
                "AI",
                "TypeScript",
                "Software Architecture",
              ],
            }),
          }}
        />
      </head>

      <body className={poppins.variable}>
        <EmotionRegistry>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SmoothScrollProvider />
            <ClientOnly>{children}</ClientOnly>
          </ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
