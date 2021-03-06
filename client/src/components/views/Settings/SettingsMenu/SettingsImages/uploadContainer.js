import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';
import './index.css';

const UploadContainer = () => {
  const [uploadedImage, setUploadedImage] = useState('');
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [image, setImage] = useState('');

  const removeAddedImage = () => {
    setImage('');
    setShowUploadButton(false);
    setUploadedImage('');
  };

  const copyToClipBoard = async (copyLink) => {
    try {
      await navigator.clipboard.writeText(copyLink);
      M.toast({ html: 'Link copied.' });
    } catch (err) {
      M.toast({ html: 'Link error.' });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', uploadedImage);
    axios
      .post('api/hosting', formData)
      .then((response) => {
        response.data.success
          ? setImage(response.data.image.filename)
          : alert('File already exists');
      })
      .catch((err) => alert('Error: ' + err + 'File can be too large.'));
  };

  return (
    <div className="row center s12">
      {(() => {
        if (image)
          return (
            <div className="col s12">
              <div className="col s4">
                <a
                  class="btn-small waves-effect waves-light blue "
                  onClick={() => copyToClipBoard('api/hosting/image/' + image)}
                >
                  copy link
                </a>
              </div>
              <div className="col s4">
                <img
                  src={'api/hosting/image/' + image}
                  className="x-mini-image"
                ></img>
              </div>
              <div className="col s4">
                <a
                  class=" btn-small waves-effect waves-light blue"
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
              <div className="col s12">
                <div className="col s6">
                  <button className="btn-small blue" onClick={handleClick}>
                    Upload image
                  </button>
                </div>
                <div className="col s6">
                  <button
                    className="btn-small blue"
                    onClick={() => removeAddedImage()}
                  >
                    Remove image
                  </button>
                </div>
              </div>
            </>
          );
        else
          return (
            <>
              <div className="col s12">
                <form action="#">
                  <div class="file-field input-field" id="upload-image">
                    <div class="btn-small blue">
                      <span>Choose image</span>
                      <input
                        type="file"
                        onChange={(e) => {
                          setUploadedImage(e.target.files[0]);
                          setShowUploadButton(true);
                        }}
                      ></input>
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text"></input>
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
