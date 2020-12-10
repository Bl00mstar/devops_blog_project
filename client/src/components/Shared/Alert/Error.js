import React from "react";
import { connect } from "react-redux";

const isError = ({ error }) => {
  if (!error.isError) {
    return null;
  }
  return (
    <div className='card-panel'>
      <span className='red-text text-darken-2'>{error.msg}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps)(isError);
