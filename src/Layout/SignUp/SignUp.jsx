import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import signin from "../../assets/images/login/login.svg";
const SignUp = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 items-center">
        <div>
          <img src={signin} alt="" />
        </div>
        <div className="border rounded-3xl shadow-2xl p-16">
          <h2 className="text-3xl text-gray-600 font-semibold text-center">
            Sign Up
          </h2>

          <div className="from-control mt-5">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="from-control mt-5">
            <label htmlFor="photo" className="label">
              Photo
            </label>
            <input
              type="url"
              name="photo"
              id="photo"
              placeholder="Your Photo Url"
              className="input input-bordered w-full"
            />
          </div>

          <div className="from-control mt-5">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="from-control relative mt-5">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter New Password"
              className="input input-bordered w-full"
            />
            <p
              onClick={() => setShow(!show)}
              className="absolute top-10 border- right-0 text-2xl p-3 bg-gray-500 rounded-r-lg"
            >
              {show ? (
                <AiOutlineEyeInvisible className="text-white" />
              ) : (
                <AiOutlineEye className="text-white" />
              )}
            </p>
          </div>
          <div className="from-control relative mt-5">
            <label htmlFor="confirmpassword" className="label">
              Confirm Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
            <p
              onClick={() => setShow(!show)}
              className="absolute top-10 border- right-0 text-2xl p-3 bg-gray-500 rounded-r-lg"
            >
              {show ? (
                <AiOutlineEyeInvisible className="text-white" />
              ) : (
                <AiOutlineEye className="text-white" />
              )}
            </p>
          </div>
          <div className="from-control mt-8 text-center">
            <input
              type="submit"
              value="Sign up"
              className="btn btn-wide text-white bg-[#FF3811] hover:text-black"
            />
          </div>
          <div className="from-control mt-8 text-center">
            <h2 className="text-xl">Or Sign up with</h2>
            <SocialLogin />
            <p>Already have an account? <Link to="/signin" className="text-[#FF3811] font-semibold">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
