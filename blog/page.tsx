"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const articles = [
  {
    id: "1",
    title: "The Future of Technology and Its Impact on Daily Life",
    image: "/images/tech_future.jpg",
    summary:
      "Technology has seamlessly integrated into every aspect of our lives.",
  },
  {
    id: "2",
    title: "Unlocking Creativity with Artificial Intelligence",
    image: "/images/ai_creativity.png",
    summary: "AI is transforming the way we approach creative endeavors.",
  },
  {
    id: "3",
    title: "Sustainability in the Digital Age",
    image: "/images/sustainability.jpeg",
    summary:
      "Digital transformation is driving businesses toward more sustainable practices.",
  },
  {
    id: "4",
    title: "The Evolution of Web Development Frameworks",
    image: "/images/web_frameworks.png",
    summary: "The world of web development is evolving rapidly.",
  },
  {
    id: "5",
    title: "Empowering Education with Digital Tools",
    image: "/images/digital_education.jpg",
    summary:
      "The rise of e-learning platforms has made education accessible to millions worldwide.",
  },
  {
    id: "6",
    title: "The Role of Blockchain in Modern Businesses",
    image: "/images/blockchain.png",
    summary: "Blockchain is reshaping how businesses operate globally.",
  },
  {
    id: "7",
    title: "The Growth of Remote Work Culture",
    image: "/images/remote_work.png",
    summary:
      "Remote work has become a significant part of modern corporate culture.",
  },
  {
    id: "8",
    title: "Healthcare Innovations Driven by Technology",
    image: "/images/healthcare_tech.jpeg",
    summary: "Technology is transforming healthcare with innovations.",
  },
  {
    id: "9",
    title: "Cybersecurity in the Age of Digital Transformation",
    image: "/images/cybersecurity.png",
    summary:
      "Cybersecurity has become a top priority to protect sensitive data from threats.",
  },
];

const ArticlesPage = () => {
  const [displayLimit, setDisplayLimit] = useState(6);

  const showMoreArticles = () => {
    setDisplayLimit((currentLimit) => currentLimit + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-20">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-8">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 md:p-16">
        {articles.slice(0, displayLimit).map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link href={`/articles/${article.id}`}>
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30"></div>
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 hover:text-purple-600">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
              <Link
                href={`/blog/${article.id}`}
                className="text-purple-500 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {displayLimit < articles.length && (
        <div className="text-center mb-10">
          <button
            onClick={showMoreArticles}
            className="bg-purple-500 text-white px-5 py-3 rounded-md hover:bg-purple-600"
          >
            Load More
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ArticlesPage;
