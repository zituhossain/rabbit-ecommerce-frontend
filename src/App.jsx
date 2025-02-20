import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import MyOrders from "./pages/MyOrders";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHome from "./pages/AdminHome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/all" element={<Collection />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="my-orders" element={<MyOrders />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
