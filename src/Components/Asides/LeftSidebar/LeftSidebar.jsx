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
    <div className="px-4">
      <h2 className="text-xl font-bold text-gray-600">All Category</h2>
      <div className="mt-5">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className="px-5 py-3 text-xl text-[#9F9F9F] font-semibold hover:bg-gray-300"
            >
              <NavLink className="">{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>


      <div className="my-8">
        <img src={img1} alt="" />
        <h2 className="text-xl font-bold text-[#403F3F] my-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-5 items-center mt-5">
          <span className="text-[#403F3F] text-base font-medium">Sports</span>
          <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
            <BsCalendar4 />
            {moment().format("MMM DD, YYYY")}
          </span>
        </div>
      </div>

      <div className="my-8">
        <img src={img2} alt="" />
        <h2 className="text-xl font-bold text-[#403F3F] my-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-5 items-center mt-5">
          <span className="text-[#403F3F] text-base font-medium">Sports</span>
          <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
            <BsCalendar4 />
            {moment().format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <div className="my-8">
        <img src={img3} alt="" />
        <h2 className="text-xl font-bold text-[#403F3F] my-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-5 items-center mt-5">
          <span className="text-[#403F3F] text-base font-medium">Sports</span>
          <span className="flex gap-3 items-center text-[#9F9F9F] text-base font-medium">
            <BsCalendar4 />
            {moment().format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
