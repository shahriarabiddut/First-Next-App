"use client";
import Link from "next/link";
import { useState } from "react";

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
            {isOpen == true ? (
              "X"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="block w-full text-center px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300"
              >
                Blogs
              </Link>
              <Link
                href="/posts"
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
