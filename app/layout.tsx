import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARAV — An Explorin' Student",
  description:
    "ARAV is a mechanical engineering student exploring software, technology and whatever interesting idea comes next.",
  keywords: [
    "Arav Patel",
    "ARAV",
    "personal portfolio",
    "software projects",
    "JoSAA Atlas",
  ],
  openGraph: {
    title: "ARAV — An Explorin' Student",
    description:
      "ARAV is a mechanical engineering student exploring software, technology and whatever interesting idea comes next.",
    siteName: "ARAV",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
