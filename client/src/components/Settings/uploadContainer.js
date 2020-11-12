import React, { useState } from "react";
import axios from "axios";

const UploadContainer = () => {
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(caption);
    console.log(uploadedImage);
    console.log(uploadedImageUrl);

    let formData = new FormData();
    formData.append("caption", caption);
    formData.append("file", uploadedImage);

    axios
      .post("http://192.168.55.200:5000/api/hosting", formData)
      .then((response) => {
        response.data.success
          ? alert("File successfully uploaded")
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
            setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <button className='Upload__Button' onClick={handleClick}>
        Upload
      </button>
    </div>
  );
};

export default UploadContainer;
