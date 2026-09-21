import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Learning Journal | Sofian Hasan",
  description:
    "A hands-on Next.js learning journal covering routing, layouts, dynamic routes, image optimization, metadata, rendering, and React Server Components.",

  // "Exploring Next.js fundamentals through practical examples of routing, rendering, layouts, image optimization, and more."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistMono.className} min-h-full flex flex-col`}>
        {/* <h2>Fixed Portion</h2> */}

        <Navbar />

        {/* Here, children dynamically change specific page when user click on specific route or link */}
        <div>{children}</div>

        {/* Fixed route */}
      </body>
    </html>
  );
}
