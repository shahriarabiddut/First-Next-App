import Comments from "@/components/Comments";
import { getAllPosts, getPost, getPostComments } from "@/lib/Posts";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params; // Fixed destructuring
  const post = await getPost(id);
  if (!post) {
    notFound();
  }
  return {
    title: `${post.title} | First Next App`,
    description: "Explore this blog post in detail.",
  };
}

const Post = async ({ params }) => {
  const { id } = await params; // Fixed destructuring
  const postPromise = getPost(id);

  const commentsPromise = getPostComments(id);

  const post = await postPromise;
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <article className="bg-white shadow-md rounded-lg p-6 my-4">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">{post.body}</p>
      </article>
      <section className="mt-8">
        <Suspense
          fallback={<p className="text-gray-500">Loading Comments...</p>}
        >
          <Comments promise={commentsPromise} />
        </Suspense>
      </section>
    </main>
  );
};

export default Post;

// Converts Dynamic Routes to Static Routes (SSG)
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
