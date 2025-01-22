import { getAllPosts } from "@/lib/Posts";
import Link from "next/link";

export default async function page() {
  const posts = await getAllPosts();
  //   console.log(posts);
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center my-4">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-5 bg-white text-black rounded-lg  my-2 mx-1"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-left text-2xl py-3 text-blue-700 capitalize">
                {post.title}
              </h2>
            </Link>
            <p className="text-justify text-lg pb-3">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
