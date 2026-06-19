import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru Vishal | Software Engineer, AI Engineer & Cybersecurity Researcher",
  description:
    "Portfolio of Guru Vishal — Software Engineer, AI Engineer, and Cybersecurity Researcher building production-grade software, AI-powered systems, and security solutions.",
  keywords: [
    "Guru Vishal",
    "Software Engineer",
    "AI Engineer",
    "Cybersecurity Researcher",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Guru Vishal" }],
  openGraph: {
    title: "Guru Vishal | Software Engineer & Cybersecurity Researcher",
    description:
      "Building production-grade software, AI-powered systems, and cybersecurity solutions that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
