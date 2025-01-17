"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-20"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" aria-label="Cosmedix Home">
            <img src="images/logo.png" alt="Cosmedix Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Middle Button for Dropdown */}
        <button
          className="text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
        </button>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="px-6 py-2 text-sm text-white bg-[#a07e60] rounded-full hover:bg-[#8e7054] transition-all"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute left-0 top-[64px] w-full bg-gray-50 z-[100] shadow-lg"
          aria-label="Mobile Navigation Menu"
          style={{ height: "calc(50vh - 64px)" }}
        >
          <ul className="grid grid-cols-2 gap-y-6 text-center mt-8 mx-auto max-w-4xl text-[2rem] font-medium text-[#a07e60]">
            <li>
              <Link
                href="/"
                className="hover:underline"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/treatments"
                className="hover:underline"
                aria-label="Treatments"
              >
                Treatments
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline"
                aria-label="Blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:underline"
                aria-label="Shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/concerns"
                className="hover:underline"
                aria-label="Concerns"
              >
                Concerns
              </Link>
            </li>
            <li>
              <Link
                href="/locate-us"
                className="hover:underline"
                aria-label="Locate Us"
              >
                Locate Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
