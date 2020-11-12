import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Navbar from "./components/Navbar";

import { routes } from "./Routes";

import { useDispatch } from "react-redux";
import { getUser } from "./store/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  let element = useRoutes(routes);

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <main>
          <div className='container'>{element}</div>
        </main>
      </div>
    </div>
  );
};

export default App;
