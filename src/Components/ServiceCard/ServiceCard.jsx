import { Link } from "react-router-dom";
import img from "../../assets/images/services/1.jpg";
import { BsArrowRightShort } from "react-icons/bs";
const ServiceCard = () => {
  const _id = 1;
  return (
    <article className="bg-base-100 rounded-xl shadow-lg p-3">
      <img src={img} alt="" className="rounded-lg" draggable="false" />
      <h2 className="text-2xl font-bold my-5">Electrical System</h2>
      <div className="flex justify-between items-center text-[#FF3811] text-xl font-semibold">
        <h3 className="mb-4">Price: $20.00</h3>
        <Link to={`/services/${_id}`}>
          <BsArrowRightShort className="text-4xl"/>
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
