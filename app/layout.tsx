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

const SITE_URL = "https://kmfenterprise.ng";
const SITE_NAME = "KMFenterprise";
const SITE_DESCRIPTION =
  "KMFenterprise designs and builds institutional platforms, business websites, and digital systems for organizations across Nigeria and beyond. Keep Moving Forward.";
const OG_IMAGE = "/assets/images/og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Web Systems & Brand Strategy`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "KMFenterprise",
    "web development Nigeria",
    "web systems agency",
    "institutional platforms",
    "custom software development Nigeria",
    "brand strategy",
    "Next.js development agency",
    "Abuja web design",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Web Systems & Brand Strategy`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Keep Moving Forward`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Web Systems & Brand Strategy`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  themeColor: "#10160C",
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