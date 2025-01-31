"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header({ title, isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkCss = `${
    isOpen ? "block w-full text-center" : ""
  } px-4 py-2 hover:bg-white hover:text-indigo-600 rounded-lg transition duration-300`;

  const links = (
    <>
      <Link href="/" className={linkCss} onClick={() => setIsOpen(false)}>
        Home
      </Link>
      <Link href="/about" onClick={() => setIsOpen(false)} className={linkCss}>
        About
      </Link>
      <Link href="/blog" onClick={() => setIsOpen(false)} className={linkCss}>
        Blogs
      </Link>
      {!isAuthenticated ? (
        <LoginLink>Sign in</LoginLink>
      ) : (
        <>
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className={linkCss}
          >
            Profile
          </Link>
          <LogoutLink>Log out</LogoutLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-indigo-500 text-white shadow-md fixed w-full">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="cursor-pointer hover:text-yellow-300 transition duration-300">
              {title}
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 md:justify-center md:items-center">
          {links}
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50">
            <div className="flex flex-col items-center space-y-4 py-4">
              {links}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
