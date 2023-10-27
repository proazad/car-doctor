import aboutusImg2 from "../../assets/images/about_us/parts.jpg";
import aboutusImg from "../../assets/images/about_us/person.jpg";
const AboutUs = () => {
  return (
    <section className="container mx-auto my-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
        <div className="relative">
          <img
            src={aboutusImg}
            alt=""
            className="rounded-xl h-full"
            draggable="false"
          />
          <img
            src={aboutusImg2}
            alt=""
            className="absolute -bottom-20 -right-24 border-8 border-white rounded-xl w-1/2 h-2/3 bg-cover"
            draggable="false"
          />
        </div>
        <div>
          <div className="w-9/12">
            <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
            <h2 className="text-5xl my-10 font-bold leading-[55px]">
              We are qualified <br /> & of experience <br /> in this field
            </h2>
            <p className="text-base font-normal leading-7">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-base font-normal leading-7 my-9">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which do&apos;t look even slightly
              believable.
            </p>

            <button className="btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
