import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import moment from "moment/moment";
import { BsCalendar4 } from "react-icons/bs";
const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="px-2 lg:px-4">
      <div className="sticky top-2">
        <h2 className="text-xl font-bold text-gray-600">All Category</h2>
        <div className="mt-5">
          <ul className="flex flex-row lg:flex-col flex-wrap justify-center lg:justify-start">
            {categories.map((category) => (
              <li
                key={category.id}
                className="px-3 lg:px-5 py-2 lg:py-3 text-xl text-[#9F9F9F] font-medium lg:font-semibold hover:bg-gray-300"
              >
                <NavLink className="">{category.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-8 hidden lg:block">
          <div className="">
            <img src={img1} alt="thumbnail" className="w-full" />
            <h2 className="text-xl font-bold text-[#403F3F] my-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-5 items-center mt-5">
              <span className="text-[#403F3F] text-base font-medium">
                Sports
              </span>
              <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
                <BsCalendar4 />
                {moment().format("MMM DD, YYYY")}
              </span>
            </div>
          </div>

          <div className="my-8">
            <img src={img2} alt="thumbnail" className="w-full" />
            <h2 className="text-xl font-bold text-[#403F3F] my-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-5 items-center mt-5">
              <span className="text-[#403F3F] text-base font-medium">
                Sports
              </span>
              <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
                <BsCalendar4 />
                {moment().format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <div className="my-8">
            <img src={img3} alt="thumbnail" className="w-full" />
            <h2 className="text-xl font-bold text-[#403F3F] my-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-5 items-center mt-5">
              <span className="text-[#403F3F] text-base font-medium">
                Sports
              </span>
              <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
                <BsCalendar4 />
                {moment().format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
