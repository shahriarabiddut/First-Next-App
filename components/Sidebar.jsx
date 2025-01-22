import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import profileImg from "@/public/user.png";
import Image from "next/image";

const Sidebar = () => {
  const socialCss = `p-2 text-xl border text-indigo-600 border-indigo-500 hover:bg-blue-500 hover:text-white transition-all  hover:border-blue-500 rounded-md`;
  return (
    <aside className="h-full w-full sm:fixed sm:top-0 sm:left-0 md:fixed md:top-0 md:left-0 sm:w-1/2 md:w-1/3 bg-gray-100 flex flex-col shadow-lg z-50">
      <div className="flex flex-col items-center text-center p-6">
        <Image
          className="w-32 h-32 bg-blue-500 rounded-full mb-4 p-2"
          src={profileImg}
          alt="Profile"
        />
        <h1 className="text-2xl font-bold">Shahriar Ahmed</h1>
        <p className="text-gray-600 my-2">
          I'm Shahriar Ahmed from Bangladesh , a passionate Full Stack Web
          Developer with a strong background in building full-stack web
          applications.
        </p>
        <div className="flex justify-center space-x-2 mb-5">
          <a href="https:www.facebook.com/shahriarhmed" className={socialCss}>
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/shahriarahmedbiddut/"
            className={socialCss}
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/shahriarabiddut" className={socialCss}>
            <FaGithub />
          </a>
        </div>
        <a
          href="#"
          className="btn btn-primary w-full font-bold bg-indigo-500 text-white py-2 rounded mt-auto hover:bg-blue-600"
        >
          Portfolio
        </a>
      </div>
      <div className="flex justify-end p-4">
        <i className="fas fa-angle-double-right text-blue-500"></i>
      </div>
    </aside>
  );
};

export default Sidebar;
