import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignIn from "./components/pages/SignIn.jsx";
import Signup from "./components/pages/Signup.jsx";
import DashBoard from "./components/pages/DashBoard.jsx";
import Send from "./components/pages/Send.jsx";
import Error from "./components/pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/send",
    element: <Send />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);
