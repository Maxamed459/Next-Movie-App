import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import Header from "./_component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Movie App",
  description: "Next Movie App helps you discover and explore movies easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 sticky top-0 bg-white z-20 shadow">
          <Header />
        </header>
        {children}

        <footer className="bg-white">
          <div className="flex items-center justify-between p-8">
            <Link href="/" className="w-1/3">
              <h1 className="text-xl font-bold text-[#000b58] cursor-pointer">
                Next Movie App
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                About Us: Next Movie App helps you discover and explore movies
                easily. Built with Next.js and React, our goal is to provide a
                simple and enjoyable movie browsing experience.
              </p>
            </Link>
            <div className="w-1/3">
              <nav className="hidden md:block">
                <h2 className="text-2xl font-medium">Links</h2>
                <ul className="flex flex-col space-x-4 text-[#000b58] text-[18px]">
                  <li>
                    <Link href="/movies">Popular Movies</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4 text-2xl w-[]">
              <Link href="https://github.com/Maxamed459">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/maxamed-mahdi-126a702aa/">
                <FaLinkedin />
              </Link>
              <Link href="https://www.facebook.com/wll.moh4">
                <FaFacebook />
              </Link>
            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <p className="text-center text-gray-600">
              &copy; 2025 all rights reserved by Moh4
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
