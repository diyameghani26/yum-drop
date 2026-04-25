import Header from "./Components/Header";
import Body from "./Components/Body";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import BottomNav from "./Components/BottomNav ";
import Profile from "./Components/Profile";

// Layout Component
const AppLayout = () => {
  return (
    <div className=" min-h-screen w-full overflow-x-hidden">
      <Header />
      <Outlet/>
      <BottomNav/>
    </div>
  );
};

// Router Config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
         {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

// bg-[#ffeada8f]