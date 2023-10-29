import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeServices = () => {
  const [services, setServics] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setServics(res.data);
    });
  }, []);
  return (
    <section className="bg-base-200 pb-10">
      <div className="container mx-auto my-24">
        <div className="py-10 text-center w-7/12 mx-auto">
          <h3 className="text-2xl font-bold text-[#FF3811] mb-6">Service</h3>
          <h2 className="text-5xl font-bold">Our Service Area</h2>
          <p className="text-base font-normal leading-8 mt-8">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <a className="mt-10 btn border-2 btn-outline outline-[#FF3811] text-[#FF3811] text-lg hover:text-white duration-500">
            More Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
