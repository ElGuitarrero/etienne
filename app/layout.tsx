import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import NavbarWrapper from '@/components/NavbarWrapper'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Daniel Etienne",
  description: "Daniel Etienne Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  )
}
