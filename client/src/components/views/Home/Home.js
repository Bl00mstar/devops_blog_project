import React, { useEffect } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { loadTitle } from '@store/action/action.actions';

import HomePosts from './HomeContent/HomePosts';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: 'DevOps Notes', path: 'home' }));
  }, []);
  return (
    <div className="center">
      <h3>devops notes</h3>
      <HomePosts />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
