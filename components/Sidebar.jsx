import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaFirefoxBrowser,
} from "react-icons/fa";
import profileImg from "@/public/user.png";
import Image from "next/image";

const Sidebar = () => {
  const socialCss = `p-2 text-xl border text-indigo-600 border-indigo-500 hover:bg-blue-500 hover:text-white transition-all  hover:border-blue-500 rounded-md`;
  return (
    <>
      <div className="flex flex-col items-center text-center justify-center px-6 h-screen w-full py-10 ">
        <Image
          className="w-32 h-32 bg-blue-500 rounded-full mb-4 p-2"
          src={profileImg}
          alt="Shahriar Ahmed's Profile Picture"
        />
        <h1 className="text-2xl font-bold text-indigo-400">Shahriar Ahmed</h1>
        <p className="text-gray-600 my-2">
          I'm Shahriar Ahmed from Bangladesh, a passionate Full Stack Web
          Developer with a strong background in building full-stack web
          applications.
        </p>

        <div className="flex justify-center space-x-4 my-4">
          <a
            href="https://www.facebook.com/shahriarhmed"
            className="text-white bg-blue-600 rounded-full p-3 hover:bg-blue-800 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/shahriarahmedbiddut/"
            className="text-white bg-blue-500 rounded-full p-3 hover:bg-blue-700 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/shahriarabiddut"
            className="text-white bg-gray-800 rounded-full p-3 hover:bg-gray-600 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://shahriarahbiddut.web.app/"
            className="text-white bg-green-500 rounded-full p-3 hover:bg-green-700 transition duration-300"
          >
            <FaFirefoxBrowser />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
