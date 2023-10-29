import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import signin from "../../assets/images/login/login.svg";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateFirebaseProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUserRegistration = (event) => {
    event.preventDefault();
    const regex = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/;
    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const confirmpassword = form.get("confirmpassword");
    const user = { name, photo, email, password, confirmpassword };
    if (password < 6) {
      return swal("Opps!", "Password must be 6 digit logn or Higher", "error");
    } else if (!/[A-Z]/.test(password)) {
      return swal("Opps!", "Password must be at Uppercase Letter", "error");
    } else if (!regex.test(password)) {
      return swal(
        "Opps!",
        "Password must be Contain special Character",
        "error"
      );
    } else if (password !== confirmpassword) {
      return swal("Opps!", "Must be password same", "error");
    } else {
      createUser(email, password)
        .then((res) => {
          updateFirebaseProfile(name, photo);
          swal("Wow!", "Wow Successfully User Created!", "success");
          console.log(res);
          navigate("/");
        })
        .catch((error) => {
          swal("Opps!", "Something went wrong!", "error");
          console.log(error.message);
        });
    }
  };
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

          <form onSubmit={handleUserRegistration}>
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
                required
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
                required
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
                required
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
                required
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
                required
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
          </form>

          <div className="from-control mt-8 text-center">
            <h2 className="text-xl">Or Sign up with</h2>
            <SocialLogin />
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="text-[#FF3811] font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
