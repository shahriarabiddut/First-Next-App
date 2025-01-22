import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white p-2 rounded shadow-md">
      <Link
        href={`/posts/${blog.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        <h3 className="my-1 text-xl font-bold">{blog.title}</h3>
      </Link>
    </div>
  );
}
