import React, { useState, useEffect } from "react";
import axios from "axios";

import M from "materialize-css/dist/js/materialize.min.js";

const UploadContainer = ({ imageUrl }) => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [image, setImage] = useState("");
  const [imageId, setImageId] = useState("");

  const removeAddedImage = () => {
    setImageId("") &&
      setImage("") &&
      setShowUploadButton(false) &&
      setUploadedImage("");
  };

  useEffect(() => {
    imageUrl("image", image);
  }, [image]);

  const copyToClipBoard = async (copyLink) => {
    try {
      await navigator.clipboard.writeText(copyLink);
      M.toast({ html: "Link copied." });
    } catch (err) {
      M.toast({ html: "Link error." });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    // formData.append("caption", "asd8uyfbas80df");
    formData.append("file", uploadedImage);
    axios
      .post("http://192.168.55.200:5000/api/hosting", formData)
      .then((response) => {
        response.data.success
          ? setImage(response.data.image.filename) &&
            setImageId(response.data.image._id)
          : alert("File already exists");
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div className='row center s12'>
      {(() => {
        if (image)
          return (
            <div className='col s12'>
              <div className='col s4'>
                <a
                  class='btn-small waves-effect waves-light black '
                  onClick={() =>
                    copyToClipBoard(
                      "http://192.168.55.200:5000/api/hosting/image/" + image
                    )
                  }
                >
                  copy link
                </a>
              </div>
              <div className='col s4'>
                <img
                  src={"http://192.168.55.200:5000/api/hosting/image/" + image}
                  width='50'
                  height='50'
                  alt='foto'
                ></img>
              </div>
              <div className='col s4'>
                <a
                  class=' btn-small waves-effect waves-light black'
                  onClick={() => removeAddedImage()}
                >
                  remove
                </a>
              </div>
            </div>
          );
        if (showUploadButton)
          return (
            <>
              <div className='col s12'>
                <button className='btn-small' onClick={handleClick}>
                  Upload image
                </button>
              </div>
            </>
          );
        else
          return (
            <>
              <div className='col s12'>
                <form action='#'>
                  <label for='upload-image'>Upload image</label>
                  <div class='file-field input-field' id='upload-image'>
                    <div class='btn-small'>
                      <span>Choose image</span>
                      <input
                        type='file'
                        onChange={(e) => {
                          setUploadedImage(e.target.files[0]);
                          console.log(e.target.files[0]);
                          setShowUploadButton(true);
                        }}
                      ></input>
                    </div>
                    <div class='file-path-wrapper'>
                      <input class='file-path validate' type='text'></input>
                    </div>
                  </div>
                </form>
              </div>
            </>
          );
      })()}
    </div>
  );
};

export default UploadContainer;

{
  /* {image ? (
        <div className='container'>
          <button onClick={handleDelete(image)}>{image}</button>
          <img
            src={"http://192.168.55.200:5000/api/hosting/image/" + image}
            width='50'
            height='50'
            alt='foto'
          ></img>
          <span>http://192.168.55.200:5000/api/hosting/image/{image}</span>
        </div>*/
}
