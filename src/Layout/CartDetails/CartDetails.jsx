import { RxCross2 } from "react-icons/rx";
import checkout from "../../assets/images/checkout/checkout.png";
import product from "../../assets/images/products/1.png";
const CartDetails = () => {
  return (
    <div className="container mx-auto my-10">
      <div
        className="bg-cover rounded-xl p-20"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <h2 className="text-4xl text-white font-bold">Cart Details</h2>
        <p className="text-[#FF3811] text-xl">Home/Cart Details</p>
      </div>
      <div className=" px-28 py-20 my-10 rounded-xl space-y-5">
        <div className="flex justify-between">
          <RxCross2 className="cursor-pointer bg-gray-600 rounded-full text-3xl text-white p-1" />
          <img src={product} className="w-16 rounded-xl" alt="" draggable="false" />
          <div>
            <h4 className="text-base font-medium">Martha Knit Top</h4>
            <p className="text-sm">Color : Green</p>
            <p className="text-sm">Size : S</p>
          </div>
          <p className="text-base font-medium">$20.00</p>
          <p className="text-base font-medium">22-10-2023</p>
          <button className="btn bg-[#FF3811] text-white hover:text-black duration-500 btn-sm ">
            Pending
          </button>
        </div>
        <div className="flex justify-between">
          <RxCross2 className="cursor-pointer bg-gray-600 rounded-full text-3xl text-white p-1" />
          <img src={product} className="w-16 rounded-xl" alt="" draggable="false" />
          <div>
            <h4 className="text-base font-medium">Martha Knit Top</h4>
            <p className="text-sm">Color : Green</p>
            <p className="text-sm">Size : S</p>
          </div>
          <p className="text-base font-medium">$20.00</p>
          <p className="text-base font-medium">22-10-2023</p>
          <button className="btn bg-[#FF3811] text-white hover:text-black duration-500 btn-sm ">
            Pending
          </button>
        </div>
        <div className="flex justify-between">
          <RxCross2 className="cursor-pointer bg-gray-600 rounded-full text-3xl text-white p-1" />
          <img src={product} className="w-16 rounded-xl" alt="" draggable="false" />
          <div>
            <h4 className="text-base font-medium">Martha Knit Top</h4>
            <p className="text-sm">Color : Green</p>
            <p className="text-sm">Size : S</p>
          </div>
          <p className="text-base font-medium">$20.00</p>
          <p className="text-base font-medium">22-10-2023</p>
          <button className="btn bg-[#FF3811] text-white hover:text-black duration-500 btn-sm ">
            Pending
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
