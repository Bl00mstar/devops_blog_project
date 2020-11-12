import React from "react";

import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Panel from "./pages/PanelPage";

export const routes = [
  { name: "Home", path: "/", element: <Home />, type: "public" },
  { name: "Login", path: "/login", element: <Login />, type: "private" },
  { name: "About", path: "/about", element: <About />, type: "public" },
  { name: "Panel", path: "/panel", element: <Panel />, type: "auth" },
  { name: "404", path: "*", element: <div>404</div>, type: "noone" },
];

export default routes;
