import React from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";
import Logout from "./components/Logout";

export const routes = [
  { name: "Home", path: "/", element: <Home />, type: "image" },
  { name: "Login", path: "/Login", element: <Login />, type: "none" },
  { name: "About", path: "/About", element: <About />, type: "public" },
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
  { name: "404", path: "*", element: <div>404</div>, type: "noone" },
];

export default routes;
