import Header from "./Components/Header";
import Body from "./Components/Body";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import BottomNav from "./Components/BottomNav ";
import Profile from "./Components/Profile";
import AuthProvider from "./utils/AuthContext";
import ProfilePage from "./Components/ProfilePage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
      {
  path: "/profilepage",
  element: <ProfilePage />,
}
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
    <AuthProvider>
  <RouterProvider router={appRouter} />
    </AuthProvider>
    </Provider>
)
}

export default App;

// bg-[#ffeada8f]