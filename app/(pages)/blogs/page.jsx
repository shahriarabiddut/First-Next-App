import Button from "@/components/Button";
import Link from "next/link";

export const metadata = {
  title: "Blogs | First Next App",
  description: "Explore Next.js Concepts and Features",
};

const blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Understanding Components in Next.js",
      description: `Learn how to create reusable and dynamic components in Next.js to build modular and maintainable UIs.`,
    },
    {
      id: 2,
      title: "Mastering File Conventions in Next.js",
      description: `Discover the importance of file and folder conventions in Next.js, such as the pages/ and app/ directories.`,
    },
    {
      id: 3,
      title: "Leveraging Functions in Next.js",
      description: `Understand the powerful built-in functions like getStaticProps, getServerSideProps, and getStaticPaths for data fetching.`,
    },
    {
      id: 4,
      title: "Exploring next.config.js Options",
      description: `Dive into the configuration options available in next.config.js to customize your Next.js application.`,
    },
    {
      id: 5,
      title: "The Edge Runtime in Next.js",
      description: `Learn about the Edge Runtime and how it enables faster and more scalable serverless functions for Next.js apps.`,
    },
  ];

  return (
    <section className="min-h-screen py-12">
      <h1 className="text-5xl font-bold text-center mb-10 text-indigo-600">
        Blogs
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-6">{blog.description}</p>
            <div className="flex justify-between items-center">
              <Link
                href={`/blogs/${blog.id}`}
                className="text-blue-500 font-bold hover:underline"
              >
                Read More
              </Link>
              <Button id={blog.id} children="Click Me" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default blogs;
