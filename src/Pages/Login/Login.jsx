import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = (e) => {
    setShowPass(e);
  };
const handleUserLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    console.log(email, password);
}
  return (
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="">
          <h1 className="text-4xl font-semibold my-8 text-center">
            Login your account
          </h1>
          <div className="w-5/12 mx-auto border-t p-5 shadow py-10 rounded-md">
            <form onSubmit={handleUserLogin}>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email address"
                  className="input input-primary"
                />
              </div>
              <div className="form-control mt-5 relative">
                <label htmlFor="password">Password</label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="enter your password address"
                  className="input input-primary"
                />
                <p
                  onClick={() => showPassword(!showPass)}
                  className="absolute right-2 top-9 block cursor-pointer"
                >
                  {showPass ? (
                    <AiOutlineEye className="text-2xl" />
                  ) : (
                    <AiOutlineEyeInvisible className="text-2xl" />
                  )}
                </p>
                <Link
                  to="/forgotPassword"
                  className="text-primary hover:text-info"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-primary">Log in</button>
              </div>
              <div className="form-control mt-5">
                <p>
                  Don &apos; have an account ?
                  <Link to="/register" className="text-primary font-medium hover:underline">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
