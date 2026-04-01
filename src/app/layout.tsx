import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Sanula Rajapaksha — Full-Stack Developer",
  description:
    "Portfolio of Sanula Rajapaksha — Full-Stack Developer & Mobile Engineer at IIT Sri Lanka / University of Westminster.",
  keywords: ["Sanula Rajapaksha", "Full-Stack Developer", "Flutter", "React", "Sri Lanka", "IIT"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
