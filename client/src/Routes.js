import React from "react";

import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Settings from "./pages/SettingsPage";
import Logout from "./pages/LogoutPage";

export const routes = [
  { name: "Home", path: "/", element: <Home />, type: "image" },
  { name: "Login", path: "/login", element: <Login />, type: "auth" },
  { name: "About", path: "/about", element: <About />, type: "public" },
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
