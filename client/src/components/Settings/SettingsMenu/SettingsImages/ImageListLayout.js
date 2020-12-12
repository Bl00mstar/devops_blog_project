import React from "react";

export default function ImageListLayout({ images }) {
  const deleteImage = () => {
    console.log("asd");
  };

  const imageList = images
    .slice(0)
    .reverse()
    .map((image) => {
      return (
        <tr key={image.id}>
          <th>
            <img
              src={"api/hosting/image/" + image.filename}
              width='50'
              height='50'
              alt='foto'
            ></img>
          </th>
          <th>{image.filename}</th>
          <th>
            {" "}
            <button
              className='btn btn-small red'
              onClick={() => deleteImage(image.id)}
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
