import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import NewNavLink from "./navLink";
import { routes } from "../../Routes";

const Navbar = ({ isUserAuthenticated }) => {
  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  let siteRoutes;
  if (isUserAuthenticated) {
    siteRoutes = routes.map(({ name, path, type }, key) => {
      if (type === "public" || type === "private")
        return (
          <li>
            <NewNavLink path={path} name={name} key={key} />
          </li>
        );
      return <></>;
    });
  } else {
    siteRoutes = routes.map(({ name, path, type }, key) => {
      if (type === "public" || type === "auth")
        return (
          <li>
            <NewNavLink path={path} name={name} key={key} />
          </li>
        );
      return <></>;
    });
  }

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
        {siteRoutes}
      </ul>

      <ul
        className='sidenav sidenav-close transparent z-depth-0'
        id='mobile-demo'
        style={{ top: "50px", width: "150px" }}
      >
        {siteRoutes}
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
