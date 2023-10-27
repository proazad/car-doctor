import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import azad from "../../assets/images/azad.jpg";
const TestimonialSection = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto">
        <div className="py-10 text-center w-7/12 mx-auto">
          <h3 className="text-2xl font-bold text-[#FF3811] mb-6">
            Testimonial
          </h3>
          <h2 className="text-5xl font-bold">What Customer Says</h2>
          <p className="text-base font-normal leading-8 mt-8">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-2 first:lg:grid-cols-2 gap-8">
          <div className="p-10 border rounded-xl shadow">
            <div className="flex justify-between mb-5">
              <img
                src={azad}
                alt=""
                className="w-20 h-20 mr-10 rounded-full border border-secondary-focus p-2"
                draggable="false"
              />
              <div className="mr-auto">
                <h2 className="text-2xl font-bold">Azad Hossain</h2>
                <h3 className="text-xl font-semibold text-gray-500">
                  Businessman
                </h3>
              </div>
              <FaQuoteRight className="text-6xl text-red-200" />
            </div>
            <p className="text-base leading-7 font-normal text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="flex mt-5 text-[#FF912C] text-xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </p>
          </div>
          <div className="p-10 border rounded-xl shadow">
            <div className="flex justify-between mb-5">
              <img
                src={azad}
                alt=""
                className="w-20 h-20 mr-10 rounded-full border border-secondary-focus p-2"
                draggable="false"
              />
              <div className="mr-auto">
                <h2 className="text-2xl font-bold">Azad Hossain</h2>
                <h3 className="text-xl font-semibold text-gray-500">
                  Businessman
                </h3>
              </div>
              <FaQuoteRight className="text-6xl text-red-200" />
            </div>
            <p className="text-base leading-7 font-normal text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="flex mt-5 text-[#FF912C] text-xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
