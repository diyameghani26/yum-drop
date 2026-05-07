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
    <div className="min-h-screen bg-gray-100 pb-20 md:pb-10">

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col lg:flex-row gap-4 sm:gap-6">

        {/* LEFT — Delivery Address */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-15">

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-2-fill text-white text-sm md:text-base"></i>
              </div>
              <div>
                <h2 className="font-bold text-sm sm:text-base md:text-2xl">
                  Choose a delivery address
                </h2>
                <p className="text-gray-500 text-xs md:text-xl">Select where to deliver</p>
              </div>
            </div>

            {/* Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              {["Home", "Work", "Other"].map((label, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 cursor-pointer hover:border-orange-400 transition"
                >
                  <div className="flex items-center gap-2 mb-1 md:mb-4 ">
                    <i className={`ri-${label === "Home" ? "home" : label === "Work" ? "building" : "map-pin"}-line text-gray-600 text-sm md:text-4xl`}></i>
                    <span className="font-semibold text-sm md:text-base">{label}</span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-xl">Itarsi, Madhya Pradesh, India</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-1">25 MINS</p>
                  <button className="mt-3 w-full py-2 md:py-3 bg-orange-500 text-white text-xs md:text-sm font-bold rounded tracking-wide">
                    DELIVER HERE
                  </button>
                </div>
              ))}

              {/* Add New */}
              <div className="border border-dashed border-gray-300 rounded-lg p-3 sm:p-4 md:p-5 cursor-pointer hover:border-orange-400 transition flex flex-col items-center justify-center gap-2 min-h-[120px] md:min-h-[150px]">
                <i className="ri-map-pin-add-line text-gray-400 text-xl md:text-2xl"></i>
                <span className="text-sm md:text-base font-semibold text-gray-500">Add New Address</span>
                <button className="mt-1 px-4 py-2 md:px-5 md:py-2.5 border border-green-500 text-green-600 text-xs md:text-sm font-bold rounded tracking-wide hover:bg-green-50 transition">
                  ADD NEW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="w-full lg:w-[380px] xl:w-[420px] lg:flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-9">

            {/* Restaurant */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-md bg-orange-100 flex items-center justify-center flex-shrink-0">
                <i className="ri-restaurant-2-line text-orange-500 text-lg md:text-2xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-2xl">Your Order</h3>
                <p className="text-gray-400 text-xs md:text-xl">{cartItems.length} item(s)</p>
              </div>
            </div>

            {/* Items */}
            <div className="mt-3 space-y-3 md:space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">

                  {/* Veg dot */}
                  <div className="w-3 h-3 md:w-6 md:h-6 border border-green-600 flex items-center justify-center rounded-sm flex-shrink-0">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-600 rounded-full"></div>
                  </div>

                  {/* Name */}
                  <span className="text-xs sm:text-sm md:text-xl flex-1 text-gray-700 truncate">
                    {item?.name}
                  </span>

                  {/* Qty buttons */}
                  <div className="flex items-center border border-green-500 rounded md:mt-3 shrink-0">
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="text-green-600 font-bold text-sm md:text-xl px-1.5 md:px-2 py-1"
                    >−</button>
                    <span className="text-xs md:text-xl font-semibold text-green-600 px-1 md:px-2">1</span>
                    <button className="text-green-600 font-bold text-sm md:text-xl px-1.5 md:px-2 py-0.5">+</button>
                  </div>

                  {/* Price */}
                  <span className="text-xs sm:text-sm md:text-xl font-medium shrink-0 w-12 text-right">
                    ₹{item?.price / 100 || item?.defaultPrice / 100}
                  </span>
                </div>
              ))}
            </div>

            {/* Coupon */}
            <div className="mt-4 md:mt-7 border border-dashed border-gray-300 rounded-lg px-3 py-2 md:px-5 md:py-4 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
              <i className="ri-coupon-line text-gray-400 md:text-lg"></i>
              <span className="text-sm md:text-xl text-gray-500">Apply Coupon</span>
            </div>

            {/* Bill Details */}
            <div className="mt-4 md:mt-7">
              <h4 className="font-bold text-sm md:text-xl mb-2 md:mb-3">Bill Details</h4>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm md:text-xl text-gray-600">
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
                <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mt-1 md:mt-5 text-sm md:text-xl">
                  <span>TO PAY</span>
                  <span>₹{toPay}</span>
                </div>
              </div>
            </div>

            {/* Clear Cart */}
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 md:mt-26 w-full py-2 md:py-3 border border-red-400 text-red-500 text-xs md:text-xl font-semibold rounded hover:bg-red-50 transition"
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


// interview que ->>


// do this -

// const cartItems = useSelector((store) =>store.cart.items);(in this u r subscribing to the selected portion of the store)


// never do this -

// const store = useSelector((store)=>(store));
// const cartItems = store.cart.items;

// always subscribe to the small portion of the store
//  which is needed not the whole store



// in the older or vanilla redux it was prohibited to mutate the state like this 
// state.items.push(action.payload); (DON'T MUTATE THE STATE)

// instead of this they do => 
// const newState = [...state]; 
//  newstate.items.push(action.payload);   
// return newState 


// in redux toolkit we can and  have to mutate the state AND NO NEED TO RETURN REDUX TAKE CARE OF IT AUTOMATICALLY .

//  AS WE MUTATE IN REDUX TOOLKIT BUT BEHIND THE SCENS REDUX IS STILL WORKING AS VANILLA REDUX BUT ITS NOT ASKING DEVELOPERS TO DO IT .
//  ITS STILL WORKING SAME WAY AS THIS -> 
// // const newState = [...state]; 
//  newstate.items.push(action.payload);   
// return newState 

// AND IMMER LIABRARY TAKES CARE OF THIS ^
// REDUX BEHINF THE SCENS USSES IMMER


// redux is used in huge applications when there are so many componentsn, slices , mutating states  (1000 of components)
// at that time debb=ugging is very toughh at that time redux helps