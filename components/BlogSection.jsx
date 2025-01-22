import React from "react";
import Sidebar from "./Sidebar";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/lib/Posts";
import Link from "next/link";

export default async function BlogSection() {
  const posts = await getAllPosts(14);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="col-span-1 bg-gray-100">
        <Sidebar />
      </div>
      <div className="col-span-1 md:col-span-2 bg-gray-200 p-2 space-y-2">
        <div className="flex justify-center">
          <h1 className="text-4xl text-center my-4 text-gray-700 font-bold">
            Recent Posts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {posts.map((post, index) => (
            <BlogCard key={index} blog={post} />
          ))}
        </div>
        <div className="flex">
          <Link
            href="/blog/"
            className="btn text-center w-full font-bold bg-indigo-500 text-white py-2 rounded-lg mt-2 hover:bg-indigo-600 transition duration-300"
          >
            All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
