import CartDrawer from "../Layout/CartDrawer";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
      <CartDrawer />
    </header>
  );
};

export default Header;
