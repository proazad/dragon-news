import moment from "moment/moment";
import logo from "../../../public/logo.png";

const HeaderTop = () => {
  return (
    <div className="my-3 flex flex-col justify-center items-center gap-2">
      <img src={logo} alt="The Dragon News" draggable="false" />
      <div className="space-y-1 text-center">
        <h2 className="text-lg font-normal text-gray-600">
          Journalism Without Fear or Favour
        </h2>
        <h2 className="text-xl font-medium text-gray-600">
          {moment().format("dddd, MMMM DD, YYYY")}
        </h2>
      </div>
    </div>
  );
};

export default HeaderTop;
