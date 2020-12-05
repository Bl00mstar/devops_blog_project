import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/navbar";
import { routes } from "./Routes";

import { useDispatch } from "react-redux";
import { getUser } from "./store/user/user.actions";
import { getPosts, getTopicsTools } from "./store/blog/blog.actions";
import { loadPath } from "./store/action/action.actions";
const App = ({ pageTitle }) => {
  const dispatch = useDispatch();
  let element = useRoutes(routes);

  useEffect(() => {
    dispatch(loadPath());
    dispatch(getUser());
    dispatch(getTopicsTools());
    dispatch(getPosts());
  }, []);

  return (
    <body className='App'>
      <Header />
      <main>
        <Navbar title={pageTitle} />
        <div className='container'>{element}</div>
      </main>
      <footer className='page-footer transparent right grey-text'>2020</footer>
    </body>
  );
};

const mapStateToProps = (state) => ({
  pageTitle: state.action.route.title,
});

export default connect(mapStateToProps)(App);
