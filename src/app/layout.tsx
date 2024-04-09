import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResearchPad",
  description: "Stay up-to-date with the latest AI Research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 max-w-screen mx-auto p-2">
      <body className="bg-white rounded-3xl min-h-full px-8 py-2 selection:bg-sky-100 selection:text-sky-900">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
