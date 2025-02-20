const checkout = {
  _id: "123456",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      quantity: 2,
      price: 100,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Sneakers",
      color: "White",
      size: "43",
      quantity: 2,
      price: 200,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
const OrderConfirmation = () => {
  const calculateEstDelivery = (date) => {
    const orderDate = new Date(date);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString("en-GB");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-4">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-20">
            {/* Order Id & Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date:{" "}
                {new Date(checkout.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery: {calculateEstDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-[16px] font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[16px]">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
