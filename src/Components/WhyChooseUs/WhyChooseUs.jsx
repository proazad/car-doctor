import group from "../../assets/icons/group.svg";
import deliveryt from "../../assets/icons/deliveryt.svg";
import check from "../../assets/icons/check.svg";
import person from "../../assets/icons/person.svg";
import time from "../../assets/icons/Group 38729.svg";
import wrench from "../../assets/icons/Wrench.svg";
const WhyChooseUs = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto ">
        <div className="py-10 text-center w-7/12 mx-auto">
          <h3 className="text-2xl font-bold text-[#FF3811] mb-6">
            Core Features
          </h3>
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
          <p className="text-base font-normal leading-8 mt-8">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-21 lg:grid-cols-6 gap-8">
            <div className="p-5 flex flex-col items-center justify-center border rounded-xl shadow hover:bg-[#FF3811] hover:text-white duration-500">
                <img src={group} alt="" />
                <h2 className="text-lg font-bold">Expert Team</h2>
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4 border rounded-xl shadow hover:bg-[#FF3811] hover:text-white duration-500">
                <img src={time} alt="" />
                <h2 className="text-lg font-bold text-white">Timely Delivery</h2>
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4 border rounded-xl shadow hover:bg-[#FF3811] hover:text-white duration-500">
                <img src={person} alt="" />
                <h2 className="text-lg font-bold">24/7 Support</h2>
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4 border rounded-xl shadow hover:bg-[#FF3811] hover:text-white duration-500">
                <img src={wrench} alt="" />
                <h2 className="text-lg font-bold">Best Equipment</h2>
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4 border rounded-xl shadow hover:bg-[#FF3811] hover:text-white duration-500">
                <img src={check} alt="" />
                <h2 className="text-lg font-bold">100% Guranty</h2>
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4 border rounded-xl shadow hover:bg-[#FF3811] hover:text-white ">
                <img src={deliveryt} alt="" />
                <h2 className="text-lg font-bold">Timely Delivery</h2>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
