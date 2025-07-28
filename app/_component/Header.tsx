"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-[#000b58] cursor-pointer">
            Next Movie App
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-[#000b58] text-[18px]">
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
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-gradient-to-r from-[#000b58] to-purple-700 text-white rounded">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#000b58] to-purple-700 text-white rounded">
            Sign Up
          </button>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-[#000b58] focus:outline-none"
            aria-label="Open menu"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden mt-4">
        <ul className="flex flex-col space-y-2 text-[#000b58] text-[18px]">
          <li>
            <Link
              href="/movies"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }
            >
              Popular Movies
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col space-y-2 mt-4">
          <button className="px-4 py-2 bg-gradient-to-r from-[#000b58] to-purple-700 text-white rounded">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#000b58] to-purple-700 text-white rounded">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
