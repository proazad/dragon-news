import { NavLink } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/" className="text-lg font-normal">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-lg font-normal">About</NavLink>
      </li>
      <li>
        <NavLink to="/carrer" className="text-lg font-normal">Carrer</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="rounded-full border">
            <FcBusinessman className="text-4xl" />
          </div>
        </label>
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
