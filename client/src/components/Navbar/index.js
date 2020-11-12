import React, { useEffect } from "react";
import {
  useRoutes,
  Link,
  useLocation,
  useResolvedLocation,
  matchRoutes,
} from "react-router-dom";
import { routes } from "../../Routes";
import M from "materialize-css/dist/js/materialize.min.js";
const NavLink = ({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  let location = useLocation();
  let resolvedLocation = useResolvedLocation(to);
  let routeMatches = matchRoutes(routes, location);

  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedLocation.pathname;
  } else {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }

  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link className={allClassNames} to={to} {...rest} />;
};

export default function Navbar() {
  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  let element = useRoutes(routes);
  return (
    <div>
      <nav className='nav-extended N/A transparent z-depth-0'>
        <div className='nav-wrapper container'>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons' style={{ color: "#039be5 " }}>
              menu
            </i>
          </a>

          <ul className='right hide-on-med-and-down nav-link'>
            <li>
              <NavLink
                activeClassName='nav-link blue-text '
                inactiveClassName='nav-link grey-text grey-darken-2'
                className='nav-link '
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='nav-link blue-text '
                inactiveClassName='nav-link grey-text grey-darken-2'
                className='nav-link '
                to='/about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        className='sidenav sidenav-close transparent z-depth-0'
        id='mobile-demo'
        style={{ top: "50px", width: "150px" }}
      >
        <li>
          <NavLink
            activeClassName='nav-link blue-text '
            inactiveClassName='nav-link grey-text grey-darken-2'
            className='nav-link '
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='nav-link blue-text '
            inactiveClassName='nav-link grey-text grey-darken-2'
            className='nav-link '
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
      {element}
    </div>
  );
}
