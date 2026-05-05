import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: "ri-home-5-line" },
    { name: "Help", path: "/help", icon: "ri-question-line" },
    { name: "Profile", path: "/profile", icon: "ri-user-3-line" },
    { name: "Favourites", path: "/fav", icon: "ri-heart-3-line" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white  shadow-md flex justify-around items-center py-1.5 md:hidden z-50 rounded-t-2xl">
      {navItems.map((item) => {
        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center text-[13px] transition-all ${
              isActive
                ? "text-amber-500 scale-105"
                : "text-gray-500"
            }`}
          >
            <i className={`${item.icon} text-xl`}></i>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;