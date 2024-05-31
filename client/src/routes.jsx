import LandingPage from "./pages/LandingPage";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import TransactionPage from "./pages/TransactionPage";

/**
 contains public and private routes
 */

const privateRoutes = [
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/userdetail",
    element: <UserDetails />,
  },
  {
    path: "/transaction-history",
    element: <TransactionPage />,
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
