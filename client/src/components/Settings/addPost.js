import React from "react";

import Button from "../Button/Button";
import NewPost from "./newPost";

export default function AddPost() {
  const showPosts = () => {};
  const addNewPost = () => {};

  return (
    <div className='row'>
      <div class='valign-wrapper'>
        <div className='col s12'>
          <div className='card-content'>
            <div className='card-action center'>
              <NewPost />
            </div>
            asd
            <div className='card-action center'>
              <div>
                <Button value={"Show Posts"} onClick={showPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
