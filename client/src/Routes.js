import React from "react";

import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage/home";
import AboutPage from "./pages/AboutPage/about";
import Settings from "./pages/SettingsPage";
import Logout from "./pages/LogoutPage";

export const routes = [
  { name: "Home", path: "/", element: <HomePage />, type: "public" },
  { name: "Login", path: "/Login", element: <Login />, type: "public" },
  { name: "About", path: "/About", element: <AboutPage />, type: "public" },
  {
    name: "Settings",
    path: "/settings",
    element: <Settings />,
    type: "private",
  },
  {
    name: "Logout",
    path: "/logout",
    element: <Logout />,
    type: "private",
  },
  // { name: "404", path: "*", element: <div>404</div>, type: "noone" },
];

export default routes;
