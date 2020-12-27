import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ModalHistory from './HomeHistory';
import { setTheme } from '@store/action/action.actions';

import { ButtonColor } from './FloatingButtonStyling';

const FloatingButton = ({ history, themeMode, setTheme }) => {
  let navigate = useNavigate();

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {});
    var ads = document.querySelectorAll('.modal');
    M.Modal.init(ads, {});
  });

  let choosenPost;
  if (history[0]) {
    const reverse = history[0].split(',').reverse();
    let unique = [...new Set(reverse)];
    choosenPost = unique.map((id) => <ModalHistory value={id} />);
  } else {
    choosenPost = <span>Nothing to show.</span>;
  }

  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content ">
          <h5 className="blue-text">History</h5>
          <table>
            <tbody>{choosenPost}</tbody>
          </table>
        </div>
      </div>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large">
          <ButtonColor>
            <i className="large material-icons">apps</i>
          </ButtonColor>
        </a>

        <ul>
          <li>
            <a onClick={() => navigate('login')} className="btn-floating">
              <ButtonColor>
                <i className="material-icons">settings</i>
              </ButtonColor>
            </a>
          </li>
          <li>
            <a className="btn-floating modal-trigger" data-target="modal1">
              <ButtonColor>
                <i className="material-icons">history</i>
              </ButtonColor>
            </a>
          </li>
          <li>
            {themeMode === 'dark' ? (
              <a onClick={() => setTheme('light')} className="btn-floating">
                <ButtonColor>
                  <i className="material-icons">light_mode</i>
                </ButtonColor>
              </a>
            ) : (
              <a onClick={() => setTheme('dark')} className="btn-floating">
                <ButtonColor>
                  <i className="material-icons">dark_mode</i>
                </ButtonColor>
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  history: state.action.history.posts,
  themeMode: state.action.menu.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (params) => dispatch(setTheme(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatingButton);
