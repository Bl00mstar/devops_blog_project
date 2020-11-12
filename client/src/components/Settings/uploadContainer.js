import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadContainer = () => {
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  // const [uploadedImageUrl, setUploadedImageUrl] = useState("");
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
    <div className='UploadPage'>
      <div className='Upload__InputSection'>
        <input
          type='text'
          className='Upload__Caption'
          placeholder='Enter caption...'
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
        <input
          type='file'
          className='Upload__Input'
          onChange={(e) => {
            setUploadedImage(e.target.files[0]);
            // setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <button className='Upload__Button' onClick={handleClick}>
        Upload
      </button>
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
        <></>
      )}
    </div>
  );
};

export default UploadContainer;
