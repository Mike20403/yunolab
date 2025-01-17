"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Logo and Navigation */}
        <div className="flex flex-col space-y-4">
          <img src="/images/logo-white.png" alt="Cosmedix Logo" className="h-[5rem]" />
          <nav className="flex flex-wrap space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/concerns">Concerns</Link>
            <Link href="/treatments">Treatments</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/locate-us">Locate Us</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 text-sm">
          <div>
            <p className="font-semibold">Contact Us</p>
            <p>+02 8006 3344</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>robert@cosmedixclinics.com.au</p>
          </div>
        </div>

        {/* Address and Opening Hours */}
        <div className="flex flex-col space-y-4 text-sm">
          <div>
            <p className="font-semibold">Address</p>
            <p>169 William Street - Darlinghurst</p>
            <p>Sydney, NSW</p>
          </div>
          <div>
            <p className="font-semibold">Opening Hours</p>
            <p>9am—6pm</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="bg-white text-black rounded-full py-2 px-4 shadow-md hover:bg-gray-200"
          aria-label="Back to Top"
        >
          ↑
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 — COPYRIGHT
      </div>
    </footer>
  );
};

export default Footer;
