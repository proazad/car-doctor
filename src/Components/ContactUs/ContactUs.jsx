import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
const ContactUs = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto bg-neutral p-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex items-center justify-center gap-5">
            <SlCalender className="text-3xl text-white" />
            <div>
              <p className="text-base font-medium text-white">
                We are open monday-friday
              </p>
              <h2 className="text-2xl font-bold text-white">
                7:00 am - 9:00 pm
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <BsTelephoneFill className="text-3xl text-white" />
            <div>
              <p className="text-base font-medium text-white">
                Have a question?
              </p>
              <h2 className="text-2xl font-bold text-white">+2546 251 2658</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <ImLocation2 className="text-3xl text-white" />
            <div>
              <p className="text-base font-medium text-white">
                Need a repair? our address
              </p>
              <h2 className="text-2xl font-bold text-white">
                Liza Street, New York
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
