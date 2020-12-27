import React, { useState, useEffect } from 'react';

import { handleRequest } from '@store/blog/blog.helpers';
// import Preloader from '../../../Shared/Layout/linearPreloader';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function AboutForm() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    handleRequest('GET', 'api/about/1')
      .then((data) => {
        setData({
          id: data[0].id,
          content: data[0].content,
          photo_url: data[0].photo_url,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const sendData = (e) => {
    e.preventDefault();
    handleRequest('POST', 'api/about/1', data)
      .then((data) => {
        M.toast({ html: 'About was updated.' });
      })
      .catch((err) => {
        M.toast({ html: err });
      });
  };

  return (
    <div>
      {data.content && data.photo_url ? (
        <form>
          <div className="input-field col s12">
            <label className="active" for="photoURL">
              Photo URL
            </label>
            <input
              id={'photoURL'}
              minLength={10}
              className="validate"
              value={data.photo_url}
              type={'text'}
              name={'photo_url'}
              onChange={(e) => handleData(e)}
            />
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="Content"
                      name="content"
                      value={data.content}
                      className="materialize-textarea"
                      onChange={(e) => handleData(e)}
                    ></textarea>
                    <label className="active" for="Content">
                      Content
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <span
              className="helper-text"
              data-error="Please input minimum 10 characters."
            ></span>
          </div>
          <button className="btn-small blue" onClick={(e) => sendData(e)}>
            EDIT
          </button>
        </form>
      ) : (
        // <Preloader />
        <div>asd</div>
      )}
    </div>
  );
}
