import FeatureCard from "@/components/FeatureCard";
import image from "@/public/404.png";
import Image from "next/image";

export const metadata = {
  title: "About Us | First Next App",
  description: "Learn about Next.js features",
};

const AboutPage = () => {
  return (
    <>
      <section
        id="about"
        className="py-16 bg-white text-indigo-500 flex justify-center items-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Next.js</h2>
          <p className="text-lg leading-relaxed text-center">
            Next.js is a powerful framework for building server-rendered React
            applications. It provides features like:
          </p>
          <ul className="mt-6 space-y-3 text-center">
            <li>⚡ Fast Rendering with Server-Side Rendering (SSR)</li>
            <li>🚀 Static Site Generation (SSG)</li>
            <li>🔍 SEO Optimization</li>
            <li>📦 Built-in API Routes</li>
          </ul>
        </div>
      </section>
      <section
        id="features"
        className="py-16 text-center bg-gradient-to-b from-indigo-700 to-indigo-900 min-h-[80vh] flex justify-center items-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Why Use Next.js?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 text-indigo-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Server-Side Rendering</h3>
              <p>
                Deliver pages faster by pre-rendering content on the server.
              </p>
            </div>
            <div className="p-6 bg-gray-100 text-indigo-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">API Routes</h3>
              <p>Create backend APIs without leaving your Next.js app.</p>
            </div>
            <div className="p-6 bg-gray-100 text-indigo-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Static Generation</h3>
              <p>Pre-build pages for better performance and scalability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen  text-gray-800 py-12 px-6">
        <h2 className="text-4xl font-bold mb-8 text-indigo-700 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          <FeatureCard
            title="Routing"
            description="Next.js offers a file-based routing system, enabling you to create routes by defining files in the `pages/` directory."
          />
          <FeatureCard
            title="Data Fetching"
            description="Fetch data seamlessly with methods like `getServerSideProps`, `getStaticProps`, and `useEffect` for dynamic and static content."
          />
          <FeatureCard
            title="Rendering"
            description="Choose between static generation (SSG), server-side rendering (SSR), and client-side rendering (CSR) for optimized performance."
          />
          <FeatureCard
            title="Caching"
            description="Leverage built-in caching mechanisms to serve faster responses with static content or revalidate data with ISR (Incremental Static Regeneration)."
          />
          <FeatureCard
            title="Styling"
            description="Use CSS-in-JS libraries, CSS modules, or utility-first frameworks like Tailwind CSS to style your components efficiently."
          />
          <FeatureCard
            title="Optimizing"
            description="Next.js automatically optimizes assets like images using the `Image` component and supports code splitting for faster load times."
          />
          <FeatureCard
            title="Configuring"
            description="Easily configure your app using the `next.config.js` file for customization, including redirects, rewrites, and plugins."
          />
          <FeatureCard
            title="Testing"
            description="Ensure quality with testing libraries like Jest, React Testing Library, and Cypress for end-to-end, integration, and unit testing."
          />
          <FeatureCard
            title="Authentication"
            description="Implement authentication using third-party libraries like NextAuth.js or build custom authentication solutions with API routes."
          />
          <FeatureCard
            title="Deploying"
            description="Deploy your app effortlessly to platforms like Vercel, Netlify, or AWS with built-in optimizations for serverless functions."
          />
          <FeatureCard
            title="Upgrading"
            description="Stay up-to-date with new features and improvements using `npx next@latest upgrade` to upgrade your app easily."
          />
        </div>
      </section>
      <section
        id="get-started"
        className="py-16 bg-yellow-300 text-indigo-800 flex justify-center items-center"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started with Next.js</h2>
          <p className="text-lg mb-6">
            Ready to dive into Next.js? Follow these simple steps to create your
            first project.
          </p>
          <ol className="text-left mx-auto max-w-2xl space-y-4 list-decimal px-6">
            <li>
              Install Next.js:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                npx create-next-app@latest my-app
              </code>
            </li>
            <li>
              Navigate to your project:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">cd my-app</code>
            </li>
            <li>
              Start the development server:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code>
            </li>
            <li>Build your pages and explore the features!</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
