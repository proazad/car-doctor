import bannerImage1 from "../../assets/images/banner/1.jpg";
import bannerImage2 from "../../assets/images/banner/2.jpg";
import bannerImage3 from "../../assets/images/banner/3.jpg";
import bannerImage4 from "../../assets/images/banner/4.jpg";
import bannerImage5 from "../../assets/images/banner/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover grid grid-cols-1 lg:grid-cols-2 py-28 px-20"
            style={{ backgroundImage: `url(${bannerImage1})` }}
          >
            <div className="col-span-2 lg:col-span-1 text-left">
              <h2 className="text-7xl font-bold mb-16 text-white">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg text-white font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <a className="mt-10 btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
                  Appointment
                </a>
                <a className="mt-10 btn border-2 btn-outline text-white text-lg hover:text-black duration-500">
                  Latest Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover grid grid-cols-1 lg:grid-cols-2 py-28 px-20"
            style={{ backgroundImage: `url(${bannerImage2})` }}
          >
            <div className="col-span-2 lg:col-span-1 text-left">
              <h2 className="text-7xl font-bold mb-16 text-white">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg text-white font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <a className="mt-10 btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
                  Appointment
                </a>
                <a className="mt-10 btn border-2 btn-outline text-white text-lg hover:text-black duration-500">
                  Latest Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover grid grid-cols-1 lg:grid-cols-2 py-28 px-20"
            style={{ backgroundImage: `url(${bannerImage3})` }}
          >
            <div className="col-span-2 lg:col-span-1 text-left">
              <h2 className="text-7xl font-bold mb-16 text-white">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg text-white font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <a className="mt-10 btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
                  Appointment
                </a>
                <a className="mt-10 btn border-2 btn-outline text-white text-lg hover:text-black duration-500">
                  Latest Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover grid grid-cols-1 lg:grid-cols-2 py-28 px-20"
            style={{ backgroundImage: `url(${bannerImage4})` }}
          >
            <div className="col-span-2 lg:col-span-1 text-left">
              <h2 className="text-7xl font-bold mb-16 text-white">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg text-white font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <a className="mt-10 btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
                  Appointment
                </a>
                <a className="mt-10 btn border-2 btn-outline text-white text-lg hover:text-black duration-500">
                  Latest Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover grid grid-cols-1 lg:grid-cols-2 py-28 px-20"
            style={{ backgroundImage: `url(${bannerImage5})` }}
          >
            <div className="col-span-2 lg:col-span-1 text-left">
              <h2 className="text-7xl font-bold mb-16 text-white">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg text-white font-normal">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <a className="mt-10 btn border-none text-white bg-carshop text-lg hover:text-black duration-500">
                  Appointment
                </a>
                <a className="mt-10 btn border-2 btn-outline text-white text-lg hover:text-black duration-500">
                  Latest Project
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
