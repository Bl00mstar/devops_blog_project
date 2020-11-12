import React from "react";
import { useRoutes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Navbar from "./components/Navbar";

import { routes } from "./Routes";

const App = () => {
  let element = useRoutes(routes);

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
