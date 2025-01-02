"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts = [
  {
    id: "1",
    title: "The Future of Technology and Its Impact on Daily Life",
    image: "/images/tech_future.jpg",
    content: [
      "Technology has seamlessly integrated into every aspect of our lives, shaping the way we interact, work, and live.",
      "From AI-driven automation to advancements in renewable energy, the future holds exciting possibilities for improving our quality of life.",
      "As we move forward, it is essential to ensure that technology evolves responsibly, addressing critical issues such as privacy, security, and sustainability.",
    ],
  },
  {
    id: "2",
    title: "Unlocking Creativity with Artificial Intelligence",
    image: "/images/ai_creativity.png",
    content: [
      "AI is no longer confined to data analysis; it is now a vital tool in the creative industries.",
      "From generating art and music to assisting writers, AI is transforming the way we approach creative endeavors.",
      "While it enhances creativity, it also challenges us to define the role of human originality in an AI-assisted world.",
    ],
  },
  {
    id: "3",
    title: "Sustainability in the Digital Age",
    image: "/images/sustainability.jpeg",
    content: [
      "Digital transformation is driving businesses toward more sustainable practices.",
      "Innovative solutions like cloud computing and IoT are helping organizations minimize their carbon footprint.",
      "Consumers are increasingly demanding eco-friendly products and services, pushing companies to prioritize sustainability.",
    ],
  },
  {
    id: "4",
    title: "The Evolution of Web Development Frameworks",
    image: "/images/web_frameworks.png",
    content: [
      "The world of web development is evolving rapidly, with frameworks like Next.js leading the way.",
      "These tools simplify development, enhance performance, and provide developers with the ability to create stunning user experiences.",
      "As we adopt these frameworks, it is crucial to stay updated with new features and best practices.",
    ],
  },
  {
    id: "5",
    title: "Empowering Education with Digital Tools",
    image: "/images/digital_education.jpg",
    content: [
      "The rise of e-learning platforms has made education accessible to millions worldwide.",
      "Digital tools empower educators to deliver personalized and engaging learning experiences.",
      "However, bridging the digital divide remains a critical challenge for ensuring equal opportunities.",
    ],
  },
  {
    id: "6",
    title: "The Role of Blockchain in Modern Businesses",
    image: "/images/blockchain.png",
    content: [
      "Blockchain technology is revolutionizing industries with its decentralized and transparent nature.",
      "From secure financial transactions to smart contracts, blockchain is reshaping how businesses operate globally.",
      "Its potential applications extend beyond cryptocurrency, including supply chain management and digital identity verification.",
    ],
  },
  {
    id: "7",
    title: "The Growth of Remote Work Culture",
    image: "/images/remote_work.png",
    content: [
      "Remote work has become a significant part of modern corporate culture, driven by technological advancements.",
      "Flexible working environments are leading to increased productivity and better work-life balance for employees.",
      "However, maintaining team collaboration and communication remains a key challenge for organizations.",
    ],
  },
  {
    id: "8",
    title: "Healthcare Innovations Driven by Technology",
    image: "/images/healthcare_tech.jpeg",
    content: [
      "Technology is transforming healthcare with innovations such as telemedicine, wearable devices, and AI diagnostics.",
      "These advancements improve patient outcomes, increase access to care, and reduce costs for both providers and patients.",
      "As the industry embraces digital transformation, ethical considerations around data privacy and accessibility are paramount.",
    ],
  },
  {
    id: "9",
    title: "Cybersecurity in the Age of Digital Transformation",
    image: "/images/cybersecurity.png",
    content: [
      "As businesses move online, cybersecurity has become a top priority to protect sensitive data from threats.",
      "Innovative solutions like AI-driven threat detection are helping organizations stay ahead of cybercriminals.",
      "Building awareness about safe online practices is crucial for both individuals and businesses in this digital age.",
    ],
  },
];

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-16">
      <Navbar />
      <div className="container mx-auto text-center p-6 sm:p-12 pt-16 md:pt-24">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-72 lg:h-96 mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black my-8">
          {post.title}
        </h1>
        <div className="text-lg sm:text-xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10 max-w-sm md:max-w-2xl lg:max-w-4xl bg-gradient-to-t from-purple-200 via-indigo-100 to-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:ring focus:ring-purple-300 overflow-wrap break-words"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 ml-2 rounded-r hover:bg-purple-600"
            >
              Post
            </button>
          </div>
        </form>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-4 text-gray-800"
              >
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
