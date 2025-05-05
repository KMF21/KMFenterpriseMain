import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import 'bootstrap/dist/css/bootstrap.css';
import "packages/ui/assets/css/style-starter.css";
import "packages/ui/assets/css/owl.carousel.css";
import "packages/ui/assets/css/owl.theme.default.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KMFenterprise",
  description: "KMFenterprise agency website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}


        
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/jquery-3.3.1.min.js"></script>
{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/owl.carousel.js"></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
