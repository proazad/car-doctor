import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import img from "../../assets/images/products/6.png";
const ProductCard = () => {
  return (
    <article className="bg-base-100 rounded-xl shadow-lg p-3">
      <img src={img} alt="" className="rounded-lg p-10" draggable="false" />
      <div className="flex flex-col justify-center items-center text-xl font-semibold my-5 gap-4">
        <p className="flex text-[#FF912C]">
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <AiOutlineStar />
        </p>
        <h2 className="text-2xl font-bold">Electrical System</h2>
        <h3 className="text-[#FF3811]">$20.00</h3>
      </div>
    </article>
  );
};

export default ProductCard;
