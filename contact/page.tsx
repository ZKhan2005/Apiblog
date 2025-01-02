import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AiOutlineMail, AiOutlinePhone , AiOutlineX } from "react-icons/ai";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 text-gray-800 py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center">
          Connect with me on social media or drop a message through any platform
          below.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlineMail size={24} />
            <Link href="mailto:your-email@example.com" className="ml-2 hover:underline">
              zk7057023@gmail.com
            </Link>
          </div>

          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlinePhone size={24} />
            <Link href="tel:+03155511155" className="ml-2 hover:underline">
              +03155511155
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link
            href="https://www.linkedin.com/in/z-khan-2b309b300/"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href="https://github.com/ZKhan2005"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </Link>
          <Link
            href="https://instagram.com/your-profile"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            href="https://facebook.com/in/your-profile"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={40} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
