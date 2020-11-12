import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowImages() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.55.200:5000/api/hosting")
      .then((response) => {
        setImageList(response.data.images);
      })
      .catch((err) => alert(err));
  }, [imageList]);

  return (
    <div>
      <div className='ListPage'>
        <div className='ListImageContainer'>
          {imageList.map((file, key) => (
            <div className='ListImage' key={key}>
              <p className='ListImage__Caption'>{file.caption}</p>
              <p className='ListImage__Date'>{file.createdAt}</p>
              <img
                src={
                  "http://192.168.55.200:5000/api/hosting/image/" +
                  file.filename
                }
                width='200'
                height='200'
                alt='list'
                className='ListImage__Image'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
