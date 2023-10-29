import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <article className="bg-base-100 rounded-xl shadow-lg p-3">
      <img
        src={img}
        alt=""
        className="rounded-lg h-64 w-full"
        draggable="false"
      />
      <h2 className="text-2xl font-bold my-5">{title}</h2>
      <div className="flex justify-between items-center text-[#FF3811] text-xl font-semibold">
        <h3 className="mb-4">Price: ${price}</h3>
        <Link to={`/checkout/${_id}`}>
          <BsArrowRightShort className="text-4xl" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object,
};
