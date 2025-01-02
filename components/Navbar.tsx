"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-between px-6 py-4 sm:px-8 shadow-lg fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="text-3xl font-bold tracking-widest hover:scale-105 transform transition duration-200 cursor-pointer">
        <span className="text-white">
          <Link href="/">Trendy Techs</Link>
        </span>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className={`fixed inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex flex-col justify-center items-center transform transition-transform duration-300 space-y-6 p-6 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-3xl text-white"
          >
            <AiOutlineClose />
          </button>
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl font-bold text-white hover:text-purple-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-2xl font-bold text-white hover:text-purple-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-bold text-white hover:text-purple-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <Link
          href="/"
          className="relative group text-white hover:text-purple-300"
        >
          <span className="group-hover:text-purple-400">Home</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/about"
          className="relative group text-white hover:text-purple-300"
        >
          <span className="group-hover:text-purple-400">About</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/blog"
          className="relative group text-white hover:text-purple-300"
        >
          <span className="group-hover:text-purple-400">Blog</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/contact"
          className="relative group text-white hover:text-purple-300"
        >
          <span className="group-hover:text-purple-400">Contact</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
