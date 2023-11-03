import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiFillCheckCircle } from "react-icons/ai";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import checkout from "../../assets/images/checkout/checkout.png";
const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBookings(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);
  const handleDeleteBooking = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Bookings",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/bookings/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remainBookings = bookings.filter(
                (booking) => booking._id !== id
              );
              swal("Poof! Your Bookings has been deleted!", {
                icon: "success",
              });
              setBookings(remainBookings);
            }
          })
          .catch((error) => {
            swal(`Opps! something went wrong! ${error.message}`, {
              icon: "error",
            });
          });
      } else {
        swal("Your Booking file is safe!");
      }
    });
  };
  const handleBookingConfirm = (id) => {
    axios
      .patch(`http://localhost:5000/bookings/${id}`, { status: "confirm" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const remainbookings = bookings?.filter(
            (booking) => booking._id !== id
          );
          const updatebookings = bookings?.find(
            (booking) => booking._id === id
          );
          updatebookings.status = "confirm";
          const newBookings = [updatebookings, ...remainbookings];
          setBookings(newBookings);
          swal("cool!", "Booking Updated", "success");
        }
      })
      .catch((error) => {
        swal("Opps!", `something went wrong! ${error.message}`, "error");
      });
  };
  return (
    <div className="container mx-auto my-10">
      <div
        className="bg-cover rounded-xl p-20"
        style={{ backgroundImage: `url(${checkout})` }}
      >
        <h2 className="text-4xl text-white font-bold">Cart Details</h2>
        <p className="text-[#FF3811] text-xl">Home/Cart Details</p>
      </div>
      <div className=" px-28 py-20 my-10 rounded-xl space-y-5">
        {bookings.length == 0 && (
          <p className="text-2xl text-center text-info">
            Booking Cart is empty!
          </p>
        )}
        {bookings?.map((booking) => (
          <div key={booking._id} className="flex justify-between">
            {booking?.status === "confirm" ? (
              <AiFillCheckCircle className="bg-green-600 rounded-full text-3xl text-white p-1" />
            ) : (
              <RxCross2
                onClick={() => handleDeleteBooking(booking._id)}
                className="cursor-pointer bg-[#FF3811] rounded-full text-3xl text-white p-1"
              />
            )}
            <img
              src={booking.img}
              className="w-16 rounded-xl"
              alt=""
              draggable="false"
            />
            <div>
              <h4 className="text-base font-medium">{booking.service}</h4>
              <p className="text-sm">Color : Green</p>
              <p className="text-sm">Size : S</p>
            </div>
            <p className="text-base font-medium">${booking.dueAmount}</p>
            <p className="text-base font-medium">{booking.date}</p>
            {booking?.status === "confirm" ? (
              <span className="text-success font-bold">Confirmed</span>
            ) : (
              <button
                onClick={() => handleBookingConfirm(booking._id)}
                className="btn bg-[#FF3811] text-white hover:text-black duration-500 btn-sm "
              >
                Please Confirm
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDetails;
