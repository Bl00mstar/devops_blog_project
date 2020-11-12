import React from "react";

import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Panel from "./pages/PanelPage";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/about", element: <About /> },
  { path: "/panel", element: <Panel /> },
  { path: "*", element: <div>404</div> },
];

export default routes;
