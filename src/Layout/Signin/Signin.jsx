import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import signin from "../../assets/images/login/login.svg";
const Signin = () => {
  const [show, setShow] = useState(false);
  const { userSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");

    userSignin(email, password)
      .then((res) => {
        swal("Cool!", "Successfully Sign in", "success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        swal("Opps!", "Something went wrong, User or password wrong!", "error");
        console.log(error.message);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 items-center">
        <div>
          <img src={signin} alt="" />
        </div>
        <div className="border rounded-3xl shadow-2xl p-16">
          <h2 className="text-3xl text-gray-600 font-semibold text-center">
            Sign in
          </h2>
          <form onSubmit={handleUserLogin}>
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

            <div className="from-control mt-8 text-center">
              <input
                type="submit"
                value="Sign in"
                className="btn btn-wide text-white bg-[#FF3811] hover:text-black"
              />
            </div>
          </form>
          <div className="from-control mt-8 text-center">
            <h2 className="text-xl">Or Sign in with</h2>
            <SocialLogin />
            <p>
              New in this site?{" "}
              <Link to="/signup" className="text-[#FF3811] font-semibold">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
