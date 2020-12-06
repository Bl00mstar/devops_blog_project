import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const LastReading = ({ posts, history }) => {
  const [his, setHis] = useState([]);
  let navigate = useNavigate();
  let choosenPost;
  useEffect(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {});
    var ads = document.querySelectorAll(".modal");
    M.Modal.init(ads, {});
  });

  //   ((id, key) => {
  //     if (post.id === id) {
  //       return (
  //         <div className='center-align' key={key}>
  //           <div>{post.content}</div>
  //           <img width='300' src={post.photo_url}></img>
  //         </div>
  //       );
  //     }
  //   });

  //   useEffect(() => {
  //     const his = history.map((item) => {
  //       let historyValue = posts.find((x) => x.id === item);
  //       if (historyValue) {
  //         return { id: historyValue.id, title: historyValue.title };
  //       }
  //     });
  //     console.log(his);
  //     setHistoryValues(his);
  //   }, [history]);
  //   let content;
  //   if (his[0] !== undefined) {
  //     console.log(his);
  //     content = his.map((item, index) => {
  //       console.log(item);
  //       return (
  //         <div key={index} className='col s12'>
  //           <p>{item.title}</p>
  //         </div>
  //       );
  //     });
  //   } else {
  // useEffect(() => {
  //     history.map((id) => {
  //       let historyValue = posts.find((x) => x.id === id);
  //       setHis((his) => [...his, historyValue]);
  //     });
  //     console.log(his);
  //   }, [history]);

  let content = history.map((item, idx) => <div key={idx}>{item}</div>);

  //   }

  return (
    <div>
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h5 className='blue-text'>History</h5>

          {content}
        </div>
      </div>
      <div className='fixed-action-btn'>
        <a
          className='btn-floating btn-large blue'
          //   onMouseOver={() => choosenPost}
        >
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
  posts: state.blog.posts.postsData,
  history: state.action.history.posts,
});

export default connect(mapStateToProps)(LastReading);
