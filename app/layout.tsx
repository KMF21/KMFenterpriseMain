// @ts-ignore: side-effect import for global styles
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  IBM_Plex_Mono,
  Inter,
  Space_Grotesk,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--kmf-font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--kmf-font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--kmf-font-mono",
});

export const metadata: Metadata = {
  title: "KMFenterprise",
  description: "KMFenterprise Agency Website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} min-h-screen overflow-x-hidden bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}