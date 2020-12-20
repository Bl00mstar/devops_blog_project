import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";

import "materialize-css/dist/css/materialize.min.css";
import Sidenav from "./components/Sidenav";
import NavbarTitle from "./components/Navbar";

import { useDispatch } from "react-redux";
import { getUser } from "./store/user/user.actions";
import { getPosts, getTopicsTools } from "./store/blog/blog.actions";
import { loadPath } from "./store/action/action.actions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const element = useRoutes(routes);

  useEffect(() => {
    dispatch(loadPath());
    dispatch(getUser());
    dispatch(getTopicsTools());
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Sidenav />
      <main>
        <NavbarTitle />
        <div className='container'>{element}</div>
      </main>
      <footer className='page-footer transparent grey-text'>2020</footer>
    </>
  );
};

export default App;
