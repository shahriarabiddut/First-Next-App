"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-indigo-500 text-white shadow-md fixed w-full">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="cursor-pointer hover:text-yellow-300 transition duration-300">
              {title}
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/posts"
            className="px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
          >
            Posts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen == true ? "X" : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                About
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                Blogs
              </Link>
              <Link
                href="/posts"
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                Posts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
