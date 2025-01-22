import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      <section className="flex items-center justify-center min-h-[80vh] text-center px-4">
        <div>
          <h2 className="text-6xl font-extrabold mb-6">
            Welcome to <span className="text-yellow-300">Next.js </span> Fake
            Blog!
          </h2>
          <p className="text-lg mb-8">
            Next.js is a React framework that enables you to build fast,
            scalable, and SEO-friendly web applications with ease.
          </p>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-indigo-800 px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Read the Docs
          </a>
        </div>
      </section>

      <BlogSection />
    </main>
  );
}
