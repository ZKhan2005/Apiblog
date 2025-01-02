import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Stay Connected</h2>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/ZKhan2005"
              target="_blank"
              className="hover:text-purple-400 transition duration-200"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </Link>
           
            <Link
              href="https://www.linkedin.com/in/z-khan-2b309b300/"
              target="_blank"
              className="hover:text-purple-400 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>

            <Link
              href=""
              target="_blank"
              className="hover:text-purple-400 transition duration-200"
              aria-label="Twitter"
            >
              <AiOutlineX size={24} />
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-purple-400 transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:text-purple-400 transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-purple-300 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Trendy Techs. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/"
              className="hover:text-purple-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-400 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-purple-400 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-purple-400 transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
