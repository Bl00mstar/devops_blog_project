import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const NewPost = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.8,
      dismissible: true,
      startingTop: "4%",
      endingTop: "5%",
    };
    var elems = document.querySelectorAll(".chapters");
    M.Collapsible.init(elems, {});
    var elems = document.getElementById("sel");
    var instances = window.M.FormSelect.init(elems, {});
    const modal = document.querySelectorAll(".amount");
    M.Modal.init(modal, options);
    if (showModal) {
      modal[1].M_Modal.close();

      setShowModal(false);
    }
  }, [showModal]);

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     const newAmount = {
  //       value,
  //       name,
  //     };
  //   };

  return (
    <div className='row center'>
      <a
        className='btn black waves-effect waves-light modal-trigger'
        data-target='add-amount'
      >
        Add Post
      </a>
      <div id='add-amount' className='modal amount'>
        <div className='modal-content'>
          <form id='add_amount'>
            <h5>Create post:</h5>
            <div class='input-field col s12'>
              <input id='first_name' type='text' class='validate'></input>
              <label for='first_name'>Title</label>
            </div>
            <div class='input-field col s12'>
              <select id='sel' multiple>
                <option value='' disabled selected>
                  Choose your option
                </option>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
              <label>Select tools</label>
            </div>
            <div class='input-field col s12'>
              <form action='#'>
                <div class='file-field input-field'>
                  <div class='btn-small'>
                    <span>Choose image</span>
                    <input type='file'></input>
                  </div>
                  <div class='file-path-wrapper'>
                    <input class='file-path validate' type='text'></input>
                  </div>
                </div>
              </form>
            </div>
            <button class='btn-small'>add chapter</button>
            <ul className='collapsible'>
              <li>
                <div id='name' className='collapsible-header'>
                  Chapter 1
                </div>
                <div className='collapsible-body'>
                  <label for='aaaa'>Chpater 1 title</label>
                  <input id='aaaa' type='text' class='validate'></input>
                  <form action='#'>
                    <div class='file-field input-field'>
                      <div class='btn-small'>
                        <span>Choose image</span>
                        <input type='file'></input>
                      </div>
                      <div class='file-path-wrapper'>
                        <input class='file-path validate' type='text'></input>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
