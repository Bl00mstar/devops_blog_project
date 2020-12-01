import React from "react";

import ShowImages from "./showImages";

export default function index() {
  return (
    <div>
      <navbar className='top-nav'>
        {/* <navbar className='nav-wrapper'> */}
        <h3
          className='header center blue-text text-darken-3'
          style={{ fontFamily: "Sansita Swashed" }}
        >
          DevOps Notes
        </h3>
        {/* </navbar> */}
      </navbar>
      {/* <header className='center'>DevOps Journal</header> */}
      <ShowImages />
      <footer>TEST</footer>
    </div>
  );
}
