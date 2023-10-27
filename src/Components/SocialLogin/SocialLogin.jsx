import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex gap-3 items-center justify-center my-5">
      <FcGoogle className="text-3xl cursor-pointer" />
      <FaFacebook className="text-3xl text-blue-600 cursor-pointer" />
      <FaGithub className="text-3xl cursor-pointer" />
      <FaLinkedin className="text-3xl cursor-pointer" />
    </div>
  );
};

export default SocialLogin;
