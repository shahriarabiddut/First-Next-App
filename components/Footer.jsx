import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
