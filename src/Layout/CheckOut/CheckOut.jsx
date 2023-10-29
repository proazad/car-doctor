import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import checkout from "../../assets/images/checkout/checkout.png";
import axios from "axios";
import swal from "sweetalert";
const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();
  const name = user.displayName.split(" ");
  const { title, _id, price, img } = service;
  const hanldeOrderBooking = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const fname = form.get("fName");
    const lname = form.get("lName");
    const name = fname + " " + lname;
    const phone = form.get("phone");
    const email = form.get("email");
    const date = form.get("date");
    const dueAmount = form.get("dueAmount");
    const message = form.get("message");
    const booking = {
      customerName: name,
      phone,
      email,
      date,
      dueAmount,
      message,
      serviceId: _id,
      img,
      service: title,
    };

    axios
      .post("http://localhost:5000/bookings", booking)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Cool!", "Booking Confirm", "success");
          navigate("/");
        }
      })
      .catch((error) => {
        swal(
          "Opps!",
          `Something went wrong try again ${error.message}`,
          "error"
        );
      });
  };
  return (
    <div className="container mx-auto my-10">
      <div
        className="bg-cover rounded-xl p-20"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <h2 className="text-4xl text-white font-bold">Check Out</h2>
        <div className="text-center">
          <p className="bg-[#FF3811] inline-block py-2 px-5 font-semibold text-xl text-white">
            Home/Checkout
          </p>
        </div>
      </div>
      <div className="bg-rose-100 px-28 py-20 my-10 rounded-xl">
        <form onSubmit={hanldeOrderBooking}>
          <h2 className="text-center text-2xl font-semibold mb-5">{title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="fName" className="label">
                First Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                defaultValue={name[0]}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lName" className="label">
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                defaultValue={name[1]}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="phone" className="label">
                Your Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user.email}
                className="input input-bordered"
                readOnly
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="date" className="label">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="due" className="label">
                Due
              </label>
              <input
                type="text"
                name="dueAmount"
                id="due"
                defaultValue={`${price}`}
                className="input input-bordered"
                placeholder="Due Ammount"
              />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="message" className="label">
              Your Message
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div className="form-control mt-5">
            <input
              type="submit"
              value="Order Confirm"
              className="btn duration-500 w-full bg-[#FF3811] hover:bg-black text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
CheckOut.propTypes = {
  service: PropTypes.object,
};
