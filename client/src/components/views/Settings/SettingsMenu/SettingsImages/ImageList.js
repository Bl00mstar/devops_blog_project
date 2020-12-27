import React, { useState, useEffect } from 'react';
import { handleRequest } from '@store/blog/blog.helpers';
import ImageListLayout from './ImageListLayout';
import UploadContainer from './uploadContainer';
// import Preloader from '../../../Shared/Layout/linearPreloader';
import './index.css';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleRequest('GET', 'api/hosting/files')
      .then((data) => {
        setImages(data);
      })
      .then(() => {
        setLoading(false);
      });
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="row">
      <div className="col s12">
        <div className="fixed-container">
          <div className="col s10">
            <UploadContainer />
          </div>
          <div className="col s2">
            <button
              className="btn-large green"
              onClick={() => setRefresh(true)}
            >
              <i className=" tiny material-icons ">refresh</i>
            </button>
          </div>
          {/* {loading ? <Preloader /> : <ImageListLayout images={images} />} */}
        </div>
      </div>
    </div>
  );
};

export default ImageList;
