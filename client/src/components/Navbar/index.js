import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import NewNavLink from "./navLink";
import { routes } from "../../Routes";

export default function Navbar() {
  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  const publicRoutes = routes.map(({ name, path, type }, key) => {
    if (type === "public" || type === "private" || type === "auth")
      return (
        <li>
          <NewNavLink path={path} name={name} key={key} />
        </li>
      );
    return <></>;
  });

  return (
    <header>
      <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
        <i className='material-icons' style={{ color: "#039be5 " }}>
          menu
        </i>
      </a>
      <ul
        id='nav-mobile'
        className='sidenav sidenav-fixed'
        style={{ transform: "translateX(0%)" }}
      >
        {publicRoutes}
      </ul>

      <ul
        className='sidenav sidenav-close transparent z-depth-0'
        id='mobile-demo'
        style={{ top: "50px", width: "150px" }}
      >
        {publicRoutes}
      </ul>
    </header>
  );
}
