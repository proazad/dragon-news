import moment from "moment/moment";
import logo from "../../../public/logo.png";

const HeaderTop = () => {
  return (
    <div className=" my-5 flex flex-col justify-center items-center gap-5">
      <img src={logo} alt="The Dragon News" />
      <div className="space-y-3 text-center"><h2 className="text-lg font-normal text-gray-600">
        Journalism Without Fear or Favour
      </h2>
      <h2 className="text-xl font-medium text-gray-600">
        {moment().format("dddd, MMMM d, YYYY")}
      </h2></div>
    </div>
  );
};

export default HeaderTop;
