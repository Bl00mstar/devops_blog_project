import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadContainer = () => {
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(image);
  }, [image]);

  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("caption", caption);
    formData.append("file", uploadedImage);

    axios
      .post("http://192.168.55.200:5000/api/hosting", formData)
      .then((response) => {
        console.log(response.data.image.filename);
        response.data.success
          ? setImage(response.data.image.filename)
          : alert("File already exists");
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div className='row center s12'>
      {image ? (
        <div className='container'>
          <img
            src={"http://192.168.55.200:5000/api/hosting/image/" + image}
            width='50'
            height='50'
            alt='foto'
          ></img>
          <span>http://192.168.55.200:5000/api/hosting/image/{image}</span>
        </div>
      ) : (
        <div>
          <div className='col s4'>
            <input
              type='text'
              className='Upload__Caption'
              placeholder='Image Caption'
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            />
          </div>
          <div className='col s4'>
            <form action='#'>
              <div class='file-field input-field'>
                <div class='btn-small'>
                  <span>File</span>
                  <input
                    type='file'
                    onChange={(e) => {
                      setUploadedImage(e.target.files[0]);
                      // setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
                    }}
                  ></input>
                </div>
                <div class='file-path-wrapper'>
                  <input class='file-path validate' type='text'></input>
                </div>
              </div>
            </form>
          </div>
          <div className='col s4'>
            <button className='btn-large' onClick={handleClick}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadContainer;
