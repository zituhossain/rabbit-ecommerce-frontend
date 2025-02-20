import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useState } from "react";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block bg-black px-2 py-0.5 rounded text-sm text-white"
          >
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white rounded-full px-2 py-0.5 text-xs font-medium">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <HiBars3BottomRight
              onClick={toggleNavDrawer}
              className="h-6 w-6 text-gray-700"
            />
          </div>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2>Menu</h2>
          <nav className="mt-4 space-y-2">
            <Link to="#" className="block text-gray-600 hover:text-black">
              Men
            </Link>
            <Link to="#" className="block text-gray-600 hover:text-black">
              Women
            </Link>
            <Link to="#" className="block text-gray-600 hover:text-black">
              Top Wear
            </Link>
            <Link to="#" className="block text-gray-600 hover:text-black">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
