import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigPlaced",
  description: "We are here to make your on-paper dream real",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
