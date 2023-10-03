import moment from "moment";
import {
  BsBookmark,
  BsFillEyeFill,
  BsFillStarFill,
  BsShare,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SingleNews = ({ singleNews }) => {
  const { title, total_view,image_url, details,author} = singleNews;
  const short_details = details.slice(0,250);
  const {name, published_date, img} = author;
  return (
    <div className="my-5 border rounded-md">
      <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
        <div className="flex gap-5">
          <img src={img} className="w-12 rounded-full" alt={name} />
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              {name}
            </h3>
            <h5 className="text-sm font-normal text-gray-600">
              {published_date}
            </h5>
          </div>
        </div>
        <div className="flex gap-5 text-xl">
          <BsBookmark></BsBookmark>
          <BsShare></BsShare>
        </div>
      </div>
      <div className="px-5 my-5">
        <h2 className="text-xl font-bold text-gray-700">
          {title}
        </h2>
      </div>
      <div className="p-5">
        <img src={image_url} className="rounded-md" alt="" />
      </div>
      <div className="p-5">
        <p className="text-base font-normal">
          {short_details}.....
          <Link to="/" className="text-warning font-semibold hover:underline">
            Read More
          </Link>
        </p>
      </div>
      <div className="p-5">
        <div className="border-t pt-4 flex justify-between items-center">
          <div className="flex gap-1 text-xl">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <span className="text-gray-500 ml-2">4.99</span>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-600">
            <BsFillEyeFill></BsFillEyeFill>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
SingleNews.propTypes = {
  singleNews: PropTypes.object,
};
