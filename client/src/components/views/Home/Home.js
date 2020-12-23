import React, { useEffect } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { loadTitle } from '@store/action/action.actions';

import HomePosts from './HomeContent/HomePosts';
import HomeFloatButton from './HomeContent/HomeFloatButton';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: 'DevOps Notes', path: 'home' }));
  }, []);
  return (
    <>
      <HomePosts />
      <HomeFloatButton />
    </>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
