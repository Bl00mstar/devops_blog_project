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

export default function NewNavLink({ path, name }) {
  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  let element = useRoutes(routes);
  return (
    <NavLink
      activeClassName='nav-link blue-text '
      inactiveClassName='nav-link grey-text '
      className='nav-link '
      to={path}
    >
      {name}
    </NavLink>
  );
}
