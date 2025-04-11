import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import Navbar from "./Navbar"; // Import Navbar component

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItems);

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        {/* Logo Section */}
        <Link to={""}>
          <div className="flex max-w-4xl mx-auto">
            <img src={logo} className="rounded-full h-20" alt="Logo" />
            <h2 className="font-bold text-2xl dark:text-red-700 p-4 hidden md:flex">
              Pastry Haven
            </h2>
          </div>
        </Link>

        {/* Navbar Component */}
        <Navbar />

        {/* Cart and User Profile Section */}
        <div className="flex items-center gap-4 md:gap-7">
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className="text-slate-600">
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" alt="User" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {/* Logout/Login Options */}
            {userData.image && (
              <p
                className="cursor-pointer text-white px-2 bg-red-500 mt-2 text-center"
                onClick={handleLogout}
              >
                Logout ({userData.firstName})
              </p>
            )}
            {!userData.image && (
              <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 mt-2 text-center block">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
