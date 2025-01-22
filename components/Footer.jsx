import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* <div className="bg-blue-500 text-white text-center p-6">
        <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest articles</p>
        <form className="flex justify-center mt-4">
          <input
            type="email"
            className="p-2 rounded-l"
            placeholder="Enter your email"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-700">
            Subscribe
          </button>
        </form>
      </div> */}
      <footer className="py-6 bg-indigo-900 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Next.js First App . All rights
          reserved. Developed By{" "}
          <Link
            href={`https://shahriarahbiddut.web.app/`}
            className="font-bold text-white italic"
          >
            Shahriar Ahmed Biddut
          </Link>
        </p>
      </footer>
    </>
  );
}
