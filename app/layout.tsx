import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Gale — Engineer / Builder",
  description:
    "Full-stack and product engineer. Building at the intersection of design and engineering.",
  openGraph: {
    title: "Ryan Gale — Engineer / Builder",
    description:
      "Full-stack and product engineer. Building at the intersection of design and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
