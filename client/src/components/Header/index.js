import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import NewNavLink from "./navLink";
import { routes } from "../../Routes";
import { selectPath } from "../../store/action/action.actions";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({
  isUserAuthenticated,
  topicstools,
  currentPath,
  toolPath,
}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
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

  const setPath = (item) => {
    if (currentPath === "home") {
      dispatch(selectPath(item));
    } else {
      dispatch(selectPath(item));
      navigate("/");
    }
  };

  const toolstopics = Object.entries(topicstools).map(([key, value], index) => (
    <li key={index}>
      <a
        id={"li_" + index}
        className='collapsible-header nav-link nav-link grey-text'
      >
        {key}
      </a>
      <div className='collapsible-body'>
        <ul>
          {value.map((item, idx) => (
            <li key={idx}>
              <a
                href=''
                name={item}
                onClick={() => setPath(item)}
                className={
                  "sidenav-close nav-link nav-link " +
                  (item === toolPath && currentPath === "home"
                    ? "blue-text"
                    : "grey-text")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ));

  return (
    <header>
      <div className='container'>
        <a
          href='#'
          data-target='nav-mobile'
          className='top-nav sidenav-trigger  waves-effect waves-light circle hide-on-large-only left'
        >
          <i className='material-icons'>menu</i>
        </a>
      </div>

      <ul
        id='nav-mobile'
        className='sidenav sidenav-fixed '
        style={{ transform: "translateX(-105%)", width: "220px" }}
      >
        <li className='logo'>
          <img
            src={"./devopslogo.png"}
            width='120px'
            onClick={() => window.location.replace("/")}
          />
        </li>
        {siteRoutes}
        <li className='no-padding'>
          <ul className='collapsible collapsible-accordion'>{toolstopics}</ul>
        </li>
      </ul>
      {/* <ul
        className='sidenav sidenav-close transparent z-depth-0'
        id='mobile-demo'
        style={{ top: "50px", width: "150px" }}
      >
        {siteRoutes}
      </ul> */}
    </header>
  );
};

const mapStateToProps = (state) => ({
  toolPath: state.action.path.selectedPath,
  currentPath: state.action.route.path,
  topicstools: state.blog.topics.tools,
  topics: state.blog.topics.topicsData,
  tools: state.blog.topics.toolsData,
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
