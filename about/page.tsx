import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 pt-24">
      <Navbar />
      <main className="flex-1 flex flex-col items-center p-4 sm:p-12 sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-gray-800 mb-6">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-800 text-left mb-4 sm:mb-6 leading-tight font-light">
            Welcome to Trendy Techs, a place where technology, design, and
            creativity collide.Artificial Intelligence to autonomously perform tasks and make decisions without direct human intervention. These systems are designed to interact with the environment and take actions based on the information available, typically through machine learning, deep learning, and other AI technologies.

AI agents can be simple or highly complex, ranging from virtual assistants like Siri and Alexa to more advanced systems like self-driving cars or AI-powered decision-making systems used in industries like finance, healthcare, and customer service. 
          </p>
          <p className="text-sm sm:text-base md:text-xl text-gray-800 mb-4 text-left sm:mb-6 leading-tight md:leading-relaxed font-light">
            Join us as we explore and innovate in the tech world. Stay up to
            date with the latest trends, tutorials, and resources for both
            beginners and experts in the field!
          </p>
        </div>
        <div className="relative w-56 h-36 sm:w-44 sm:h-24 md:w-72 md:h-44 lg:w-96 lg:h-64 hover:shadow-lg hover:shadow-indigo-500 transition-shadow duration-300">
          <Image
            src="/images/team.png"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <Link
          href="/blog"
          className="inline-block bg-purple-500 text-white mt-10 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-purple-300"
        >
          View Latest Blogs
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default About;
