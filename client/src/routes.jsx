import LandingPage from "./pages/LandingPage";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

/**
 contains public and private routes
 */

const privateRoutes = [
  {
    path: "/home",
    element: <Dashboard />,
  },
];

const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export { privateRoutes, publicRoutes };
