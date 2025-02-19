import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>

      {/* Checkout Button */}
      <div className="p-4 sticky bottom-0 bg-white">
        <button
          onClick={handleCheckout}
          className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes and discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};
CartDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleCartDrawer: PropTypes.func.isRequired,
};

export default CartDrawer;
