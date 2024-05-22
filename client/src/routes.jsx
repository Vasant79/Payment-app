import LandingPage from "./pages/LandingPage";
import Signup from "./components/Signup";

/**
 contains public and private routes
 */

const privateRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
];

const publicRoutes = [
  {
    path: "/signup",
    element: <Signup />,
  },
];

export { privateRoutes, publicRoutes };
