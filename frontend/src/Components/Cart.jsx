import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item?.price / 100 || item?.defaultPrice / 100),
    0
  );

  const deliveryFee = 20;
  const gst = +(totalPrice * 0.05).toFixed(2);
  const toPay = +(totalPrice + deliveryFee + gst).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pb-25">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.-1eBnVumaQuojxQ-D5GPiQHaHo?pid=Api&P=0&h=180"
          alt="empty cart"
          className="w-36 h-36 sm:w-48 sm:h-48 object-contain"
        />
        <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-sm mt-1 text-center">
          You can go to home page to view more restaurants
        </p>
        <Link
          to="/"
          className="mt-5 px-5 py-3 bg-orange-500 text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded"
        >
          See Restaurants Near You
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20">

      {/* Header */}
    

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col lg:flex-row gap-4 sm:gap-6">

        {/* LEFT — Delivery Address */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-2-fill text-white text-sm"></i>
              </div>
              <div>
                <h2 className="font-bold text-sm sm:text-base">
                  Choose a delivery address
                </h2>
                <p className="text-gray-500 text-xs">Select where to deliver</p>
              </div>
            </div>

            {/* Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Home", "Work", "Other"].map((label, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 cursor-pointer hover:border-orange-400 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`ri-${label === "Home" ? "home" : label === "Work" ? "building" : "map-pin"}-line text-gray-600 text-sm`}></i>
                    <span className="font-semibold text-sm">{label}</span>
                  </div>
                  <p className="text-gray-500 text-xs">Itarsi, Madhya Pradesh, India</p>
                  <p className="text-gray-400 text-xs mt-1">25 MINS</p>
                  <button className="mt-3 w-full py-2 bg-orange-500 text-white text-xs font-bold rounded tracking-wide">
                    DELIVER HERE
                  </button>
                </div>
              ))}

              {/* Add New */}
              <div className="border border-dashed border-gray-300 rounded-lg p-3 sm:p-4 cursor-pointer hover:border-orange-400 transition flex flex-col items-center justify-center gap-2 min-h-[120px]">
                <i className="ri-map-pin-add-line text-gray-400 text-xl"></i>
                <span className="text-sm font-semibold text-gray-500">Add New Address</span>
                <button className="mt-1 px-4 py-2 border border-green-500 text-green-600 text-xs font-bold rounded tracking-wide hover:bg-green-50 transition">
                  ADD NEW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Order Summary */}
        {/* Mobile: full width, Desktop: fixed 320px */}
        <div className="w-full lg:w-[320px] lg:flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4">

            {/* Restaurant */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-orange-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-restaurant-2-line text-orange-500 text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm">Your Order</h3>
                <p className="text-gray-400 text-xs">{cartItems.length} item(s)</p>
              </div>
            </div>

            {/* Items */}
            <div className="mt-3 space-y-3">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  {/* Veg dot */}
                  <div className="w-3 h-3 border border-green-600 flex items-center justify-center rounded-sm flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>

                  {/* Name — truncate long names */}
                  <span className="text-xs sm:text-sm flex-1 text-gray-700 truncate">
                    {item?.name}
                  </span>

                  {/* Qty buttons */}
                  <div className="flex items-center border border-green-500 rounded flex-shrink-0">
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="text-green-600 font-bold text-sm px-1.5 py-0.5"
                    >−</button>
                    <span className="text-xs font-semibold text-green-600 px-1">1</span>
                    <button className="text-green-600 font-bold text-sm px-1.5 py-0.5">+</button>
                  </div>

                  {/* Price */}
                  <span className="text-xs sm:text-sm font-medium flex-shrink-0 w-10 text-right">
                    ₹{item?.price / 100 || item?.defaultPrice / 100}
                  </span>
                </div>
              ))}
            </div>

            {/* Coupon */}
            <div className="mt-4 border border-dashed border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
              <i className="ri-coupon-line text-gray-400"></i>
              <span className="text-sm text-gray-500">Apply Coupon</span>
            </div>

            {/* Bill Details */}
            <div className="mt-4">
              <h4 className="font-bold text-sm mb-2">Bill Details</h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee | 2.1 kms</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Other Charges</span>
                  <span>₹{gst}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mt-1 text-sm">
                  <span>TO PAY</span>
                  <span>₹{toPay}</span>
                </div>
              </div>
            </div>

            {/* Clear Cart */}
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 w-full py-2 border border-red-400 text-red-500 text-xs font-semibold rounded hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;