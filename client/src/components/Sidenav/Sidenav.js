import React, { useEffect } from "react";
import { routes } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import M from "materialize-css/dist/js/materialize.min.js";
import NavLink from "./NavLink";
import { selectPath } from "../../store/action/action.actions";
import "./index.css";

const Sidenav = ({
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
            <NavLink path={path} name={name} key={key} />
          </li>
        );
      return <></>;
    });
  } else {
    siteRoutes = routes.map(({ name, path, type }, key) => {
      if (type === "public" || type === "auth")
        return (
          <li>
            <NavLink path={path} name={name} key={key} />
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
                name={item}
                onClick={() => setPath(item)}
                className={
                  "sidenav-close nav-link nav-link " +
                  (item === toolPath && currentPath === "home"
                    ? "blue-text"
                    : "white-text")
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

      <ul id='nav-mobile' className='sidenav sidenav-fixed '>
        <li className='logo'>
          <a
            onClick={() => window.location.replace("/")}
            id='logo-container'
            className='brand-logo transparent'
          >
            <object
              id='front-page-logo'
              type='image/png'
              data='./devopslogo.png'
            ></object>
          </a>
        </li>
        {siteRoutes}
        <li className='no-padding'>
          <ul className='collapsible collapsible-accordion'>{toolstopics}</ul>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => ({
  toolPath: state.action.path.selectedPath,
  currentPath: state.action.route.path,
  topicstools: state.blog.topics.tools,
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Sidenav);
