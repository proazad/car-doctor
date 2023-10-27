import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {BsHandbag,BsSearch} from "react-icons/bs"
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link className="navlink" to="/">Home</Link>
      </li>
      <li>
        <Link className="navlink" to="/about">About</Link>
      </li>
      <li>
        <Link className="navlink" to="/services">Services</Link>
      </li>
      <li>
        <Link className="navlink" to="/blog">Blog</Link>
      </li>
      <li>
        <Link className="navlink" to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="navlink" to="/signin">Signin</Link>
      </li>
      <li>
        <Link className="navlink" to="/signup">Signup</Link>
      </li>
    </>
  );
  return (
    <nav className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navlinks}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <p className="flex gap-5 justify-center items-center mr-8 text-xl">
          <BsHandbag className="cursor-pointer"/>
          <BsSearch className="cursor-pointer"/>
        </p>
        <a className="btn border-2 btn-outline border-carshop text-carshop text-lg">Appointment</a>
      </div>
    </nav>
  );
};

export default Navbar;
