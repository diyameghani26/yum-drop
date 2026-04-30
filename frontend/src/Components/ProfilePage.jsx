import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [active, setActive] = useState("Orders");

  if (!user) {
    return <Navigate to="/" />;
  }

  const menu = [
    "Orders",
    "Swiggy One",
    "Favourites",
    "Payments",
    "Addresses",
    "Settings",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
     
      <div className="bg-orange-500 text-white px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {user?.email?.split("@")[0]}
          </h1>
          <p className="text-sm mt-2 opacity-90">
            {user?.email}
          </p>
        </div>

        <button className="mt-4 md:mt-0 border border-white px-4 py-2 text-sm rounded hover:bg-white hover:text-[#3d6f85] transition">
          EDIT PROFILE
        </button>
      </div>

     
      <div className="md:hidden flex overflow-x-auto gap-3 px-4 py-3 bg-white shadow-sm">
        {menu.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm cursor-pointer transition
            ${
              active === item
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

  
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-6 bg-white">
       
        <div className="hidden md:block w-[250px] bg-gray-100 p-4">
          {menu.map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-3 cursor-pointer text-sm transition
              ${
                active === item
                  ? "bg-white font-medium"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </div>
          ))}

          <button
            onClick={logout}
            className="mt-6 w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Logout
          </button>
        </div>

   
        <div className="flex-1 p-6 flex items-center justify-center text-center">
          
          {active === "Orders" && (
            <div>
              <p className="text-orange-500 text-sm mb-4">
                Your orders will be listed here.
              </p>

              <p className="text-lg font-semibold text-gray-700">
                No Orders
              </p>

              <p className="text-sm text-gray-500 mt-2">
                You haven't placed any order yet.
              </p>
            </div>
          )}

          {active !== "Orders" && (
            <p className="text-gray-500">Coming soon...</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

