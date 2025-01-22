import Image from "next/image";
import four from '@/public/404.png'

export default function NotFound() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-9xl font-extrabold text-white">404</h1>
      <h2 className="text-2xl font-semibold">
        Oops! The page you're looking for doesn't exist.
      </h2>
      <Image
          src={four} // Replace with your own image URL
          alt="Lost in Space"
          className="rounded-lg shadow-lg w-96 max-w-md"
        />
      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Go to Homepage
      </a>
      <div className="mt-12">
        
      </div>
    </div>
  )
}
