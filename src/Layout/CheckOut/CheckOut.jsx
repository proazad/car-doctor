import checkout from "../../assets/images/checkout/checkout.png";
const CheckOut = () => {
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
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="fName" className="label">
                First Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
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
                placeholder="Last Name"
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
                placeholder="Your Email"
                className="input input-bordered"
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
            ></textarea>
          </div>
          <div className="form-control mt-5">
            <input type="submit" value="Order Confirm" className="btn duration-500 w-full bg-[#FF3811] hover:bg-black text-white" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
