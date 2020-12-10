import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import ModalHistory from "./modalHistory";

const LastReading = ({ history }) => {
  let navigate = useNavigate();
  useEffect(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {});
    var ads = document.querySelectorAll(".modal");
    M.Modal.init(ads, {});
  });

  let choosenPost;
  if (history[0]) {
    const reverse = history[0].split(",").reverse();
    choosenPost = reverse.map((id) => <ModalHistory value={id} />);
  } else {
    choosenPost = <span>Nothing to show.</span>;
  }

  return (
    <div>
      <div id='modal1' className='modal'>
        <div className='modal-content '>
          <h5 className='blue-text'>History</h5>
          <table>
            <tbody>{choosenPost}</tbody>
          </table>
        </div>
      </div>
      <div className='fixed-action-btn'>
        <a className='btn-floating btn-large blue'>
          <i className='large material-icons'>apps</i>
        </a>
        <ul>
          <li>
            <a onClick={() => navigate("login")} className='btn-floating blue'>
              <i className='material-icons'>settings</i>
            </a>
          </li>
          <li>
            <a className='btn-floating blue modal-trigger' data-target='modal1'>
              <i className='material-icons'>history</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  history: state.action.history.posts,
});

export default connect(mapStateToProps)(LastReading);