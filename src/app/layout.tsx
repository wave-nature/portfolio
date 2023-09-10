import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import StoreProvider from "@/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigPlaced",
  description:
    "Discover top-notch freelancing services at gigplaced.tech. Our talented pool of professionals offers a wide range of expertise, from web and app development to data science and video editing. Partner with us to find skilled freelancers for your projects and unlock the true potential of your ideas.",
  keywords:
    "freelancing service, web development, android development, ios development, cross-platform apps, data science work, web design, app design, saas product development, video editing, gigplaced, freelancer marketplace, tech services, professional freelancers, hire freelancers, software development, app development services, data analysis, creative design services, remote freelancers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="image"
        property="og:image"
        content="/images/preview.png"
      ></meta>
      <body className={`${inter.className} relative`}>
        <StoreProvider>
          <Header />
          {children}
          <Copyright />
        </StoreProvider>
      </body>
    </html>
  );
}
