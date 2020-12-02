import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import NewNavLink from "./navLink";
import { routes } from "../../Routes";

import "./index.css";

const Navbar = ({ isUserAuthenticated }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);

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
        <li className='center-align'>
          <img
            src='http://192.168.55.200:5000/api/hosting/image/46b3901cba83cc83a2cb9ebc1b1cac70.png'
            width='135px'
            onClick={() => window.location.replace("/")}
          />
        </li>
        {siteRoutes}
        <li>
          <ul class='collapsible'>
            <li>
              <a class='collapsible-header nav-link nav-link grey-text'>
                Virtualization
              </a>
              <div class='collapsible-body'>
                <ul>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool1</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool2</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool3</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool4</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class='collapsible-header nav-link nav-link grey-text'>
                Cloud
              </a>
              <div class='collapsible-body'>
                <ul>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool1</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool2</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool3</a>
                  </li>
                  <li>
                    <a class='nav-link nav-link grey-text'>tool4</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
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
