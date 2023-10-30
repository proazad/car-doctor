import { FacebookAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithFacebook, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        console.log(user, credential, accessToken);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(
          "Error Code",
          errorCode,
          "Error Message:",
          errorMessage,
          email,
          credential
        );
      });
  };
  const handleGithubLogin = () => {
    return swal("Sorry!", "Github Login not available!", "error");
  };
  const handleLinkedinLogin = () => {
    return swal("Sorry!", "Linkedin Login not available!", "error");
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        swal("Congrates!", "Congrate successfully Login!", "success");
        navigate(location?.state ? location?.state : "/" );
      })
      .catch(() => {
        return swal("Sorry!", "Something went wrong!", "error");
      });
  };
  return (
    <div className="flex gap-3 items-center justify-center my-5">
      <FcGoogle
        onClick={handleGoogleLogin}
        className="text-3xl cursor-pointer"
      />
      <FaFacebook
        onClick={handleFacebookLogin}
        className="text-3xl text-blue-600 cursor-pointer"
      />
      <FaGithub
        onClick={handleGithubLogin}
        className="text-3xl cursor-pointer"
      />
      <FaLinkedin
        onClick={handleLinkedinLogin}
        className="text-3xl cursor-pointer"
      />
    </div>
  );
};

export default SocialLogin;
