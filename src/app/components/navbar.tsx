// components/Navbar.js
"use client"

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

const Navbar = () => {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Bandage</div>

        {/* Main Navigation */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-400">
            Shop
          </Link>
          <Link href="../about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="./contact" className="hover:text-blue-400">
            Contact
          </Link>
       
          <div
            className="relative"
            onMouseEnter={() => setShopMenuOpen(true)}
            onMouseLeave={() => setShopMenuOpen(false)}
          >
            <button className="hover:text-blue-400">Shop Layout</button>
            {isShopMenuOpen && (
              <div className="absolute top-8 left-0 bg-gray-700 text-sm rounded shadow-md p-4">
                <Link href="#" className="block hover:text-yellow-400">
                  Product Layout
                </Link>
                <Link href="#" className="block hover:text-yellow-400">
                  Product Type
                </Link>
                <Link href="#" className="block hover:text-yellow-400">
                  Product Categories
                </Link>
                <Link href="#" className="block hover:text-yellow-400">
                  Full Width
                </Link>
                <Link href="#" className="block hover:text-yellow-400">
                  Big Image Scrolling
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Login/Register */}
        <div>
          <Link href="/login" className="hover:text-blue-400">
            Login / Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
