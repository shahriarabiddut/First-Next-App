import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import image from "@/public/404.png";
import FeatureCard from "@/components/FeatureCard";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "About Us | First Next App",
  description: "Learn about Next.js features",
};

const AboutPage = () => {
  return (
    <section className="min-h-screen  text-gray-800 py-12 px-6">
      <h1
        className={`text-5xl my-6 text-center font-bold ${geistMono.variable}`}
      >
        About
      </h1>
      <div className="text-center mb-10">
        <Image
          placeholder="blur"
          src={image}
          alt="About Next.js"
          width={400}
          className="mx-auto rounded-lg"
        />
        <p className="mt-4 text-lg text-gray-600">
          Next.js is the React framework for production. It makes building fast,
          scalable, and modern web applications easy and efficient.
        </p>
      </div>

      {/* Key Features */}
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
  );
};

export default AboutPage;
