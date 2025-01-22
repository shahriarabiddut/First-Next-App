export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      

      <section className="flex items-center justify-center min-h-[70vh] text-center px-4">
        <div>
          <h2 className="text-6xl font-extrabold mb-6">
            Welcome to <span className="text-yellow-300">Next.js</span>
          </h2>
          <p className="text-lg mb-8">
            Next.js is a React framework that enables you to build fast, scalable, and SEO-friendly web applications with ease.
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

      <section id="about" className="py-16 bg-white text-indigo-700 flex justify-center items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Next.js</h2>
          <p className="text-lg leading-relaxed text-center">
            Next.js is a powerful framework for building server-rendered React applications. It provides features like:
          </p>
          <ul className="mt-6 space-y-3 text-center">
            <li>⚡ Fast Rendering with Server-Side Rendering (SSR)</li>
            <li>🚀 Static Site Generation (SSG)</li>
            <li>🔍 SEO Optimization</li>
            <li>📦 Built-in API Routes</li>
          </ul>
        </div>
      </section>

      <section id="features" className="py-16 text-center bg-gradient-to-b from-indigo-700 to-indigo-900 min-h-[80vh] flex justify-center items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Why Use Next.js?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 text-black rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Server-Side Rendering</h3>
              <p>Deliver pages faster by pre-rendering content on the server.</p>
            </div>
            <div className="p-6 bg-gray-100 text-black rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">API Routes</h3>
              <p>Create backend APIs without leaving your Next.js app.</p>
            </div>
            <div className="p-6 bg-gray-100 text-black rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Static Generation</h3>
              <p>Pre-build pages for better performance and scalability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" className="py-16 bg-yellow-400 text-indigo-800 flex justify-center items-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started with Next.js</h2>
          <p className="text-lg mb-6">
            Ready to dive into Next.js? Follow these simple steps to create your first project.
          </p>
          <ol className="text-left mx-auto max-w-2xl space-y-4 list-decimal px-6">
            <li>Install Next.js: <code className="bg-gray-100 px-2 py-1 rounded">npx create-next-app@latest my-app</code></li>
            <li>Navigate to your project: <code className="bg-gray-100 px-2 py-1 rounded">cd my-app</code></li>
            <li>Start the development server: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
            <li>Build your pages and explore the features!</li>
          </ol>
        </div>
      </section>

      
    </main>
  );
}
