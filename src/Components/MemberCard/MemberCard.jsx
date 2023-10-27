import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import img from "../../assets/images/team/1.jpg";
const ServiceCard = () => {
  return (
    <article className="bg-base-100 rounded-xl shadow-lg p-3">
      <img src={img} alt="" className="rounded-lg" draggable="false" />
      <div className="flex flex-col justify-between items-center gap-3 my-3">
        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
        <h2 className="text-xl font-bold">Engine Expert</h2>
        <p className="flex gap-3">
          <FaFacebookF className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
