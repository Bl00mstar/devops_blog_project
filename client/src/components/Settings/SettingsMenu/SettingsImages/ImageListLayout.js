import React from "react";
import { handleRequest } from "../../../../store/blog/blog.helpers";
import "./index.css";

export default function ImageListLayout({ images }) {
  const deleteImage = async (_id) => {
    console.log(_id);
    handleRequest("GET", `api/hosting/delete/${_id}`).then((data) =>
      console.log(data)
    );
  };
  let imageList = images
    .slice(0)
    .reverse()
    .map((image) => {
      console.log(image);
      return (
        <tr key={image.id}>
          <th>
            <img
              className='mini-image'
              src={"api/hosting/image/" + image.filename}
            ></img>
          </th>
          <th>{image.filename}</th>
          <th>
            {" "}
            <button
              className='btn btn-small red'
              onClick={() => deleteImage(image._id)}
            >
              <i className=' tiny material-icons '>delete</i>
            </button>
          </th>
        </tr>
      );
    });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Filename</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{imageList}</tbody>
      </table>
    </div>
  );
}
