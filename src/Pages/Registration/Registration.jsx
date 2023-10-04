import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = (e) => {
    setShowPass(e);
  };
  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name").trim();
    const photoUrl = form.get("photo").trim();
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    const confirmPassword = form.get("confirmPassword").trim();
    const checkterms = form.get("terms");
    console.log(name, photoUrl,email, password, confirmPassword, checkterms);
}
  return (
    <div className="container mx-auto mb-5">
      <Navbar></Navbar>
      <div className="">
        <h1 className="text-4xl font-semibold my-8 text-center">
          Register your account
        </h1>
        <div className="w-5/12 mx-auto border-t shadow p-10 rounded-md">
          <form onSubmit={handleUserRegister}>
            <div className="form-control">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="enter your name"
                className="input input-primary"
              />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="photo" className="text-lg font-semibold">
                Photo
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                placeholder="enter your photo url"
                className="input input-primary"
              />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email address"
                className="input input-primary"
              />
            </div>

            <div className="form-control mt-5 relative">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
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
            </div>
            <div className="form-control mt-5 relative">
              <label htmlFor="password" className="text-lg font-semibold">
                Confirm Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="re-enter your password address"
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
              
            </div>
            <div className="form-control mt-5">
              
              
              <label htmlFor="terms" className="flex items-center gap-3 text-lg hover:text-primary hover:underline">
              <input
                type="checkbox"
                name="terms"
                id="checkbox"
                className="checkbox checkbox-primary"
              />
                accept our terms & conditions
              </label>
            </div>
            <div className="form-control mt-5">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control mt-5">
              <p>
                Already have an account ?
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
