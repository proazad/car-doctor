import { createBrowserRouter } from "react-router-dom";
import AddNewService from "../Layout/AddNewService/AddNewService";
import CartDetails from "../Layout/CartDetails/CartDetails";
import CheckOut from "../Layout/CheckOut/CheckOut";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import Root from "../Layout/Root/Root";
import SignUp from "../Layout/SignUp/SignUp";
import Signin from "../Layout/Signin/Signin";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addnewservice",
        element: (
          <PrivateRoute>
            <AddNewService />
          </PrivateRoute>
        ),
      },
      {
        path: "/cartdetails",
        element: (
          <PrivateRoute>
            <CartDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/bookings"),
      },
    ],
  },
]);

export default Router;
