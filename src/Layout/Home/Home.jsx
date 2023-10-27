import AboutUs from "../../Components/AboutUs/AboutUs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import HomeServices from "../../Components/HomeServices/HomeServices";
import TeamMember from "../../Components/TeamMember/TeamMember";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <AboutUs />
      <HomeServices />
      <ContactUs />
      <HomeProducts />
      <TeamMember />
      <WhyChooseUs />
      <TestimonialSection/>
    </>
  );
};

export default Home;
