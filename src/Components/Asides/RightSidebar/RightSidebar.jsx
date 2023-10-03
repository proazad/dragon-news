import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import adbg from "../../../assets/neon.png";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const RightSidebar = () => {
  return (
    <div className="space-y-5 px-2 lg:px-0">
      <div className="sticky top-2">
        {/* Login with  */}
        <div>
          <h3 className="text-lg font-bold mb-4">Login with</h3>
          <Link
            to="/"
            className="flex gap-3 text-gray-500 hover:text-blue-600 mt-2 p-3 border rounded-md"
          >
            <FcGoogle className="text-xl" /> Login with Google
          </Link>
          <Link
            to="/"
            className="flex gap-3 text-gray-500 hover:text-blue-600 mt-2 p-3 border rounded-md"
          >
            <AiFillGithub className="text-xl" /> Login with Github
          </Link>
        </div>
        {/* Find Us on  */}
        <div className="my-7">
          <h3 className="text-lg font-bold mb-4">Find us on</h3>
          <div className="border rounded-md">
            <Link to="/" className="flex gap-3 text-blue-800 border-b p-3">
              <FaFacebookF className="text-4xl bg-gray-300 p-2 rounded-full" />{" "}
              Facebook
            </Link>
            <Link to="/" className="flex gap-3 text-blue-600 border-b p-3 ">
              <FaTwitter className="text-4xl bg-gray-300 p-2 rounded-full" />{" "}
              Twitter
            </Link>
            <Link to="/" className="flex gap-3 text-amber-600 border-b p-3 ">
              <FaInstagram className="text-4xl bg-gray-300 p-2 rounded-full" />{" "}
              Instagram
            </Link>
          </div>
        </div>

        {/* Q-zone */}
        <div className="bg-[#F3F3F3] p-4">
          <h3 className="text-lg font-bold mb-4">Q-Zone</h3>
          <img src={qzone1} className="w-full" alt="" />
          <img src={qzone2} className="w-full" alt="" />
          <img src={qzone3} className="w-full" alt="" />
        </div>
        {/* Advertisement Information */}
        <div
          className="mt-10 py-10 px-5 bg-blend-soft-light bg-no-repeat text-center bg-black bg-cover space-y-5"
          style={{ background: `url(${adbg})` }}
        >
          <h2 className="text-4xl text-white font-bold">
            Create an Amazing Newspaper
          </h2>
          <p className="text-lg font-normal text-white">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-secondary rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
