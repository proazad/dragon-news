import Marquee from "react-fast-marquee";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex gap-3 my-10 items-center justify-center bg-[#F3F3F3] py-2 px-4">
      <p className="py-2 text-xl font-medium px-5 text-white bg-[#D72050] rounded-none">
        Latest
      </p>
      <Marquee pauseOnHover="true">
        <div className="flex items-center gap-3">
          <FcAdvertising className="text-3xl" />
          <Link
            to="/"
            className="mr-5 text-[#403F3F] font-semibold text-lg hover:text-blue-600 duration-300"
          >
            I can be a React component, multiple React components...
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FcAdvertising className="text-3xl" />
          <Link
            to="/"
            className="mr-5 text-[#403F3F] font-semibold text-lg hover:text-blue-600 duration-300"
          >
            I can be a React component, multiple React components...
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FcAdvertising className="text-3xl" />
          <Link
            to="/"
            className="mr-5 text-[#403F3F] font-semibold text-lg hover:text-blue-600 duration-300"
          >
            I can be a React component, multiple React components...
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FcAdvertising className="text-3xl" />
          <Link
            to="/"
            className="mr-5 text-[#403F3F] font-semibold text-lg hover:text-blue-600 duration-300"
          >
            I can be a React component, multiple React components...
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
