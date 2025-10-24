import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shigokae = localFont({
  src: "../../public/fonts/Sigokae_Demo.ttf",
  variable: "--font-shigokae",
  display: "swap",
});

const gentleRemind = localFont({
  src: "../../public/fonts/Sigokae_Demo.ttf",
  variable: "--font-gentle-remind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portofolio - Graphic Designer",
  description: "Portfolio graphic designer showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shigokae.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

