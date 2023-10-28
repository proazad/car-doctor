import checkout from "../../assets/images/checkout/checkout.png";
const AddNewService = () => {
  return (
    <div className="container mx-auto my-10">
      <div
        className="bg-cover rounded-xl p-20"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <h2 className="text-4xl text-white font-bold">Add New Service</h2>
        <div className="text-center">
          <p className="bg-[#FF3811] inline-block py-2 px-5 font-semibold text-xl text-white">
            Home/AddNewService
          </p>
        </div>
      </div>
      <div className="bg-rose-100 px-28 py-20 my-10 rounded-xl">
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="sname" className="label">
                Service Name
              </label>
              <input
                type="text"
                name="sname"
                id="sname"
                placeholder="Service Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="sprice" className="label">
                Service Price
              </label>
              <input
                type="text"
                name="sprice"
                id="sprice"
                placeholder="Service Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="form-control">
              <label htmlFor="text" className="label">
               Text Here
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Text Here"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="stype" className="label">
                Service Type
              </label>
              <input
                type="text"
                name="stype"
                id="stype"
                placeholder="Service Type"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="description" className="label">
              Product Description
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="form-control mt-5">
            <input type="submit" value="Submit" className="btn duration-500 w-full bg-[#FF3811] hover:bg-black text-white" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
