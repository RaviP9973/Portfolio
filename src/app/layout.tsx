import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravi Prakash Pal | Full-Stack Developer",
  description:
    "Portfolio of Ravi Prakash Pal — Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, and System Design. Knight on LeetCode, 3-Star on CodeChef.",
  keywords: [
    "Ravi Prakash Pal",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Ravi Prakash Pal" }],
  openGraph: {
    title: "Ravi Prakash Pal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, TypeScript, and System Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
